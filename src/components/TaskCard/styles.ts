import styled, {css} from "styled-components/native";

export const Container = styled.View<{ isChecked: boolean }>`
    flex-direction: row;
    
    min-height: 70px;
    
    border-radius: 7px;
    border-width: 0.5px;
    
    padding: 5px 20px 0 20px;
    margin-bottom: 10px;
    
    align-items: center;
    justify-content: space-between;

    ${({ theme }) => `
    background-color: ${theme.COLORS.GRAY_400};
    color: ${theme.COLORS.GRAY_100};
  `}

    border-color: ${({ isChecked, theme }) =>
            isChecked ? theme.COLORS.GRAY_400 : theme.COLORS.GRAY_300};
`;


export const Description = styled.Text<{ isChecked: boolean }>`
    text-decoration-line: ${({ isChecked }) => (isChecked ? 'line-through' : 'none')};
    color: ${({ isChecked , theme}) => (isChecked ? theme.COLORS.GRAY_300: theme.COLORS.GRAY_100)};;
    
    flex-wrap: wrap;
    max-width: 85%;
    
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD}px;
    `}
`

