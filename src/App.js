import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import { darktheme, lightTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/Global.styles";
import { useThemeContext } from "./context/ThemeContext";

function App() {
    const { myTheme } = useThemeContext()
    const themes = myTheme==="light"?lightTheme:darktheme
    return (
        <ThemeProvider theme={themes}>
            <GlobalStyles />
            <AppRouter />
        </ThemeProvider>
    );
}

export default App;
