import {StatusBar} from "react-native";

import {ThemeProvider} from "styled-components/native";

import {Home} from "@screens/Home";

import {Loading} from "@components/Loading";

import theme from "./src/theme";

import {Inter_400Regular, Inter_700Bold, useFonts} from "@expo-google-fonts/inter"

export default function App() {
    const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold});

    return (
        <ThemeProvider theme={theme}>
            <StatusBar
                barStyle={'light-content'}
                backgroundColor="transparent"
                translucent
            />
            {fontsLoaded ? <Home/> : <Loading/>}
        </ThemeProvider>
    );
}
