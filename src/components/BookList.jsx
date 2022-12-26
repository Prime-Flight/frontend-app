import { Box, Card, CardActionArea, CardContent, Paper, TextField, Typography,MenuItem } from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { getAllBooks } from "../redux/actions/adminBookAction";

const categories = [
    {
        value: 'All',
        label: 'All books'
    },
    {
        value: 'Approved',
        label: 'Approved books'
    },
    {
        value: 'Waiting',
        label: 'Waiting for approval'
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

            {
                books.map ((booking, index) => (
                <Card key={index} sx={{ width: '100%', marginBottom: 1}}>
                    <CardActionArea onClick={() => navigate(`/bookdetailadmin/${booking.id}`)}>
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
                                    <AccessTimeFilledIcon color="warning" sx={{marginTop: 0.5}}/>
                                </Box>
                            </Box>

                        </CardContent>
                    </CardActionArea>
                </Card>
                ))
            }
        </Box>
    )
}