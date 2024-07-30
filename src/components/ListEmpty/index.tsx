import {Container, Icon, Line, Message, Subtitle} from "./styles";

type Props = {
    message: string;
    subtitle: string;
}

export function ListEmpty({message, subtitle}: Props) {
    return (
        <Container>
            <Line/>

            <Icon name="clipboard-text-outline"/>

            <Message>{message}</Message>

            <Subtitle>{subtitle}</Subtitle>
        </Container>
    )
}
