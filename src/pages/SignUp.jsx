import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LoginGoogle from "../components/LoginGoogle";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/authAction";
import { useState, useEffect } from "react";
import MenuItem from "@mui/material/MenuItem";
import { getCountry } from "../redux/actions/countryAction";
import Autocomplete from "@mui/material/Autocomplete";

const genders = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Prime Flight
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const { countries } = useSelector((state) => state.country);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  const countrylist = [
    {
      value: "Wakanda",
      label: "Wakanda",
    },
  ];

  // const countrylist = countries?.map(({ value, label }) => ({
  //   value,
  //   label,
  // }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email,
      password,
      name,
      nationality,
      gender,
    };
    dispatch(register(data));
  };

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      {!token ? (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <PersonIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="name"
                    name="name"
                    required
                    fullWidth
                    id="Name"
                    value={name}
                    label="Name"
                    autoFocus
                    onChange={(e) => setName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value={email}
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Gender"
                    id="outlined-select"
                    select
                    fullWidth
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    helperText="Please select your gender"
                  >
                    {genders.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  {/* <TextField
                    required
                    fullWidth
                    id="nationality"
                    label="Nationality"
                    name="nationality"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                  /> */}
                  <TextField
                    required
                    label="Nationality"
                    id="outlined-select"
                    select
                    fullWidth
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    helperText="Please select your gender"
                  >
                    {countries.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    value={password}
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="Saya setuju untuk membuat akun"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Typography
                component="h2"
                variant="h5"
                style={{ marginBottom: 10 }}
              >
                OR
              </Typography>
              <LoginGoogle label="Register with Google" />
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="/login" variant="body2" style={{ marginTop: 10 }}>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      ) : (
        <React.Fragment>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <PersonIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Berhasil Register
              </Typography>
              <Button variant="contained">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  href="/"
                >
                  Home
                </Link>
              </Button>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </React.Fragment>
      )}
    </ThemeProvider>
  );
}
