import React from "react";
import ResponsiveAppBar from "../components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Footer from "../components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3D3D3D",
    },
    secondary: {
      main: "#656565",
    },
    sub: {
      main: "#DCDCDC",
    },
  },
});

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Grid container spacing={0} style={{ backgroundColor: "#656565" }}>
        <Grid
          item
          xs={12}
          md={5}
          display="flex"
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <React.Fragment>
            <CssBaseline />
            <Grid
              container
              maxWidth="false"
              style={{ backgroundColor: "#DCDCDC" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
              direction="column"
            >
              <h1>Prime Flight</h1>
              <h3 style={{ fontSize: 13 }}>
                “There’s something magic about airports it’s like standing in a
                room with a thousand doors.” ― Atticus Poetry, The Truth About
                Magic
              </h3>
              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <Fab variant="extended" color="primary">
                  <AppRegistrationIcon sx={{ mr: 1 }} />
                  TRAVEL NOW
                </Fab>
              </Box>
            </Grid>
          </React.Fragment>
        </Grid>
        <Grid item xs={12} md={7}>
          <img
            src={require("../assets/airport.jpg")}
            alt="airport"
            style={{ height: "100%", width: "100%" }}
          />
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}

export default Home;
