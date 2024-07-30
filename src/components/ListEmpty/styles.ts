import styled, {css} from "styled-components/native";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export const Container = styled.View`
    flex: 1;

    align-items: center;
    justify-content: center;
`;

export const Line = styled.View`
    width: 100%;
    height: 2px;

    background-color: ${({theme}) => theme.COLORS.GRAY_400};
`

export const Icon = styled(MaterialCommunityIcons).attrs(({theme}) => ({
    size: 60,
    color: theme.COLORS.GRAY_400
}))`
    margin-top: 50px;
    margin-bottom: 10px;
`;

export const Message = styled.Text`
    text-align: center;

    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_300};
    `}
`

export const Subtitle = styled.Text`
    text-align: center;
    
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_300};
    `}
`;
