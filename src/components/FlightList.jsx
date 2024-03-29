import {
  Avatar,
  Grid,
  ThemeProvider,
  createTheme,
  Box,
  Typography,
  Button,
  Container,
  Paper,
  TextField,
  MenuItem,
  Card,
  CardActionArea,
  CardContent,
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
// import CalendarPicker from '@mui/x-date-pickers-pro/CalendarPicker';
import FlightIcon from "@mui/icons-material/Flight";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllMyBooks } from "../redux/actions/userBookActions";
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import SellIcon from '@mui/icons-material/Sell';

const destinations = [
  {
    value: "Jakarta",
    label: "Jakarta (CGK)",
  },
  {
    value: "Yogyakarta",
    label: "Yogyakarta (JOG)",
  },
  {
    value: "Denpasar",
    label: "Denpasar (DPS)",
  },
  {
    value: "Makassar",
    label: "Makassar (UPG)",
  },
  {
    value: "Balikpapan",
    label: "Balikpapan (BPN)",
  },
  {
    value: "Jayapura",
    label: "Jayapura (DJJ)",
  },
];

const status = [
  {
    value: "All",
    label: "All",
  },
  {
    value: "Canceled",
    label: "Canceled",
  },
  {
    value: "Approved",
    label: "Approved",
  },
];

export default function FlightList() {
  const [destination, setDestination] = useState("");
  const [sortStatus, setSortStatus] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const pickDestination = (e) => {
    setDestination(e.target.value);
  };

  const pickStatus = (e) => {
    setSortStatus(e.target.value);
  };

  const dispatch = useDispatch()
  const {myBooks} = useSelector((state) => state.myBook)
  // const { myBooks } = useSelector((state) => state.myBook)

  useEffect(() => {
    console.log(myBooks)
    dispatch(getAllMyBooks())
  }, [dispatch])

  // useEffect(() => {
  //   console.log(myBooks)
  //   dispatch(getAllMyBooks())
  // }, [dispatch])
  
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item sx={{ padding: 3 }}>
          <Paper
            sx={{
              height: "90vh",
              width: '75vw',
              backgroundColor: "sub.main",
              borderRadius: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                marginBottom: 2,
                width: "100%",
                display: "flex",
                marginLeft: 10,
                gap: 1,
              }}
            >
              <TextField
                select
                size="small"
                label="Sort by destination"
                value={destination}
                onChange={pickDestination}
                sx={{
                  marginTop: 3,
                  width: 200,
                }}
              >
                {destinations?.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                size='small'
                label= 'Sort by status'
                value= {sortStatus}
                onChange= {pickStatus}
                sx= {{
                    marginTop: 3,
                    width: 200
                }}>
                    {
                      status?.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))
                    }
              </TextField>

            </Box>

              <List sx={{overflow: 'auto', height: '80%', width: '100%'}}>
              {
                myBooks?.map ((booking, index) => (
                  <ListItem>
                      <Accordion sx={{width: '100%', marginTop: 0.15}}>
                        <AccordionSummary>
                            <Box sx={{width: '100%'}}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 0.25}}>
                                    <Typography variant="subtitle2" id='flight date'>
                                        Date: {booking.departure_time}
                                    </Typography>
                                    <Typography variant="subtitle2" id='ticket id'>
                                        ID: {booking.booking_code}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 0.25 }}>
                                        <Typography variant="h5">
                                            <b>{booking.departure_iata}</b>
                                        </Typography>

                                        <KeyboardDoubleArrowRightIcon sx={{mx: 1, marginTop: 0.5}} />

                                        <Typography variant="h5">
                                            <b>{booking.arrival_iata}</b>
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 0.25 }}>
                                        <Typography>
                                            {booking.status}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                                    <Typography variant="body2">
                                        Departure time: <br/>
                                        {booking.departure_time}
                                    </Typography>
                                    <Typography variant="body2">
                                        Arrival time: <br/>
                                        {booking.arrival_time}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1}}>
                                    <Box sx={{ display: 'flex', gap: 1, backgroundColor: 'sub.main', justifyContent: 'center', borderRadius: 1, padding: 0.5}}>
                                        <AirlineSeatReclineNormalIcon fontSize="small" />
                                        <Typography variant="body2">
                                            <b>{booking.seat}</b>
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: 1, backgroundColor: 'sub.main', justifyContent: 'center', borderRadius: 1, padding: 0.5 }}>
                                        {/* <Typography variant="body2">
                                            Price per Seat:
                                        </Typography> */}
                                        <SellIcon fontSize="small"/>
                                        <Typography variant="body2">
                                            {booking.price_per_seat}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                  {/* <Card key={index} sx={{ width: "100%" }}>
                    <CardActionArea onClick={() => navigate(`/bookdetail/${booking.booking_id}`)}>
                      <CardContent>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: 1,
                          }}
                        >
                          <Typography variant="subtitle2" id="flight date">
                            {booking.departure_time}
                          </Typography>
                          <Typography variant="subtitle2" id="ticket id">
                            ID: {booking.booking_code}
                          </Typography>
                        </Box>
    
                        <Box
                          sx={{ display: "flex", justifyContent: "space-between" }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-start",
                              marginBottom: 0.25,
                            }}
                          >
                            <Typography variant="h5">
                              <b>{booking.departure_iata}</b>
                            </Typography>
    
                            <KeyboardDoubleArrowRightIcon
                              sx={{ mx: 1, marginTop: 0.5 }}
                            />
    
                            <Typography variant="h5">
                              <b>{booking.arrival_iata}</b>
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "flex-end",
                              marginBottom: 0.25,
                            }}
                          >
                            <AccessTimeFilledIcon
                              color="warning"
                              sx={{ marginTop: 0.5 }}
                            />
                          </Box>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card> */}
                  </ListItem>
                ))
              }
              </List>


          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
