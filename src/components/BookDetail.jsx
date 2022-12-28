import { Grid, Paper, Box, Typography, createTheme, ThemeProvider } from '@mui/material'
import FlightIcon from '@mui/icons-material/Flight';
import React from 'react'
import Navbar from './Navbar'
import PassengerDetail from './PassengerDetail';

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
})

function BookDetail() {
  return (
    <ThemeProvider theme={theme}>
    <div>
        {/* navbar */}
        <Navbar/>

        <Paper sx={{ mx: 3, my: 3, backgroundColor: 'sub.main', display: 'flex', padding: 3}}>

            <Box sx={{width: '50%', display: 'flex', justifyContent: 'center', gap: 10}}>

            {/* Departure Start*/}
            <Box>
                <Typography>
                Departure
                </Typography>

                <Typography variant='h4' sx={{my: 2}}>
                <b>CGK</b>
                </Typography>

                {/* <Typography>
                Soekarno - Hatta <br/>
                Jakarta
                </Typography> */}

                <Typography sx={{marginTop: 7}}>
                Departure time
                </Typography>
                <Typography sx={{marginTop: 2}}>
                <b>12 - 12 - 2022</b> <br/>
                <b>12:00</b>
                </Typography>
            </Box>
            {/* Departure End*/}

            {/* Plane Icon Start */}
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', rotate: '90deg'}}>
            <FlightIcon sx={{fontSize: 45}} />
            </Box>
            {/* Plane Icon End */}

            {/* Arrival Start */}
            <Box>
                <Typography>
                Arrival
                </Typography>

                <Typography variant='h4' sx={{my: 2}}>
                <b>DPS</b>
                </Typography>

                {/* <Typography>
                Ngurah Rai <br/>
                Denpasar
                </Typography> */}

                <Typography sx={{marginTop: 7}}>
                Arrival time
                </Typography>
                <Typography sx={{marginTop: 2}}>
                <b>12 - 12 - 2022</b> <br/>
                <b>15:00</b>
                </Typography>
            </Box>
            {/* Arrival End */}

            </Box>

            <Box sx={{width: '50%'}}>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: 5}}>
                <Box>
                <Typography>
                Total Seat
                </Typography>
                <Typography variant='h5'>
                <b>3</b>
                </Typography>
                </Box>

                <Box>
                <Typography>
                Price per seat
                </Typography>
                <Typography variant='h5'>
                <b>IDR 700000</b>
                </Typography>
                </Box>

                <Box>
                <Typography>
                Total price
                </Typography>
                <Typography variant='h5'>
                <b>IDR 700000</b>
                </Typography>
                </Box>
            </Box>
            </Box>

        </Paper>

        <PassengerDetail />
    </div>
    </ThemeProvider>
  )
}

export default BookDetail