import {
  createTheme,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  Box,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import SellIcon from "@mui/icons-material/Sell";
import React from "react";
import { useState } from "react";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { addSchedules } from "../redux/actions/scheduleAction";
import { useDispatch, useSelector } from "react-redux";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import moment from "moment";

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

function ScheduleInput() {
  const dispatch = useDispatch();
  const [airline_id_raw, setAirlineID] = useState("");
  const [departure_iata_code, setDeparture] = useState("");
  const [departure_icao_code, setDepartureICAO] = useState("WDDD");
  const [arrival_iata_code, setArrival] = useState("");
  const [arrival_icao_code, setArrivalICAO] = useState("WIII");
  const [flight_date_raw, setFlightDate] = useState("");
  const [flight_date_raw2, setFlightDate2] = useState("");
  const [seat_capacity_raw, setSeatTotal] = useState("");
  const [price_raw, setPrice] = useState("");

  const airportSelector = [
    { label: "Bandara Soekarno-Hatta", value: "JKT" },
    { label: "Bandara Ngurah Rai", value: "DPS" },
    { label: "Bandara Internasional Husein Sastranegara", value: "BDG" },
  ];

  let date = flight_date_raw;
  let departure_time = moment(date).format("YYYY-MM-DD, h:mm:ss");

  let date2 = flight_date_raw2;
  let arrival_time = moment(date2).format("YYYY-MM-DD, h:mm:ss");

  let angka = airline_id_raw;
  let airline_id = parseInt(angka);

  let kursi = seat_capacity_raw;
  let seat_capacity = parseInt(kursi);

  let harga = price_raw;
  let price = parseInt(harga);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      departure_iata_code,
      departure_icao_code,
      arrival_iata_code,
      arrival_icao_code,
      arrival_time,
      departure_time,
      seat_capacity,
      price,
      airline_id,
    };
    dispatch(addSchedules(data));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item sx={{ padding: 3 }}>
            <Paper
              sx={{
                height: "90vh",
                width: 1050,
                backgroundColor: "sub.main",
                borderRadius: 3,
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  margin: 3,
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Add Schedule
                </Typography>

                {/* <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', gap: 3}}>
                          <TextField
                          size='small'
                          label='Flight date'
                          sx={{width: '40%',}}
                          >
                          </TextField>

                      </Box> */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <ConfirmationNumberIcon sx={{ marginTop: 1 }} />
                  <TextField
                    size="small"
                    label="ID"
                    value={airline_id_raw}
                    onChange={(e) => setAirlineID(e.target.value)}
                    sx={{ width: "30%" }}
                  ></TextField>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Departure Time"
                    value={flight_date_raw}
                    onChange={(addDate) => {
                      setFlightDate(addDate);
                    }}
                  />

                  <MoreTimeIcon sx={{ marginTop: 1 }} />

                  <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Arrival Time"
                    value={flight_date_raw2}
                    onChange={(addDate2) => {
                      setFlightDate2(addDate2);
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <TextField
                    size="small"
                    label="Departure airport"
                    select
                    value={departure_iata_code}
                    sx={{ width: "40%" }}
                    onChange={(e) => setDeparture(e.target.value)}
                  >
                    {airportSelector?.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  <FlightTakeoffIcon sx={{ marginTop: 1 }} />

                  <TextField
                    size="small"
                    label="Arrival airport"
                    select
                    value={arrival_iata_code}
                    sx={{ width: "40%" }}
                    onChange={(e) => setArrival(e.target.value)}
                  >
                    {airportSelector?.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  {/* <TextField
                    size="small"
                    label="Departure time"
                    sx={{ width: "40%" }}
                  ></TextField>

                  <AccessTimeIcon sx={{ marginTop: 1 }} />

                  <TextField
                    size="small"
                    label="Arrival time"
                    sx={{ width: "40%" }}
                  ></TextField> */}
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <AirlineSeatReclineNormalIcon sx={{ marginTop: 1 }} />

                  <TextField
                    size="small"
                    label="Passanger capacity"
                    value={seat_capacity_raw}
                    onChange={(e) => setSeatTotal(e.target.value)}
                    sx={{ width: "30%" }}
                  ></TextField>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <SellIcon sx={{ marginTop: 1 }} />

                  <TextField
                    size="small"
                    label="Price"
                    value={price_raw}
                    onChange={(e) => setPrice(e.target.value)}
                    sx={{ width: "30%" }}
                  ></TextField>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                  }}
                >
                  <Button variant="contained" onClick={handleSubmit}>
                    Add Schedule
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default ScheduleInput;
