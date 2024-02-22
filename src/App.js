import { ThemeProvider } from "styled-components";
import AppRouter from "./router/AppRouter";
import { lightTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/Global.styles";

function App() {
    return (
        <div className="App">
        <ThemeProvider theme={lightTheme}>
          <GlobalStyles/>
                <AppRouter />
            </ThemeProvider>
        </div>
    );
}

export default App;
