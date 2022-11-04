import React from 'react';
import {Box, useTheme} from "@mui/material";

import Header from "../../components/shared/Header";
import BarChart from "../../components/barchart/BarChart";
import {tokens} from "../../themes/themes";


function Bar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="30px">
            <Header title="Bar Chart" subtitle="Simple Bar Chart with dummy data (your API calls could be here)" color={colors.greenAccent[500]}/>
            <Box height="70vh">
                <BarChart />
            </Box>
        </Box>
    );
}

export default Bar;