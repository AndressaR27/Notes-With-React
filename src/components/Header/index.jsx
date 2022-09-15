import { RiShutDownLine } from "react-icons/ri"
import { Container, Profile, Logout } from "./styles";

export function Header(){

    return (
        <Container>
            <Profile>
                <img src="https://github.com/AndressaR27.png" alt="Foto do usuário"></img>
                <div>
                    <span>Bem-vinda</span>
                    <strong>Andressa Rodrigues</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}