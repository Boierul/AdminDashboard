import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import {tokens} from "../../themes/themes";
import {mockDataInvoices} from "../../data/mockData";
import Header from "../../components/shared/Header";


function Invoices() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
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
            field: "cost",
            headerName: "Cost",
            flex: 1,
            headerAlign: 'center',
            align: "center",
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>
            ),
        },
        {
            field: "date",
            headerName: "Date",
            flex: 1,
            headerAlign: 'center',
            align: "center"
        },
    ];

    return (
        <Box m="30px">
            <Header title="INVOICES" subtitle="List of all available invoices" color={colors.redAccent["400"]}/>
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
                        color: colors.redAccent["300"],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.redAccent["700"],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary["400"],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.redAccent["700"],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.redAccent["200"]} !important`,
                    },
                }}
            >
                <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
            </Box>
        </Box>
    );
};

export default Invoices;