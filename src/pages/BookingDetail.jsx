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
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ContactsIcon from "@mui/icons-material/Contacts";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import Switch from "@mui/material/Switch";

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

function BookingDetail() {
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getAirport());
  //   }, [dispatch]);

  const [titel, setTitel] = React.useState("Tuan");
  const handleChangeTitel = (event) => {
    setTitel(event.target.value);
  };

  const [codeNegara, setCodeNegara] = React.useState("+62");
  const handleChangeCodeNegara = (event) => {
    setCodeNegara(event.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
            style={{ marginTop: 10, marginBottom: 20 }}
          >
            <CardContent>
              <ContactsIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <Typography variant="h6" gutterBottom>
                Detail Pemesanan
              </Typography>
              <Grid container spacing={9}>
                <Grid item xs={4} sm={3}>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="titel">Titel</InputLabel>
                    <Select
                      labelId="titel"
                      id="titel"
                      value={titel}
                      label="titel"
                      onChange={handleChangeTitel}
                    >
                      <MenuItem value={"Tuan"}>Tuan</MenuItem>
                      <MenuItem value={"Nyonya"}>Nyonya</MenuItem>
                      <MenuItem value={"Nona"}>Nona</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={8} sm={9}>
                  <TextField
                    required
                    id="nama"
                    name="nama"
                    label="Nama"
                    fullWidth
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={4} sm={3}>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="code-negara">Code Negara</InputLabel>
                    <Select
                      labelId="code-negara"
                      id="code-negara"
                      value={codeNegara}
                      label="code-negara"
                      onChange={handleChangeCodeNegara}
                    >
                      <MenuItem value={"+62"}>+62</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={8} sm={9}>
                  <TextField
                    required
                    id="nomerHp"
                    name="nomerHp"
                    label="Nomer Hp"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid
          container
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{ backgroundColor: "#DCDCDC" }}
        >
          <Card
            sx={{ maxWidth: 700, width: 700 }}
            style={{ marginTop: 10, marginBottom: 20 }}
          >
            <CardContent>
              <AirlineSeatReclineNormalIcon
                sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
              />
              <Typography variant="h6" gutterBottom>
                Detail Penumpang
              </Typography>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Sama dengan pemesan"
              />
              <Grid container spacing={9}>
                <Grid item xs={4} sm={3}>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="titel">Titel</InputLabel>
                    <Select
                      labelId="titel"
                      id="titel"
                      value={titel}
                      label="titel"
                      onChange={handleChangeTitel}
                    >
                      <MenuItem value={"Tuan"}>Tuan</MenuItem>
                      <MenuItem value={"Nyonya"}>Nyonya</MenuItem>
                      <MenuItem value={"Nona"}>Nona</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={8} sm={9}>
                  <TextField
                    required
                    id="nama"
                    name="nama"
                    label="Nama"
                    fullWidth
                    variant="standard"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <Button variant="contained" style={{ marginBottom: 10 }}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/payment`}
              >
                Lanjut Bayar
              </Link>
            </Button>
          </Card>
        </Grid>

        <Footer />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default BookingDetail;
