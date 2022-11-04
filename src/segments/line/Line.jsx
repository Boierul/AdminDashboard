import React from 'react';
import Header from "../../components/shared/Header";
import {Box, useTheme} from "@mui/material";
import {tokens} from "../../themes/themes";
import LineChart from "../../components/linechart/LineChart";



function Line() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="30px">
            <Header title="Line Chart" subtitle="Simple Line Chart with dummy data (your API calls could be here)" color={colors.greenAccent[500]}/>
            <Box height="70vh">
                <LineChart />
            </Box>
        </Box>
    );
};

export default Line;