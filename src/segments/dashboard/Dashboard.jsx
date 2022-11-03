import React from 'react';
import Header from "../../components/shared/Header";
import {tokens} from "../../themes/themes";

import {useTheme, Box, Typography,} from "@mui/material";

function Dashboard() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="30px">
            <Header title={"DASHBOARD"} subtitle={"Welcome text for your dashboard"} color={colors.greenAccent["400"]}/>
        </Box>
    );
}

export default Dashboard;