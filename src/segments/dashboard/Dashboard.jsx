import React from 'react';
import Header from "../../components/shared/Header";
import {tokens} from "../../themes/themes";

import {useTheme, Box, Typography,} from "@mui/material";

function Dashboard(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <div>
            <Header title={"DASHBOARD"} subtitle={"This is your dashboard"}/>
        </div>
    );
}

export default Dashboard;