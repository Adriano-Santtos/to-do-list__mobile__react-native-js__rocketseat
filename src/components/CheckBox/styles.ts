import {TouchableOpacity} from "react-native";

import styled from "styled-components/native";

import {Octicons} from "@expo/vector-icons";

export type ButtonIconStyleProps = {
    isChecked: boolean
}

export const Container = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
`

export const Icon = styled(Octicons).attrs<ButtonIconStyleProps>((props) => ({}))<ButtonIconStyleProps>`
    color: ${({theme, isChecked}) => (isChecked ? theme.COLORS.PURPLE_DARK : theme.COLORS.BLUE)};
    background-color: ${({
                             theme,
                             isChecked
                         }) => (isChecked ? theme.COLORS.GRAY_100 : 'transparent')};
    
    border-radius: 50px;
    
    width: 24px;
    height: 24px;
`;

