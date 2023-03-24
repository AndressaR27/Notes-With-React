import { Container } from './style'

export function Input ( { icon: Icon, ...rest } ){ //Necessário que o componente comece com letra maiúscula
    return (
        <Container>
            {Icon && <Icon  size={20} />}
            <input {...rest} />
        </Container>
    )
};