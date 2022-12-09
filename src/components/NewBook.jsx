import { Box, Card, CardActionArea, CardContent, Paper, Typography } from "@mui/material";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function NewBook(){
    return(
        <Box sx={{width: '100%', height:'100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>

        <Card sx={{ width: '100%', marginBottom: 1}}>
            <CardActionArea>
                <CardContent>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 0.25 }}>
                        <Typography variant="subtitle2" id='flight date'>
                            12 Dec 2022
                        </Typography>
                        <Typography variant="subtitle2" id='ticket id'>
                            ID: 1123445678
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 0.25 }}>
                            <Typography variant="h5">
                                <b>CGK</b>
                            </Typography>

                            <KeyboardDoubleArrowRightIcon sx={{mx: 1, marginTop: 0.5}} />

                            <Typography variant="h5">
                                <b>DPS</b>
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 0.25 }}>
                            <AccessTimeFilledIcon color="warning" sx={{marginTop: 0.5}}/>
                        </Box>
                    </Box>

                </CardContent>
            </CardActionArea>
        </Card>

        <Card sx={{ width: '100%', marginBottom: 1}}>
            <CardActionArea>
                <CardContent>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 0.25 }}>
                        <Typography variant="subtitle2" id='flight date'>
                            12 Dec 2022
                        </Typography>
                        <Typography variant="subtitle2" id='ticket id'>
                            ID: 1123445678
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 0.25 }}>
                            <Typography variant="h5">
                                <b>CGK</b>
                            </Typography>

                            <KeyboardDoubleArrowRightIcon sx={{mx: 1, marginTop: 0.5}} />

                            <Typography variant="h5">
                                <b>DPS</b>
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 0.25 }}>
                            <AccessTimeFilledIcon color="warning" sx={{marginTop: 0.5}}/>
                        </Box>
                    </Box>

                </CardContent>
            </CardActionArea>
        </Card>

        <Card sx={{ width: '100%', marginBottom: 1}}>
            <CardActionArea>
                <CardContent>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 0.25 }}>
                        <Typography variant="subtitle2" id='flight date'>
                            12 Dec 2022
                        </Typography>
                        <Typography variant="subtitle2" id='ticket id'>
                            ID: 1123445678
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 0.25 }}>
                            <Typography variant="h5">
                                <b>CGK</b>
                            </Typography>

                            <KeyboardDoubleArrowRightIcon sx={{mx: 1, marginTop: 0.5}} />

                            <Typography variant="h5">
                                <b>DPS</b>
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 0.25 }}>
                            <AccessTimeFilledIcon color="warning" sx={{marginTop: 0.5}} />
                        </Box>
                    </Box>

                </CardContent>
            </CardActionArea>
        </Card>

        </Box>
    )
}