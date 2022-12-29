import { Grid, Box, Card, CardActionArea, CardContent, List, ListItem, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSchedules } from "../redux/actions/scheduleAction";
import FlightIcon from '@mui/icons-material/Flight';


export default function FlightSchedule(){

    const dispatch = useDispatch()
    const {schedules} = useSelector((state) => state.schedule)

    useEffect(() => {
        console.log(schedules)
        dispatch(getAllSchedules())
    }, [dispatch])

    return(
        <Grid sx={{width: '100%', height: '100%', paddingBottom: 7,  display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
            <List sx={{ overflow: 'auto'}}>
                {
                    schedules?.map((schedule, index) => (
                    <ListItem disablePadding>
                        <Card key={index} sx={{ width: '100%', marginBottom: 1}}>
                            <CardActionArea>
                                <CardContent>
                                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                            <Typography variant="subtitle2">
                                                <b>{schedule.departure_time}</b>
                                            </Typography>
                                            <Typography variant="subtitle2">
                                                <b>{schedule.flight_code}</b>
                                            </Typography>
                                        </Box>
                                        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                            <Box sx={{display: 'flex', gap: 3}}>
                                                <Typography variant="h4">
                                                    <b>{schedule.departure_iata_code}</b>
                                                </Typography>
    
                                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                    < FlightIcon sx={{ rotate: '90deg' }} />
                                                </Box>
    
                                                <Typography variant="h4">
                                                    <b>{schedule.arrival_iata_code}</b>
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="h5">
                                                    <b>Logo Erlain</b>
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </ListItem>
                    ))
                }


                {/* <ListItem>
                    <Card sx={{ width: '100%'}}>
                        <CardActionArea>
                            <CardContent>
                                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                        <Typography variant="subtitle2">
                                            <b>Flight Date</b>
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            <b>Flight ID</b>
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                        <Box sx={{display: 'flex', gap: 3}}>
                                            <Typography variant="h4">
                                                <b>CGV</b>
                                            </Typography>

                                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                < FlightIcon sx={{ rotate: '90deg' }} />
                                            </Box>

                                            <Typography variant="h4">
                                                <b>XXI</b>
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="h5">
                                                <b>Logo Sitiling</b>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </ListItem>

                <ListItem>
                    <Card sx={{ width: '100%'}}>
                        <CardActionArea>
                            <CardContent>
                                <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                                        <Typography variant="subtitle2">
                                            <b>Flight Date</b>
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            <b>Flight ID</b>
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                        <Box sx={{display: 'flex', gap: 3}}>
                                            <Typography variant="h4">
                                                <b>CGV</b>
                                            </Typography>

                                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                < FlightIcon sx={{ rotate: '90deg' }} />
                                            </Box>

                                            <Typography variant="h4">
                                                <b>XXI</b>
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="h5">
                                                <b>Logo Sitiling</b>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </ListItem> */}
            </List>
        </Grid>
    )
}