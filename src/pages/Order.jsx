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
import { getAirport } from "../redux/actions/airportAction";
import { Link } from "react-router-dom";

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

function Order() {
  const dispatch = useDispatch();
  const { airports } = useSelector((state) => state.airport);
  const airportSelector = [
    { label: "Bandara Soekarno-Hatta", value: "Bandara Soekarno-Hatta" },
    { label: "Bandara Juanda", value: "Bandara Juanda" },
  ];

  useEffect(() => {
    dispatch(getAirport());
  }, [dispatch]);

  const [date, setDate] = React.useState(null);
  const [date2, setDate2] = React.useState(null);
  const [penumpang, setPenumpang] = React.useState(1);

  const [bookingType, setBookingType] = React.useState("One way");

  const handleChangeDate = (event) => {
    setBookingType(event.target.value);
  };

  const handleChangePenumpang = (event) => {
    setPenumpang(event.target.value);
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
              <Typography variant="h6" gutterBottom>
                Cari Tiket
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  {/* <TextField
                    required
                    id="dari"
                    name="dari"
                    label="Dari"
                    fullWidth
                    variant="standard"
                  /> */}
                  <Autocomplete
                    disablePortal
                    id="box-dari"
                    options={airportSelector}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Dari" />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {/* <TextField
                    required
                    id="ke"
                    name="ke"
                    label="Ke"
                    fullWidth
                    variant="standard"
                  /> */}
                  <Autocomplete
                    disablePortal
                    id="box-ke"
                    options={airportSelector}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Ke" />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl>
                    <FormLabel id="demo-form-control-label-placement">
                      Pilih Jadwal Pesawatmu
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-form-control-label-placement"
                      name="position"
                      defaultValue="top"
                    >
                      <FormControlLabel
                        control={<Radio />}
                        label="One way"
                        checked={bookingType === "One way"}
                        onChange={handleChangeDate}
                        value="One way"
                        name="radio-buttons"
                      />
                      <FormControlLabel
                        control={<Radio />}
                        label="Pulang-pergi"
                        checked={bookingType === "Pulang pergi"}
                        onChange={handleChangeDate}
                        value="Pulang pergi"
                        name="radio-buttons"
                      />
                    </RadioGroup>
                    <DatePicker
                      label="Berangkat"
                      value={date}
                      onChange={(newDate) => {
                        setDate(newDate);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <Typography variant="h6" gutterBottom></Typography>
                    <DatePicker
                      label={bookingType === "One way" ? "disabled" : "Pulang"}
                      disabled={bookingType === "One way" ? true : false}
                      value={date2}
                      onChange={(newDate2) => {
                        setDate2(newDate2);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="penumpang">Penumpang</InputLabel>
                    <Select
                      labelId="penumpang"
                      id="penumpang"
                      value={penumpang}
                      label="Penumpang"
                      onChange={handleChangePenumpang}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
            <Button variant="contained" style={{ marginBottom: 10 }}>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/booking`}
              >
                Cari
              </Link>
            </Button>
          </Card>
        </Grid>

        <Footer />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default Order;
