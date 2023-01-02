import { createTheme, Grid, Paper, ThemeProvider, Typography, Box } from '@mui/material'
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
  return (
    <ThemeProvider theme={theme}>
        <Grid
        container
        direction='row'
        justifyContent='center'
        alignItems='flex-start'>
            <Grid item sx={{ padding: 3}}>
                <Paper sx={{height: '90vh', width: 1050, backgroundColor: 'sub.main', borderRadius: 3, display: 'flex', justifyContent: 'flex-start'}}>
                    <Box sx={{ margin: 3, width: '100%', height: '100%'}}>
                        <Typography>
                            hehehe
                        </Typography>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    </ThemeProvider>
  )
}

export default ScheduleInput