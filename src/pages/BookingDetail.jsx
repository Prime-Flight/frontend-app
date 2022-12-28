import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import { getPassenger } from "../redux/actions/passengerAction";
import { getOrder } from "../redux/actions/orderAction";
import { getFlight } from "../redux/actions/flightAction";

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

const category = [
  {
    value: "Adult",
    label: "Adult",
  },
];

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

function BookingDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  //   useEffect(() => {
  //     dispatch(getAirport());
  //   }, [dispatch]);

  const [titel, setTitel] = React.useState("Tuan");
  const [passenger_category, setPassengerCategory] = useState("");
  const [flight_id, setFlightID] = useState(params.id);
  const [nik, setNik] = useState("");
  const [passport_number, setPassportNumber] = useState("");
  const [gender, setGender] = useState("");
  const [passenger_id, setPassengerID] = useState([0]);

  const handleChangeTitel = (event) => {
    setTitel(event.target.value);
  };

  const [codeNegara, setCodeNegara] = React.useState("+62");
  const handleChangeCodeNegara = (event) => {
    setCodeNegara(event.target.value);
  };

  const { passenger } = useSelector((state) => state.passenger);
  const { flight } = useSelector((state) => state.flight);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      passenger_id,
      flight_id,
    };
    dispatch(getOrder(data));
    navigate(`/payment`);
  };

  useEffect(() => {
    dispatch(getPassenger());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFlight(params.id));
  }, [dispatch]);

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
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ maxWidth: 700 }}
            style={{ marginTop: 130, marginBottom: 70 }}
          >
            <Card
              sx={{ maxWidth: 700, width: { xs: 450, sm: 700 } }}
              style={{ marginTop: 10, marginBottom: 20 }}
            >
              <CardContent>
                <AirlineSeatReclineNormalIcon
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                />
                <Typography variant="h6" gutterBottom>
                  Detail Penumpang
                </Typography>
                {/* <FormControlLabel
                control={<Switch defaultChecked />}
                label="Sama dengan pemesan"
              /> */}

                {/* <Grid container spacing={5}>
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
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Passenger Category"
                    id="outlined-select"
                    select
                    fullWidth
                    value={passenger_category}
                    onChange={(e) => setPassengerCategory(e.target.value)}
                    helperText="Please select your categories"
                  >
                    {category.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="passport_number"
                    name="passport_number"
                    required
                    fullWidth
                    id="passport_number"
                    value={passport_number}
                    label="Passport Number"
                    autoFocus
                    onChange={(e) => setPassportNumber(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="nik"
                    name="nik"
                    required
                    fullWidth
                    id="nik"
                    value={nik}
                    label="NIK"
                    autoFocus
                    onChange={(e) => setNik(e.target.value)}
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
              </Grid> */}
                <Grid item xs={12}>
                  <TextField
                    required
                    label="Passenger"
                    id="outlined-select"
                    select
                    fullWidth
                    value={passenger_id[0]}
                    onChange={(e) => setPassengerID([e.target.value])}
                    helperText="Please select your passenger"
                  >
                    {passenger?.map((option) => (
                      <MenuItem key={option.id} value={option.id} {...option}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </CardContent>
              <Button
                variant="contained"
                style={{ marginBottom: 10 }}
                type="submit"
              >
                {/* <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/payment`}
                >
                  Lanjut Bayar
                </Link> */}
                Lanjut Bayar
              </Button>
            </Card>
          </Box>
        </Grid>

        <Footer />
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default BookingDetail;
