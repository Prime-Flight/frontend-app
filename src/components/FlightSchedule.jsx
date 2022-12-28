import { Grid, Card, CardActionArea, CardContent, List, ListItem, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSchedules } from "../redux/actions/scheduleAction";


export default function FlightSchedule(){

    const dispatch = useDispatch()
    const { schedules } = useSelector((state) => state.book)

    useEffect(() => {
        dispatch(getAllSchedules())
        console.log(schedules)
    }, [dispatch])

    return(
        <Grid sx={{width: '100%'}}>
            <List>
                <ListItem>
                    <Card sx={{ width: '100%'}}>
                        <CardActionArea>
                            <CardContent>
                                <Typography>
                                    hehehehe
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </ListItem>
            </List>
        </Grid>
    )
}