import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, Field } from "formik";
import { RegisterSchema } from "../validation";

const initialValues = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" to="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();


export default function SignUp() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            firstName: data.get("firstName"),
            lastName: data.get("firstName"),
            email: data.get("email"),
            password: data.get("password"),
            confirmPassword: data.get("confirmPassword")
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={() => { }}
                        validationSchema={RegisterSchema}
                    >
                        {({ errors, touched, isSubmitting, isValid, dirty }) => (
                            <Box
                                onSubmit={handleSubmit}
                                component="form"
                                noValidate
                                sx={{ mt: 1 }}
                            >
                                <Field
                                    as={TextField}
                                    margin="normal"
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    name="firstName"
                                    autoComplete="firstName"
                                />
                                {errors.firstName && touched.firstName ? (
                                    <div style={{ color: "red" }}>{errors.firstName}</div>
                                ) : null}
                                <Field
                                    as={TextField}
                                    margin="normal"
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lastName"
                                />
                                {errors.lastName && touched.lastName ? (
                                    <div style={{ color: "red" }}>{errors.lastName}</div>
                                ) : null}
                                <Field
                                    as={TextField}
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                                {errors.email && touched.email ? (
                                    <div style={{ color: "red" }}>{errors.email}</div>
                                ) : null}
                                <Field
                                    as={TextField}
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                {errors.password && touched.password ? (
                                    <div style={{ color: "red" }}>{errors.password}</div>
                                ) : null}
                                <Field
                                    as={TextField}
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="confirmPassword"
                                />
                                {errors.confirmPassword && touched.confirmPassword ? (
                                    <div style={{ color: "red" }}>{errors.confirmPassword}</div>
                                ) : null}
                                <Button
                                    disabled={!(isValid && dirty)}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link to="/">Forgot password?</Link>
                                    </Grid>
                                    <Grid item>
                                        <Link to="/signin">{"Already have account? Sign In"}</Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        )}
                    </Formik>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}