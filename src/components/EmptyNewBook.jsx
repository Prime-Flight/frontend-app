import React from 'react'
import NoLuggageIcon from '@mui/icons-material/NoLuggage';
import { Grid, Typography } from '@mui/material';

function EmptyNewBook() {
  return (
    <div>
        <Grid>
            <NoLuggageIcon sx={{ width: 100, height: 100, opacity: '50%', marginBottom: 1}} />
            <Typography variant="h6" sx={{opacity: '50%'}}>
                There's nothing new here.
            </Typography>
        </Grid>
    </div>
  )
}

export default EmptyNewBook