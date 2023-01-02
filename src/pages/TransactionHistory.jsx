import React from "react";
import { Divider } from "@mui/material";
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
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import HistoryIcon from "@mui/icons-material/History";
import { getTransaction } from "../redux/actions/transactionAction";
import ListTransaction from "../components/ListTransaction";

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

function TransactionHistory() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [passenger_category, setPassengerCategory] = useState("");
  const [nik, setNik] = useState("");
  const [passport_number, setPassportNumber] = useState("");
  const [gender, setGender] = useState("");
  const { passenger } = useSelector((state) => state.passenger);
  const { transaction } = useSelector((state) => state.transaction);
  useEffect(() => {
    dispatch(getTransaction());
  }, [dispatch]);
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
          sx={{ maxWidth: 700, minWidth: 700 }}
          style={{ marginTop: 97, marginBottom: 150 }}
        >
          <CardContent>
            <HistoryIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography variant="h6" gutterBottom>
              My Transaction History
            </Typography>
            <Divider sx={{ my: 2 }} />
            {transaction?.map(
              transaction ? (
                (data) => <ListTransaction key={data.id} {...data} />
              ) : (
                <Typography variant="h6" gutterBottom>
                  No Data
                </Typography>
              )
            )}
          </CardContent>
        </Card>
      </Grid>

      <Footer />
    </ThemeProvider>
  );
}

export default TransactionHistory;
