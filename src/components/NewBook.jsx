import { Box, Card, CardActionArea, CardContent, Paper, Typography } from "@mui/material";

export default function NewBook(){
    return(
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
                </CardContent>
            </CardActionArea>
        </Card>
    )
}