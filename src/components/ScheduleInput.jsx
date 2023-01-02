import { createTheme, Grid, Paper, ThemeProvider, Typography, Box, TextField, Button } from '@mui/material'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import SellIcon from '@mui/icons-material/Sell';
import React from 'react'

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


function ScheduleInput() {

  const airportSelect = [
    {
      label: 'Bandara Internasional Soekarno-Hatta',
      value: 'CGK'
    },
    {
      label: 'Bandara Internasional Ngurah Rai',
      value: 'DPS'
    },
    {
      label: 'Bandara Internasional Husein Sastranegara',
      value: 'BDG'
    }
  ]
  return (
    <ThemeProvider theme={theme}>
        <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='flex-start'>
            <Grid item sx={{ padding: 3}}>
                <Paper sx={{height: '90vh', width: 1050, backgroundColor: 'sub.main', borderRadius: 3, display: 'flex', justifyContent: 'flex-start'}}>
                    <Box sx={{ margin: 3, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2}}>
                    <Typography variant='h6' gutterBottom>
                      Add Schedule
                    </Typography>
                      
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', gap: 3}}>
                          <TextField
                          size='small'
                          label='Departure airport'
                          sx={{width: '40%',}}
                          >
                          </TextField>

                      </Box>
                      
                      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', gap: 3}}>
                          <TextField
                          size='small'
                          label='Departure airport'
                          sx={{width: '40%',}}
                          >
                          </TextField>

                          <FlightTakeoffIcon sx={{ marginTop: 1}}/>

                          <TextField
                          size='small'
                          label='Arrival airport'
                          sx={{width: '40%'}}
                          >
                          </TextField>
                      </Box>
                      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', gap: 3}}>
                          <TextField
                          size='small'
                          label='Departure time'
                          sx={{width: '40%',}}
                          >
                          </TextField>

                          <AccessTimeIcon sx={{ marginTop: 1}}/>

                          <TextField
                          size='small'
                          label='Arrival time'
                          sx={{width: '40%'}}
                          >
                          </TextField>
                      </Box>
                      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', gap: 3}}>
                          
                          <AirlineSeatReclineNormalIcon sx={{ marginTop: 1}}/>
                          
                          <TextField
                          size='small'
                          label='Passanger capacity'
                          sx={{width: '30%',}}
                          >
                          </TextField>

                      </Box>
                      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', gap: 3}}>
                          
                          <SellIcon sx={{ marginTop: 1}}/>
                          
                          <TextField
                          size='small'
                          label='Price'
                          sx={{width: '30%',}}
                          >
                          </TextField>

                      </Box>
                      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', gap: 3}}>
                        <Button variant='contained' type='submit'>
                          Add Schedule
                        </Button>
                      </Box>
                    </Box>
                    

                </Paper>
            </Grid>
        </Grid>
    </ThemeProvider>
  )
}

export default ScheduleInput