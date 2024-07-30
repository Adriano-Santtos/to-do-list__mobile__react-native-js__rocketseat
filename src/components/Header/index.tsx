import {Container, Logo} from "@components/Header/styles";

import logoPng from "@assets/logo.png"

export function Header() {

    return (
        <Container>
            <Logo
                source={logoPng}
                resizeMode="stretch"
            />
        </Container>
    )
}
