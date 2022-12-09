import { Typography, Box } from "@mui/material";
import MoodIcon from '@mui/icons-material/Mood';

export default function EmptyCancel(){
    return(
        <Box>
            <MoodIcon sx={{ width: 100, height: 100, opacity: '50%', marginBottom: 1}} />
            <Typography variant="h6" sx={{opacity: '50%'}}>
                Yay, there's no cancellation request
            </Typography>
        </Box>
    )
}