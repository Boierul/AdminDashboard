import React from 'react';
import * as yup from "yup";
import {Formik} from "formik";
import {Box, Button, TextField, useTheme} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import Header from "../../components/shared/Header";
import {tokens} from "../../themes/themes";

function Form() {
    /* Allows to use Media Query */
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleFormSubmit = (values) => {
        console.log(values);
    };

    return (
        <Box m="30px">
            <Header title="CREATE USER" subtitle="Create a New User Profile" color={colors.greenAccent["400"]}/>

            <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
            >
                {/* Values from Formik */}
                {({
                      values,
                      errors,
                      touched,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                  }) => (
                    <form onSubmit={handleSubmit}>
                        <Box
                            display="flex"
                            flexWrap="wrap"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            gap="25px"
                            p="15px"
                            sx={{
                                "& .MuiFormLabel-filled": {
                                    color: colors.greenAccent["500"]
                                },
                                "& .MuiFormControl-root": {
                                    color: colors.greenAccent["500"],
                                    width: "450px"
                                },
                                "& .MuiOutlinedInput-filled": {
                                    color: colors.greenAccent["500"]
                                },
                                "& .MuiOutlinedInput-notchedOutline": {
                                    color: colors.greenAccent["600"]
                                },
                                "& .MuiOutlinedInput-input": {
                                    // color: colors.blueAccent["100"]
                                },
                                "& .Mui-focused": {
                                    color: colors.greenAccent["500"]
                                },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: colors.greenAccent["400"],
                                    },
                                    '&:hover fieldset': {
                                        borderColor: colors.greenAccent["100"],
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: colors.greenAccent["400"],
                                    },
                                    '&.Mui-filled': {
                                        borderColor: colors.greenAccent["700"],
                                    },
                                },
                            }}
                        >

                            <TextField
                                variant="outlined"
                                type="text"
                                label="First Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.firstName}
                                name="firstName"
                                error={!!touched.firstName && !!errors.firstName}
                                helperText={touched.firstName && errors.firstName}
                                sx={{gridColumn: "span 2"}}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                type="text"
                                label="Last Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.lastName}
                                name="lastName"
                                error={!!touched.lastName && !!errors.lastName}
                                helperText={touched.lastName && errors.lastName}
                                sx={{gridColumn: "span 2"}}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                type="text"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{gridColumn: "span 4"}}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                type="text"
                                label="Contact Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.contact}
                                name="contact"
                                error={!!touched.contact && !!errors.contact}
                                helperText={touched.contact && errors.contact}
                                sx={{gridColumn: "span 4"}}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                type="text"
                                label="Address 1"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address1}
                                name="address1"
                                error={!!touched.address1 && !!errors.address1}
                                helperText={touched.address1 && errors.address1}
                                sx={{gridColumn: "span 4"}}
                            />
                            <TextField
                                fullWidth
                                variant="outlined"
                                type="text"
                                label="Address 2"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.address2}
                                name="address2"
                                error={!!touched.address2 && !!errors.address2}
                                helperText={touched.address2 && errors.address2}
                                sx={{gridColumn: "span 4"}}
                            />
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px" pb="3rem" justifyContent="center">
                            <Button type="submit" color="secondary" variant="contained" size="large" sx={{width: "300px", marginTop: "1rem"}}>
                                Create New User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

/* Validate phone number */
const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    contact: yup
        .string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("required"),
    address1: yup.string().required("required"),
    address2: yup.string().required("required"),
});

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
};

export default Form;
