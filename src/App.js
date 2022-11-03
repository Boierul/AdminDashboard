import Square from "./components/square/Square";
import {ColorModeContext, useMode} from "./theme/themes";
import {CssBaseline, ThemeProvider} from "@mui/material";

import {Routes, Route} from "react-router-dom";
import Dashboard from "./segments/dashboard/Dashboard";
import Team from "./segments/team/Team";
import Invoices from "./segments/invoices/Invoices";
import Contacts from "./segments/contacts/Contacts";
import Bar from "./segments/bar/Bar";
import Form from "./segments/form/Form";
import Line from "./segments/line/Line";
import Pie from "./segments/pie/Pie";
import FAQ from "./segments/faq/Faq";
import Geography from "./segments/geography/Geography";
import Calendar from "./segments/calendar/Calendar";

import './App.css';
import Topbar from "./segments/global/Topbar";
import {useState} from "react";
import Sidebar from "./segments/global/Sidebar";

function App() {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div className="app">
                    <Sidebar isSidebar={isSidebar}/>
                    <main className={"content"}>
                        <Topbar setIsSidebar={setIsSidebar}/>
                        <Routes>
                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="/team" element={<Team/>}/>
                            <Route path="/contacts" element={<Contacts/>}/>
                            <Route path="/invoices" element={<Invoices/>}/>
                            <Route path="/form" element={<Form/>}/>
                            <Route path="/bar" element={<Bar/>}/>
                            <Route path="/pie" element={<Pie/>}/>
                            <Route path="/line" element={<Line/>}/>
                            <Route path="/faq" element={<FAQ/>}/>
                            <Route path="/calendar" element={<Calendar/>}/>
                            <Route path="/geography" element={<Geography/>}/>
                        </Routes>
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
            <Square insideText={"square 1"} color={"red"}/>
            <Square insideText={"square 2"} color={"blue"}/>
            <Square insideText={"square 3"} color={"teal"}/>
            <Square insideText={"square 4"} color={"pink"}/>
            <Square insideText={"square 5"} color={"darkviolet"}/>
            <Square insideText={"square 6"} color={"gold"}/>
            <Square insideText={"square 7"} color={"silver"}/>
            <Square insideText={"square 8"} color={"darkorange"}/>
        </>
    )
}

export default App;
