import { Avatar, Grid, ThemeProvider, createTheme, Box, Typography, Button, Container, Paper, TextField, MenuItem, Divider} from '@mui/material'
import React, { useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PeopleIcon from '@mui/icons-material/People';
import LuggageIcon from '@mui/icons-material/Luggage';
import LogoutIcon from '@mui/icons-material/Logout';
import UserProfile from '../components/UserProfile';
import EmptyFlights from '../components/EmptyFlights';
import FlightList from '../components/FlightList';

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

const titles = [
    {
        value: 'Mr',
        label: 'Mr'
    },
    {
        value: 'Mrs',
        label: 'Mrs'
    },
    {
        value: 'Miss',
        label: 'Miss'
    },
]


export function DashboardContent() {

    const [title, setTitle] = useState('')
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const [activeComp, setActiveComp] = useState('Profile')

    return(

        <ThemeProvider theme={theme}>

        {/* Navbar */}
        <Navbar />

        {/* dashboard menu start*/}
        
        <Box sx={{display: 'flex'}}>

            {/* User Dashboard Menu start */}
            <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            >
                <Box sx={{
                    height: '100vh',
                    width: 250,
                    backgroundColor: 'sub.main'
                }}>
                    <Grid container direction='column' justifyContent='center' alignItems='center'>
                        <Avatar sx={{width: 100, height: 100, my: 2}} />
                        <Typography variant='h6' sx={{ mb: 1}}>
                            Hello, John Doe!
                        </Typography>
                        <Button size='small' variant='outlined' onClick={() => setActiveComp('Profile')}>
                            View Profile
                        </Button>

                        <Container sx={{
                            my: 3,
                            display: "flex",
                            justifyContent: 'center'
                        }}>
                            <Container sx={{
                                display: 'flex',
                                height: '60vh',
                                flexDirection: 'column',
                                justifyContent: 'space-between'

                            }}>
                            <Button size='large' startIcon={<LuggageIcon/>} sx={{color: 'primary.main'}} onClick={() => setActiveComp('FlightList')}>
                                My Flights
                            </Button>
                            <Button color='error' variant='contained'>
                                Logout
                            </Button>
                            </Container>
                        </Container>
                    </Grid>
                </Box>
            </Grid>
            {/* User Dashboard Menu end */}

            {/* User Profile start */}
            {activeComp === 'Profile' && <UserProfile />} 
            {/* User Profile end */}

            {/* My Flights empty Start */}
            {activeComp === 'Empty' && <EmptyFlights />} 
            {/* My Flights empty End */}

            {/* Flight List Start */}
            {activeComp === 'FlightList' && <FlightList />} 
            {/* Flight List End */}

        </Box>

        {/* dashboard menu end*/}

        {/* Footer */}

        </ThemeProvider>
    )
}

export default function UserDashboard(){
    return <DashboardContent />
    
}