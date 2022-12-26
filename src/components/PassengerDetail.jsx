import { Accordion, AccordionDetails, AccordionSummary, createTheme, ThemeProvider, Typography, Box } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

function PassengerDetail() {
    const [expanded, setExpanded] = useState(false)

    const handleChange = (panel) => (e, isExpanded) => {
        setExpanded(isExpanded?panel: false)
    }
  return (
    <ThemeProvider theme={theme}>
    <div>
        <Box sx={{ m: 3}}>
        <Accordion expanded = {expanded === 'panel1'} onChange={handleChange('panel1')} sx={{backgroundColor: 'sub.main'}}>
            <AccordionSummary
            expandedIcon = {<ExpandMoreIcon />}
            >
                <Typography>
                    <b>Passenger 1</b>
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Box sx={{display: 'flex'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1}}>
                    <Typography>
                        Name :
                    </Typography>
                    <Typography>
                        Gender :
                    </Typography>
                    <Typography>
                        Category :
                    </Typography>
                    <Typography>
                        NIK :
                    </Typography>
                    <Typography>
                        Passport Number :
                    </Typography>

                    </Box>
                </Box>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded = {expanded === 'panel2'} onChange={handleChange('panel2')} sx={{backgroundColor: 'sub.main'}}>
            <AccordionSummary
            expandedIcon = {<ExpandMoreIcon />}
            >
                <Typography>
                    <b>Passenger 2</b>
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Box sx={{display: 'flex'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1}}>
                    <Typography>
                        Name :
                    </Typography>
                    <Typography>
                        Gender :
                    </Typography>
                    <Typography>
                        Category :
                    </Typography>
                    <Typography>
                        NIK :
                    </Typography>
                    <Typography>
                        Passport Number :
                    </Typography>

                    </Box>
                </Box>
            </AccordionDetails>
        </Accordion>

        <Accordion expanded = {expanded === 'panel3'} onChange={handleChange('panel3')} sx={{backgroundColor: 'sub.main'}}>
            <AccordionSummary
            expandedIcon = {<ExpandMoreIcon />}
            >
                <Typography>
                    <b>Passenger 3</b>
                </Typography>
            </AccordionSummary>

            <AccordionDetails>
                <Box sx={{display: 'flex'}}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1}}>
                    <Typography>
                        Name :
                    </Typography>
                    <Typography>
                        Gender :
                    </Typography>
                    <Typography>
                        Category :
                    </Typography>
                    <Typography>
                        NIK :
                    </Typography>
                    <Typography>
                        Passport Number :
                    </Typography>

                    </Box>
                </Box>
            </AccordionDetails>
        </Accordion>
        </Box>
    </div>
    </ThemeProvider>
  )
}

export default PassengerDetail