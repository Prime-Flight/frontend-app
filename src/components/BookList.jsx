import { Box, Card, CardActionArea, CardContent, Paper, TextField, Typography,MenuItem, Grid, List, ListItem, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import SellIcon from '@mui/icons-material/Sell';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getAllBooks } from "../redux/actions/adminBookAction";
import axios from "axios";

const categories = [
    {
        value: 'all',
        label: 'All books'
    },
    {
        value: 'success',
        label: 'Succeed books'
    },
    {
        value: 'pending',
        label: 'Pending books'
    },
    {
        value: 'Canceled',
        label: 'Canceled books'
    },
]

export default function BookList(){

    const navigate = useNavigate()
    const { id } = useParams()
    const [sort, setSort] = useState('')

    const handleSort = (e) => {
        setSort(e.target.value)
    }

    const dispatch = useDispatch()
    const {books} = useSelector((state) => state.book)

    useEffect(() => {
        dispatch(getAllBooks())
    }, [dispatch])

    return(
        <Box sx={{width: '100%', height:'100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
            <TextField
            select
            sx={{width: 250}}
            margin='normal'
            size='small'
            label= 'Sort by'
            value={sort}
            onChange={handleSort}>
                { categories?.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            
            <List sx={{ overflow: 'auto', height: '75%'}}>
            {
                books.map ((booking, index) => (
                <ListItem disablePadding>
                    <Accordion sx={{width: '100%', marginTop: 1}}>
                        <AccordionSummary>
                            <Box sx={{width: '100%'}}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 0.25}}>
                                    <Typography variant="subtitle2" id='flight date'>
                                        Date: {booking.departure.departure_time}
                                    </Typography>
                                    <Typography variant="subtitle2" id='ticket id'>
                                        ID: {booking.booking_code}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 0.25 }}>
                                        <Typography variant="h5">
                                            <b>{booking.departure.departure_iata_code}</b>
                                        </Typography>

                                        <KeyboardDoubleArrowRightIcon sx={{mx: 1, marginTop: 0.5}} />

                                        <Typography variant="h5">
                                            <b>{booking.arrival.arrival_iata_code}</b>
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
                                        {booking.departure.departure_time}
                                    </Typography>
                                    <Typography variant="body2">
                                        Arrival time: <br/>
                                        {booking.arrival.arrival_time}
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
                {/* <Card key={index} sx={{ width: '100%', marginBottom: 1}}>
                    <CardActionArea onClick={() => navigate(`/booking/details/${booking.id}`)}>
                        <CardContent>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 0.25 }}>
                                <Typography variant="subtitle2" id='flight date'>
                                    {booking.departure.departure_time}
                                </Typography>
                                <Typography variant="subtitle2" id='ticket id'>
                                    ID: {booking.booking_code}
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 0.25 }}>
                                    <Typography variant="h5">
                                        <b>{booking.departure.departure_iata_code}</b>
                                    </Typography>

                                    <KeyboardDoubleArrowRightIcon sx={{mx: 1, marginTop: 0.5}} />

                                    <Typography variant="h5">
                                        <b>{booking.arrival.arrival_iata_code}</b>
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 0.25 }}>
                                    <Typography color={'#ff9d00'}>
                                        {booking.status}
                                    </Typography>
                                </Box>
                            </Box>

                        </CardContent>
                    </CardActionArea>
                </Card> */}
                </ListItem>
                ))
            }
            </List>

        </Box>
    )
}