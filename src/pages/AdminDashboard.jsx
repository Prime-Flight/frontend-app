import React, {useState} from 'react'
import { Avatar, Grid, ThemeProvider, createTheme, Box, Typography, Button, Container, Badge, Paper, TextField, MenuItem, Divider} from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BookIcon from '@mui/icons-material/Book';
import Navbar from '../components/Navbar'
import UserProfile from '../components/UserProfile';
import AdminProfile from '../components/AdminProfile'
import AdminControl from '../components/AdminControl'

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
function AdminDashboard() {
    
    const [activeComp, setActiveComp] = useState('Control')
  
    return (


        <ThemeProvider theme={theme}>

        {/* Navbar */}
        <Navbar />

        {/* dashboard menu start*/}

        <Box sx={{display: 'flex'}}>

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
                            Hello, Admin!
                        </Typography>
                        {/* <Button size='small' variant='outlined' onClick={() => setActiveComp('Profile')} >
                            View Profile
                        </Button> */}

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
                            <Box>
                                <Button size='small' startIcon={<CalendarMonthIcon sx={{marginBottom: 0.5}}/>} sx={{color: 'primary.main'}} >
                                    Add Schedule
                                </Button>
                                <Button size='small' startIcon={<BookIcon />} sx={{color: 'primary.main'}} onClick={() => setActiveComp('Control')} >
                                    Booking info
                                </Button>
                            </Box>
                            <Button color='error' variant='contained'>
                                Logout
                            </Button>
                            </Container>
                        </Container>
                    </Grid>
                </Box>
            </Grid>
            {/* User Dashboard Menu end */}
        
            {/* {activeComp === 'Profile' && <AdminProfile />} */}

            {activeComp === 'Control' && <AdminControl />}  

        </Box>

        {/* Footer */}

        </ThemeProvider>



  )
}

export default AdminDashboard