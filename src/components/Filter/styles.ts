import {TouchableOpacity} from "react-native";
import styled, {css} from "styled-components/native";

export type FilterStyleProps = {
    color: string;
}

export const Container = styled(TouchableOpacity)`
    flex-direction: row;
    
    align-items: center;
    margin-top: 65px;
`;

export const Title = styled.Text<FilterStyleProps>`
    ${({theme, color}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
        color: ${color};
    `};
`

export const CounterShape = styled.View`
    align-items: center;
    margin-left: 4px;
    
    width: 25px;
    
    border-radius: 50px;
    
    background-color: ${({theme}) => theme.COLORS.GRAY_400};
`

export const Counter = styled.Text`
    
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_100};
    `};
`
