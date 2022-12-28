import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import ResponsiveAppBar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import FlightIcon from "@mui/icons-material/Flight";
import SearchList from "../components/SearchList";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { getFlight } from "../redux/actions/flightAction";
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

// Data Dummy
function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

function Booking() {
  const dispatch = useDispatch();
  const { flight } = useSelector((state) => state.flight);
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
          sx={{ maxWidth: 700, width: 700 }}
          style={{
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Hasil Pencarian
            </Typography>
            <Button variant="contained" style={{ marginBottom: 10 }}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/Order`}
              >
                Ubah Pencarian
              </Link>
            </Button>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12}>
                {flight?.map(
                  flight ? (
                    (data) => <SearchList key={data.flight_id} {...data} />
                  ) : (
                    <Typography variant="h6" gutterBottom>
                      No Data
                    </Typography>
                  )
                )}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}

export default Booking;
