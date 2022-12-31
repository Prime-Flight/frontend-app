import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FlightIcon from "@mui/icons-material/Flight";
import Button from "@mui/material/Button";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { deletePassenger } from "../redux/actions/passengerAction";
import { useDispatch, useSelector } from "react-redux";
import { Identity } from "@mui/base";
import { useState, useEffect } from "react";

const ListTransaction = ({
  airline,
  total_price,
  to_char,
  booking_code,
  transaction_id,
  status,
}) => {
  const dispatch = useDispatch();
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      marginBottom={5}
    >
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography variant="h6" gutterBottom>
              {booking_code} | {to_char} ({airline})
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Status: {status}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Rp.{total_price}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default ListTransaction;
