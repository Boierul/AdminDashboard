import React from 'react';
import Header from "../../components/shared/Header";
import {tokens} from "../../themes/themes"
import {mockDataTeam} from "../../data/mockData";

import {DataGrid} from "@mui/x-data-grid";
import {Typography, Box, useTheme} from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

function Team() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "id",
            headerName: "ID",
            headerAlign: 'center',
            align: "center"
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
            headerAlign: 'center',
            align: "center"
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: 'center',
            align: "center"
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
            headerAlign: 'center',
            align: "center"
        },
        {
            field: "email",
            headerName: "Email Address",
            flex: 1,
            headerAlign: 'center',
            align: "center"
        },
        {
            field: "accessLevel",
            headerName: "Access Level",
            flex: 1,
            headerAlign: 'center',
            align: "center",
            renderCell: ({row: {access}}) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                            access === "admin"
                                ? colors.accessColors["admin"]
                                : access === "manager"
                                    ? colors.accessColors["manager"]
                                    : colors.accessColors["user"]
                        }
                        borderRadius="4px"
                    >
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon/>}
                        {access === "manager" && <SecurityOutlinedIcon/>}
                        {access === "user" && <LockOpenOutlinedIcon/>}
                        <Typography color={colors.gray["100"]} sx={{ml: "5px"}}>
                            {access}
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    console.log(mockDataTeam)
    console.log(columns)

    return (
        <Box m="30px">
            <Header title={"TEAM"} subtitle={"Managing the Team Members"}/>
            <Box
                m="40px 0 0 0"
                height="70vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent["300"],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent["700"],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary["400"],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent["700"],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent["200"]} !important`,
                    },
                }}
            >
                <DataGrid checkboxSelection columns={columns} rows={mockDataTeam}/>
            </Box>
        </Box>
    );
}

export default Team;