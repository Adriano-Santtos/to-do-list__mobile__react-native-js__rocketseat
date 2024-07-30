import {TouchableOpacity} from "react-native";

import styled from "styled-components/native";

import {Ionicons} from "@expo/vector-icons";

export type ButtonIconStyleProps = {
    size: number;
    color: string;
}

export const Container = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
`

export const Icon = styled(Ionicons).attrs<ButtonIconStyleProps>((props) => ({
    size: props.size,
    color: props.color
}))<ButtonIconStyleProps>`
    color: ${(props) => props.color};
`;

