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
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Switch from "@mui/material/Switch";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

function PaymentProcess() {
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
          style={{ marginTop: 150, marginBottom: 65 }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Pembayaran Berhasil
            </Typography>
            <Grid container spacing={1}></Grid>
            <CheckBoxIcon sx={{ width: 100, height: 100 }} />
          </CardContent>
          <Button
            variant="contained"
            style={{ marginTop: 5, marginBottom: 20 }}
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/ticket`}
            >
              Lihat Tiket
            </Link>
          </Button>
        </Card>
      </Grid>

      <Footer />
    </ThemeProvider>
  );
}

export default PaymentProcess;
