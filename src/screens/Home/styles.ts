import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const TopSection = styled.View`
    flex: 0.2;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};

    justify-content: center;

`;

export const BottomSection = styled.View`
    flex: 0.8;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    
    align-items: center;
`;

export const Form = styled.View`
    flex: 1;
    width: 90%;
    
    position: absolute;
    top: -5%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;


export const ButtonFormShape = styled.View`
    width: 18%;
    height: 100%;

    border-radius: 6px;
    
    justify-content: center;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.BLUE_DARK};
`

export const FilterOptions = styled.View`
    width: 90%;
    flex-direction: row;
    
    justify-content: space-between;
    
    padding-bottom: 20px;
`

export const TaskCardList = styled.View`
    width: 90%;
`
