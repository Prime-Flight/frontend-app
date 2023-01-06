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
import { readNotification } from "../redux/actions/notificationAction";

const ListPassenger = ({ message, read, actions, id }) => {
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
              {actions} ({id})
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {message}
            </Typography>
            <Grid container spacing={7}>
              <Grid item xs={12} sm={12}>
                {/* <Button variant="contained">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/Passenger`}
                  >
                    Lihat Detail
                  </Link>
                </Button> */}
                <Button
                  variant="contained"
                  color="success"
                  style={{ marginLeft: 2 }}
                  onClick={() => dispatch(readNotification({ id }))}
                  // href={`/notification`}
                >
                  Read
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default ListPassenger;
