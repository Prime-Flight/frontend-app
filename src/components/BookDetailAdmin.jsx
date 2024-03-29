import { createTheme, Divider, Paper, ThemeProvider, Typography } from '@mui/material'
import { Box } from '@mui/system';
import FlightIcon from '@mui/icons-material/Flight';
import React from 'react'
import Navbar from './Navbar'
import PassengerDetail from './PassengerDetail';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllDetailForAdmin } from '../redux/actions/detailAction';
import { useParams } from 'react-router-dom';

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
});

function BookDetailAdmin() {

  const dispatch = useDispatch()
  const {BookDetail} = useSelector((state) => state.detail)
  const { id } = useParams()

  useEffect(() => {
    dispatch(getAllDetailForAdmin(id))
  }, [dispatch, id])

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Navbar />
      
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

        <Box sx={{width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
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

      {/* Passenger Detail */}
      <PassengerDetail />
      
    </div>
    </ThemeProvider>
  )
}

export default BookDetailAdmin