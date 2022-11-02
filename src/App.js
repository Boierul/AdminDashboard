import Square from "./components/Square/Square";
import {ColorModeContext, useMode} from "./themes";
import {CssBaseline, ThemeProvider} from "@mui/material";

import './App.css';
import Topbar from "./segments/global/Topbar";

function App() {

    const [theme, colorMode] = useMode();

    return (

        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="App">
                    <main className={"content"}>
                        <Topbar />
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

// eslint-disable-next-line no-unused-vars
export function generateSquares() {
    return (
        <>
            <Square insideText={"Square 1"} color={"red"}/>
            <Square insideText={"Square 2"} color={"blue"}/>
            <Square insideText={"Square 3"} color={"teal"}/>
            <Square insideText={"Square 4"} color={"pink"}/>
            <Square insideText={"Square 5"} color={"darkviolet"}/>
            <Square insideText={"Square 6"} color={"gold"}/>
            <Square insideText={"Square 7"} color={"silver"}/>
            <Square insideText={"Square 8"} color={"darkorange"}/>
        </>
    )
}

export default App;
