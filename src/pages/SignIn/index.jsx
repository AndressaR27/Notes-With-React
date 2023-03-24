import {FiMail, FiLock} from "react-icons/fi"
import { Link } from "react-router-dom" 
import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { Background, Container, Form } from "./style";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    async function handleSignIn(event){
        event.preventDefault()
         await signIn({email, password})
    }

    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu login</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e=> setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e=> setPassword(e.target.value)}
                />

                <Button type="submit" title="Entrar" onClick={handleSignIn}></Button>

                <Link to="/register">
                    Criar conta
                </Link>
            </Form>
            <Background></Background>
        </Container>
    )
}