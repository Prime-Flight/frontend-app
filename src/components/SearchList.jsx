import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FlightIcon from "@mui/icons-material/Flight";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function SearchList() {
  const theme = useTheme();

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
              AirAsia
            </Typography>
            <Grid container spacing={7}>
              <Grid item xs={3} sm={2}>
                <Typography component="div" variant="h5">
                  JKT
                </Typography>
                <Typography component="div" variant="h6">
                  05:00
                </Typography>
              </Grid>
              <Grid item xs={3} sm={2}>
                <FlightIcon sx={{ width: 50, height: 50, rotate: "90deg" }} />
              </Grid>
              <Grid item xs={3} sm={2}>
                <Typography component="div" variant="h5">
                  SBY
                </Typography>
                <Typography component="div" variant="h6">
                  10:00
                </Typography>
              </Grid>
              <Grid item xs={3} sm={2}>
                <CardMedia
                  component="img"
                  sx={{ width: 50 }}
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/300px-AirAsia_New_Logo.svg.png"
                  alt="Airport img"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography component="div" variant="h6">
                  IDR 1.040.350/pax
                </Typography>
                <Button variant="contained" style={{ marginBottom: 10 }}>
                  <Link
                    style={{ textDecoration: "none", color: "white" }}
                    to={`/bookingdetail`}
                  >
                    Order
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
}
