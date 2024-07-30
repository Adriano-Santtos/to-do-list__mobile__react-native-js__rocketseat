import {TouchableOpacityProps} from "react-native";

import {Ionicons} from "@expo/vector-icons";

import {Container, Icon} from "@components/ButtonIcon/styles";

type Props = TouchableOpacityProps & {
    size: number,
    color: string,
    icon: keyof typeof Ionicons.glyphMap;
}

export function ButtonIcon({icon, color, size, ...rest}: Props) {

    return (
        <Container {...rest}>
            <Icon
                name={icon}
                size={size}
                color={color}
            >
            </Icon>
        </Container>
    )
}
