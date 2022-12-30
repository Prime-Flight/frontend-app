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
import PaymentsIcon from "@mui/icons-material/Payments";
import Switch from "@mui/material/Switch";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate, useParams } from "react-router-dom";
import { getOrder } from "../redux/actions/orderAction";
import { getCheckout } from "../redux/actions/checkoutAction";
import CardMedia from "@mui/material/CardMedia";

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

const Checkout = ({}) => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { order } = useSelector((state) => state.order);
  const { checkout } = useSelector((state) => state.checkout);
  //   const [price, setPrice] = useState(order?.price);
  const [booking_id, setBookingID] = useState(params.id);
  const [transaction_status, setStatus] = useState(
    checkout?.transaction_status
  );
  // useEffect(() => {
  //   dispatch(getOrder(params.id));
  // }, [dispatch]);

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     const data = {
  //       booking_id,
  //     };
  //     dispatch(getOrder(data));
  //     navigate(`/paymentprocess`);
  //   };
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
          style={{ marginTop: 100, marginBottom: 20 }}
        >
          <CardContent>
            <PaymentsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography variant="h5" gutterBottom>
              Checkout
            </Typography>
            <Grid container spacing={1}>
              <Typography variant="h5" gutterBottom>
                Status: {checkout?.transaction_status}
              </Typography>
              <CardMedia
                component="img"
                sx={{ width: 50 }}
                image={checkout?.document_url}
                alt="Airport img"
              />
            </Grid>
          </CardContent>
          {/* <Button
            variant="contained"
            // onClick={handleSubmit}
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            Bayar
          </Button> */}
        </Card>
      </Grid>

      <Footer />
    </ThemeProvider>
  );
};

export default Checkout;
