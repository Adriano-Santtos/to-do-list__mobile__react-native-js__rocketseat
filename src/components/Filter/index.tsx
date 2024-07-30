import {TouchableOpacityProps} from "react-native";

import {Container, Counter, CounterShape, FilterStyleProps, Title} from "@components/Filter/styles";

type Props = TouchableOpacityProps & FilterStyleProps & {
    title: string;
    color: string;
    tasksCounter?: number;
}

export function Filter({title, color, tasksCounter = 0, ...rest}: Props) {
    return (
        <Container
            {...rest}
        >
            <Title color={color}>
                {title}
            </Title>

            <CounterShape>
                <Counter>{tasksCounter}</Counter>
            </CounterShape>

        </Container>
    )
}
