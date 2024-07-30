import styled, {css} from "styled-components/native";
import {TextInput} from "react-native";

interface ContainerProps {
    isFocused: boolean;
}

export const Container = styled(TextInput)<ContainerProps>`
    width: 80%;

    border-radius: 6px;
    border-width: 1px;

    padding: 16px;

    ${({theme, isFocused}) => css`
        background-color: ${theme.COLORS.GRAY_400};
        color: ${theme.COLORS.GRAY_100};

        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
        
        border-color: ${isFocused ? theme.COLORS.PURPLE_DARK : theme.COLORS.GRAY_700};
    `}
`
