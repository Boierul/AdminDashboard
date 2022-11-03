import React from 'react';
import {Box, useTheme} from "@mui/material";
import {DataGrid, GridToolbar} from "@mui/x-data-grid";

import {tokens} from "../../themes/themes";
import {mockDataContacts} from "../../data/mockData";
import Header from "../../components/shared/Header";

function Contacts() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.5,
            headerAlign: 'center',
            align: "center"
        },
        {
            field: "registrarId",
            headerName: "Registrar ID",
            headerAlign: 'center',
            align: "center"
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            headerAlign: 'center',
            align: "center",
            cellClassName: "name-column--cell",
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
            headerName: "Email",
            flex: 1,
            headerAlign: 'center',
            align: "center"
        },
        {
            field: "address",
            headerName: "Address",
            flex: 1,
            headerAlign: 'center',
            align: "center"
        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
            headerAlign: 'center',
            align: "center"
        },
        {
            field: "zipCode",
            headerName: "Zip Code",
            flex: 1,
            headerAlign: 'center',
            align: "center"
        },
    ];

    return (
        <Box className={"boxxx"} m={"30px"}>
            <Header title={"CONTACTS"} subtitle={"All the contacts available"} color={colors.greenAccent["400"]}/>
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
                        backgroundColor: colors.greenAccent["700"],
                        borderBottom: "none",
                        borderRadius: "0.2em"
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary["400"],
                        colors: colors.greenAccent["600"]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.greenAccent["700"],
                        borderRadius: "0.2em"
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent["200"]} !important`,
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.gray["100"]} !important`,
                    },
                }}
            >
                <DataGrid
                    columns={columns}
                    rows={mockDataContacts}
                    components={{Toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    );
}

export default Contacts;