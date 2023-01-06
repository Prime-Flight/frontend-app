import React from "react";
import { useState, useEffect } from "react";
import ResponsiveAppBar from "../components/Navbar";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
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
import MarkunreadIcon from "@mui/icons-material/Markunread";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import InstagramIcon from "@mui/icons-material/Instagram";
import Divider from "@mui/material/Divider";
import { useDispatch, useSelector } from "react-redux";

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

// List Dummy
function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Root = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(5),
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(5),
  },
}));

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

      <React.Fragment>
        <Grid
          container
          spacing={0}
          style={{
            backgroundColor: "#DCDCDC",
            textAlign: "start",
            paddingLeft: 50,
          }}
        >
          <Grid item xs={12} md={3}>
            <Typography sx={{ mt: 4, mb: 1 }} variant="h5" component="div">
              Prime Flight
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <MarkunreadIcon />
                </ListItemIcon>
                <ListItemText primary="primeflight@gmail.com" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <LocalPhoneIcon />
                </ListItemIcon>
                <ListItemText primary="081945081708" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <InstagramIcon />
                </ListItemIcon>
                <ListItemText primary="@primeflight" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography sx={{ mt: 4, mb: 1 }} variant="h5" component="div">
              Order
            </Typography>

            <ListItem>
              <ListItemIcon>
                <AirplaneTicketIcon />
              </ListItemIcon>
              <ListItemText primary="Cari penerbangan pilihanmu sekarang juga" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AirplaneTicketIcon />
              </ListItemIcon>
              <ListItemText primary="Harga tiket paling terjangkau di Indonesia" />
            </ListItem>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography sx={{ mt: 4, mb: 1 }} variant="h5" component="div">
              Passenger
            </Typography>

            <ListItem>
              <ListItemIcon>
                <AirplaneTicketIcon />
              </ListItemIcon>
              <ListItemText primary="Tambahin data penumpang kamu" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AirplaneTicketIcon />
              </ListItemIcon>
              <ListItemText primary="Pilih penumpang yang ingin kamu terbangin" />
            </ListItem>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography sx={{ mt: 4, mb: 1 }} variant="h5" component="div">
              Transaction
            </Typography>

            <ListItem>
              <ListItemIcon>
                <AirplaneTicketIcon />
              </ListItemIcon>
              <ListItemText primary="Transaksi cepat dan mudah" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AirplaneTicketIcon />
              </ListItemIcon>
              <ListItemText primary="Jangan lupa cek riwayat transaksimu" />
            </ListItem>
          </Grid>
        </Grid>
      </React.Fragment>

      <Footer />
    </ThemeProvider>
  );
}

export default Home;
