import React from 'react';
import Header from "../../components/shared/Header";
import {tokens} from "../../themes/themes";

import {useTheme, Box, Typography,} from "@mui/material";

function Dashboard(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="30px">
            <Header title={"DASHBOARD"} subtitle={"Welcome text for your dashboard"}/>
        </Box>
    );
}

export default Dashboard;