import { Avatar, Grid, ThemeProvider, createTheme, Box, Typography, Button, Container, Paper, TextField, MenuItem, Divider} from '@mui/material'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../redux/actions/userPropActions';

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

    const [title, setTitle] = useState('')
    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    return(
        <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='flex-start'>

            <Grid item sx={{padding: 3}}>
                <Paper sx={{height: '90vh', width: 1050, backgroundColor: 'sub.main', borderRadius: 3, display: 'flex', justifyContent: 'flex-start'}}>
                    
                    <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: 3}}>
                        <Paper sx={{my: 3, p: 2, backgroundColor: 'sub.main'}}>
                            <Avatar sx={{width: 250, height: 250, marginTop: 3, marginBottom: 2}} />
                            <Button variant='outlined'>
                                Change Profile Picture
                            </Button>
                        </Paper>
                        <Button variant='contained'>
                            Change Password
                        </Button>
                    </Box>
                    
                    <Box sx={{display: 'flex', flexDirection: 'column', marginLeft: 10, paddingTop: 5, width: 350,}}>

                        <TextField size='small' label='Name' margin='dense'></TextField>

                        <TextField size='small' label='ID' margin='dense'></TextField>

                        <Divider sx={{my: 2}} />

                        <TextField size='small' label='Email' margin='dense'></TextField>

                        <TextField size='small' label='Phone Number' margin='dense'></TextField>
                        
                        <Button color='success' variant='contained' sx={{marginTop: 1}}>
                            Save Changes
                        </Button>
                    </Box>

                </Paper>
            </Grid>

            {/* <Typography>
                {JSON.stringify(users)}
            </Typography> */}
        </Grid>
    )
}