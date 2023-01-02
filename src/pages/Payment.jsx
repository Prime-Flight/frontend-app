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
import Divider from "@mui/material/Divider";
import { useNavigate, useParams } from "react-router-dom";
import { getOrder } from "../redux/actions/orderAction";
import { getCheckout } from "../redux/actions/checkoutAction";

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

function createData(name, jumlah, price) {
  return { name, jumlah, price };
}

const Payment = ({ booking_id }) => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { order } = useSelector((state) => state.order);
  const { checkout } = useSelector((state) => state.checkout);
  const [flight_code, setFlightCODE] = useState(order?.flight_code);
  const [seat, setSeat] = useState(order?.seat);
  const [price, setPrice] = useState(order?.price);
  const [booking_ids, setBookingID] = useState(params.id);
  // const [booking_id, setBookingID] = useState((order?.booking_id));
  const [transaction_id, setTransactionID] = useState(checkout?.transaction_id);
  const rows = [
    createData(order?.booking_code, order?.seat, order?.total_price),
  ];
  // useEffect(() => {
  //   dispatch(getOrder(params.id));
  // }, [dispatch]);

  const handleSubmit = async (event) => {
    let booking_id = parseInt(booking_ids);
    event.preventDefault();
    const data = {
      booking_id,
    };
    dispatch(getCheckout(data));
    // navigate(`/checkout/${transaction_id}`);
    console.log(booking_id);
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
        <Card
          sx={{ maxWidth: 700 }}
          style={{ marginTop: 100, marginBottom: 20 }}
        >
          <CardContent>
            <PaymentsIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography variant="h5" gutterBottom>
              Payment
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Status: {order?.status}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Grid container spacing={1}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="caption table">
                  <caption>
                    Harga yang tertera sudah termasuk pajak yang berlaku
                  </caption>
                  <TableHead>
                    <TableRow>
                      <TableCell>Order</TableCell>
                      <TableCell align="right">Jumlah&nbsp;(seat)</TableCell>
                      <TableCell align="right">Harga&nbsp;(Rp)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows?.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.jumlah}</TableCell>
                        <TableCell align="right">Rp. {row.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </CardContent>
          {/* <Button
            variant="contained"
            onClick={handleSubmit}
            style={{ marginTop: 20, marginBottom: 20 }}
          >
            Checkout
          </Button> */}
          {!checkout.transaction_id ? (
            <Button
              variant="contained"
              color="success"
              style={{ marginBottom: 10 }}
              onClick={handleSubmit}
            >
              Konfirmasi Checkout
            </Button>
          ) : (
            <Button
              variant="contained"
              style={{ marginBottom: 10 }}
              onClick={() => navigate(`/checkout/${checkout?.transaction_id}`)}
            >
              Lihat Checkout
            </Button>
          )}
        </Card>
      </Grid>

      <Footer />
    </ThemeProvider>
  );
};

export default Payment;
