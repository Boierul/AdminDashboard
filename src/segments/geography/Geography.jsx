import React from 'react';
import Header from "../../components/shared/Header";
import {Box, useTheme} from "@mui/material";
import {tokens} from "../../themes/themes";
import GeographyChart from "../../components/geographychart/GeographyChart";

function Geography() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="30px">
            <Header title="Geography" subtitle="Simple Geography Chart with dummy data (your API calls could be here)"
                    color={colors.greenAccent[500]}/>

            <Box
                height="70vh"
                border={`1px solid ${colors.primary[100]}`}
                borderRadius="4px"
            >
                <GeographyChart/>
            </Box>
        </Box>
    );
}

export default Geography;