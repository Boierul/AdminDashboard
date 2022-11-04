import React from 'react';
import {Box, useTheme} from "@mui/material";
import PieChart from "../../components/piechart/PieChart";
import Header from "../../components/shared/Header";
import {tokens} from "../../themes/themes";



function Pie() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="30px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart with dummy data (your API calls could be here)" color={colors.greenAccent[500]}/>
            <Box height="70vh">
                <PieChart />
            </Box>
        </Box>
    );
}

export default Pie;