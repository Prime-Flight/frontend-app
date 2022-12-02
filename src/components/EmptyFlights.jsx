import { Avatar, Grid, ThemeProvider, createTheme, Box, Typography, Button, Container, Paper, TextField, MenuItem, Divider} from '@mui/material'
import AirplanemodeInactiveIcon from '@mui/icons-material/AirplanemodeInactive';
import React from 'react'

export default function EmptyFlight() {
    return(
        <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='flex-start'>
    
            <Grid item sx={{padding: 3}}>
                <Paper sx={{height: '90vh', width: 1050, backgroundColor: 'sub.main', borderRadius: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
                        <AirplanemodeInactiveIcon sx={{ width: 100, height: 100, opacity: '50%', marginBottom: 2}} />
                        <Typography variant='h5' fontWeight={500} sx={{opacity: '50%', marginBottom: 2}}>
                            You don't have any flights yet
                        </Typography>
                        <Button size='small' variant='contained'>
                            Book a flight now
                        </Button>
                </Paper>
            </Grid>
        </Grid>
    )
}