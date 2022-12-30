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
import { useNavigate } from "react-router-dom";

const SearchList = ({
  flight_id,
  airline,
  departure_time,
  arrival_time,
  departure_iata,
  arrival_iata,
  price,
  airline_logo,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

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
              {airline}
            </Typography>
            <Grid container spacing={7}>
              <Grid item xs={3} sm={2}>
                <Typography component="div" variant="h6">
                  {departure_iata}
                </Typography>
                <Typography component="div" variant="subtitle2">
                  {departure_time}
                </Typography>
              </Grid>
              <Grid item xs={3} sm={2}>
                <FlightIcon sx={{ width: 50, height: 50, rotate: "90deg" }} />
              </Grid>
              <Grid item xs={3} sm={2}>
                <Typography component="div" variant="h6">
                  {arrival_iata}
                </Typography>
                <Typography component="div" variant="subtitle2">
                  {arrival_time}
                </Typography>
              </Grid>
              <Grid item xs={3} sm={2}>
                <CardMedia
                  component="img"
                  sx={{ width: 50, marginLeft: 4 }}
                  image={airline_logo}
                  alt="Airport img"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography component="div" variant="h6">
                  Rp.{price}/pax
                </Typography>
                <Button
                  variant="contained"
                  style={{ marginBottom: 10 }}
                  onClick={() => navigate(`/booking/${flight_id}`)}
                >
                  Order
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default SearchList;
