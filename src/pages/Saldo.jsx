import React from "react";
import { useState, useEffect } from "react";
import ResponsiveAppBar from "../components/Navbar";
import Footer from "../components/Footer";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SavingsIcon from "@mui/icons-material/Savings";

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

function Saldo() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ backgroundColor: "#DCDCDC" }}
      >
        <Card
          sx={{ maxWidth: 700 }}
          style={{ marginTop: 150, marginBottom: 106 }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom>
              My E-Money
            </Typography>
            <Grid container spacing={1}></Grid>
            <ListItem style={{ marginTop: 10 }}>
              <ListItemIcon>
                <SavingsIcon />
              </ListItemIcon>
              <ListItemText primary="Rp. 1.000.000" />
            </ListItem>
          </CardContent>
          <Button
            variant="contained"
            style={{ marginTop: 10, marginBottom: 20 }}
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/Saldo`}
            >
              Top Up
            </Link>
          </Button>
        </Card>
      </Grid>

      <Footer />
    </ThemeProvider>
  );
}

export default Saldo;
