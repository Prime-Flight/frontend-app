import { Avatar, Grid, ThemeProvider, createTheme, ButtonGroup, Box, Typography, Button, Container, Paper, TextField, MenuItem, Divider} from '@mui/material'
import React, { useState } from 'react'
import BookList from './BookList';
import EmptyCancel from './EmptyCancel';
import FlightSchedule from './FlightSchedule';
import NewBook from './NewBook';

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

export default function UserProfile() {
    
    const [activeComp, setActiveComp] = useState('BookList')
    return(
        <ThemeProvider theme={theme}>
        <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='flex-start'>

            <Grid item sx={{padding: 3}}>
                <Paper sx={{height: '90vh', width: 1050, backgroundColor: 'sub.main', borderRadius: 3, display: 'flex', justifyContent: 'flex-start'}}>

                    <Box sx={{margin: 3, width: '100%', heigth: '100%'}}>
                        <ButtonGroup variant="contained" fullWidth='100%' color='secondary'>
                            <Button onClick={() => setActiveComp('ScheduleList')}>Flights Schedule</Button>
                            <Button onClick={() => setActiveComp('BookList')}>All Books</Button>
                            <Button onClick={() => setActiveComp('RequestList')}>New Books</Button>
                            <Button onClick={() => setActiveComp('CancelList')}>Cancel Requests</Button>
                        </ButtonGroup>
                        <Box sx={{marginTop: 2, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

                                {activeComp === 'ScheduleList' && <FlightSchedule/>}
                                
                                {activeComp === 'RequestList' && <NewBook/>}
                                
                                {activeComp === 'BookList' && <BookList/>}
                                
                                {/* Empty Cancel Request */}
                                {activeComp === 'CancelList' && <EmptyCancel/>}                               
                                
                        </Box>
                    </Box>

                </Paper>
            </Grid>
        </Grid>
        </ThemeProvider>
    )
}