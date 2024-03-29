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
import { Link, useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { addPassenger, getPassenger } from "../redux/actions/passengerAction";

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

const category = [
  {
    value: "Adult",
    label: "Adult",
  },
];

function AddPassenger() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [passenger_category, setPassengerCategory] = useState("");
  const [nik, setNik] = useState("");
  const [passport_number, setPassportNumber] = useState("");
  const [gender, setGender] = useState("");
  const { passenger } = useSelector((state) => state.passenger);

  useEffect(() => {
    dispatch(getPassenger());
  }, [dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      passenger_category,
      name,
      nik,
      passport_number,
      gender,
    };
    dispatch(addPassenger(data));
    navigate(`/Passenger`);
  };
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
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Card
            sx={{ maxWidth: 700, minWidth: 500 }}
            style={{ marginTop: 10, marginBottom: 20 }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Add Passenger Data
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate(`/Passenger`)}
                style={{ marginTop: 5, marginBottom: 20 }}
              >
                {/* <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={`/Passenger`}
                >
                  Back
                </Link> */}
                Back
              </Button>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
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
              </Grid>
              <Button
                variant="contained"
                color="success"
                type="submit"
                onSubmit={() => navigate(`/Passenger`)}
                sx={{ marginTop: 1 }}
              >
                Save
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Grid>

      <Footer />
    </ThemeProvider>
  );
}

export default AddPassenger;
