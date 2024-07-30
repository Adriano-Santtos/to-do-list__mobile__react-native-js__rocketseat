import {TextInputProps} from "react-native";

import {Container} from "@components/Input/styles";

interface InputProps extends TextInputProps {
    isFocused: boolean;
}

export function Input({isFocused, ...rest}: InputProps) {
    return (
        <Container
            {...rest}
            isFocused={isFocused}
        />
    )
}
