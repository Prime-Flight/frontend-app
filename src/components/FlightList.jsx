import { Avatar, Grid, ThemeProvider, createTheme, Box, Typography, Button, Container, Paper, TextField, MenuItem, Card, CardActionArea, CardContent} from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
// import CalendarPicker from '@mui/x-date-pickers-pro/CalendarPicker';
import FlightIcon from '@mui/icons-material/Flight';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const destinations = [
    {
        value: 'Jakarta',
        label: 'Jakarta (CGK)'
    },
    {
        value: 'Yogyakarta',
        label: 'Yogyakarta (JOG)'
    },
    {
        value: 'Denpasar',
        label: 'Denpasar (DPS)'
    },
    {
        value: 'Makassar',
        label: 'Makassar (UPG)'
    },
    {
        value: 'Balikpapan',
        label: 'Balikpapan (BPN)'
    },
    {
        value: 'Jayapura',
        label: 'Jayapura (DJJ)'
    },
]

export default function FlightList(){

    const [destination, setDestination] = useState('')

    const pickDestination = (e) => {
        setDestination(e.target.value)
    }

    return(
        <div>
            <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='flex-start'>
    
            <Grid item sx={{padding: 3}}>
                <Paper sx={{height: '90vh', width: 1050, backgroundColor: 'sub.main', borderRadius: 3, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems:'center'}}>
                    
                    <Box sx={{
                        marginBottom: 2,
                        width: "100%",
                        display: 'flex',
                        marginLeft: 10

                    }}>

                        <TextField
                        select
                        size='small'
                        label= 'Sort by destination'
                        value= {destination}
                        onChange= {pickDestination}
                        sx={{
                            marginTop: 3,
                            width: 200
                        }}>
                            {
                                destinations?.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                    </MenuItem>
                                ))
                            }
                        </TextField>

                    </Box>

                    <Card sx={{ width: '95%', marginBottom: 1}}>
                        <CardActionArea>
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 0.25 }}>
                                <Typography id='flight date'>
                                    12 Dec 2022
                                </Typography>
                                <Typography id='ticket id'>
                                    ID: 1123445678
                                </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 0.25 }}>
                                    <Typography variant='h4'>
                                        <b>CGK</b>
                                    </Typography>

                                    <FlightIcon sx={{width: 50, height: 50, rotate: '90deg'}} />

                                    <Typography variant='h4'>
                                        <b>DPS</b>
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Typography>
                                        Jakarta
                                    </Typography>
                                    <Typography>
                                        Denpasar
                                    </Typography>
                                </Box>

                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ width: '95%', marginBottom: 1}}>
                        <CardActionArea >
                            <CardContent>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 0.25 }}>
                                    <Typography variant="subtitle2" id='flight date'>
                                        12 Dec 2022
                                    </Typography>
                                    <Typography variant="subtitle2" id='ticket id'>
                                        ID: 1123445678
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 0.25 }}>
                                        <Typography variant="h5">
                                            <b>CGK</b>
                                        </Typography>

                                        <KeyboardDoubleArrowRightIcon sx={{mx: 1, marginTop: 0.5}} />

                                        <Typography variant="h5">
                                            <b>DPS</b>
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 0.25 }}>
                                        <AccessTimeFilledIcon color="warning" sx={{marginTop: 0.5}}/>
                                    </Box>
                                </Box>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Paper>
            </Grid>
        </Grid>
        </div>
    )
}