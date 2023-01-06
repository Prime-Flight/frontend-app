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

const ListPassenger = ({ name, id, gender }) => {
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
              {name} ({id})
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              {gender}
            </Typography>
            <Grid container spacing={7}>
              <Grid item xs={12} sm={12}>
                <Button variant="contained" color="warning">
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/Passenger/${id}`}
                  >
                    Edit
                  </Link>
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  style={{ marginLeft: 5 }}
                >
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/deletepassenger/${id}`}
                  >
                    Hapus
                  </Link>
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
