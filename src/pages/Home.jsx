import React from "react";
import { useState, useEffect } from "react";
import ResponsiveAppBar from "../components/Navbar";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Footer from "../components/Footer";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import InstagramIcon from "@mui/icons-material/Instagram";
import Divider from "@mui/material/Divider";
// import { useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { saveToken } from "../redux/actions/authAction";

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

// List Dummy
function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Root = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(5),
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(5),
  },
}));

function Home() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (params.token) {
  //     dispatch(saveToken());
  //   }
  // }, [params.token]);

  // const params = useParams();
  const content = (
    <div>
      {
        <a style={{ fontSize: 16 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          turpis sem, laoreet sit amet elementum quis, sagittis at purus. Mauris
          vel orci posuere, venenatis arcu ut, rutrum nunc. Fusce orci velit,
          maximus vel risus at, varius elementum lacus. Donec aliquam metus at
          aliquet placerat. Nulla facilisi. Quisque volutpat auctor quam, sit
          amet viverra arcu pulvinar vel. Cras non dui rutrum, posuere leo
          ultricies, porta velit. Nunc sit amet arcu porttitor, maximus tellus
          quis, facilisis ante. Ut convallis, libero ac elementum vulputate,
          elit felis facilisis nisl, ut tristique sapien odio vitae massa.
        </a>
      }
    </div>
  );

  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
      <Grid container spacing={0} style={{ backgroundColor: "#656565" }}>
        <Grid
          item
          xs={12}
          md={5}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <React.Fragment>
            <CssBaseline />
            <Grid
              container
              maxWidth="false"
              style={{ backgroundColor: "#DCDCDC" }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <h1>Prime Flight</h1>
              <h3 style={{ fontSize: 13 }}>
                “There’s something magic about airports it’s like standing in a
                room with a thousand doors.” ― Atticus Poetry, The Truth About
                Magic
              </h3>
              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                <Fab variant="extended" color="primary">
                  <AppRegistrationIcon sx={{ mr: 1 }} />
                  TRAVEL NOW
                </Fab>
              </Box>
            </Grid>
          </React.Fragment>
        </Grid>
        <Grid item xs={12} md={7}>
          <img
            src={require("../assets/airport.jpg")}
            alt="airport"
            style={{ height: "100%", width: "100%" }}
          />
        </Grid>
      </Grid>

      <React.Fragment>
        <Root>
          <Divider>
            Pesan tiket pesawat secara mudah dan berkualitas di Prime Flight
          </Divider>
          {content}
          <Divider>
            Kenapa kamu harus pesan tiket pesawat di Prime Flight?
          </Divider>
          {content}
          <Divider />
        </Root>
      </React.Fragment>

      <React.Fragment>
        <Grid
          container
          spacing={0}
          style={{
            backgroundColor: "#DCDCDC",
            textAlign: "start",
            paddingLeft: 50,
          }}
        >
          <Grid item xs={12} md={3}>
            <Typography sx={{ mt: 4, mb: 1 }} variant="h5" component="div">
              Prime Flight
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <MarkunreadIcon />
                </ListItemIcon>
                <ListItemText primary="primeflight@gmail.com" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <LocalPhoneIcon />
                </ListItemIcon>
                <ListItemText primary="08XXXXXXXXXX" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <InstagramIcon />
                </ListItemIcon>
                <ListItemText primary="@primeflight" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography sx={{ mt: 4, mb: 1 }} variant="h5" component="div">
              Journey
            </Typography>
            {generate(
              <ListItem>
                <ListItemIcon>
                  <AirplaneTicketIcon />
                </ListItemIcon>
                <ListItemText primary="List Dummy" />
              </ListItem>
            )}
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography sx={{ mt: 4, mb: 1 }} variant="h5" component="div">
              Destination
            </Typography>
            {generate(
              <ListItem>
                <ListItemIcon>
                  <AirplaneTicketIcon />
                </ListItemIcon>
                <ListItemText primary="List Dummy" />
              </ListItem>
            )}
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography sx={{ mt: 4, mb: 1 }} variant="h5" component="div">
              Order
            </Typography>
            {generate(
              <ListItem>
                <ListItemIcon>
                  <AirplaneTicketIcon />
                </ListItemIcon>
                <ListItemText primary="List Dummy" />
              </ListItem>
            )}
          </Grid>
        </Grid>
      </React.Fragment>

      <Footer />
    </ThemeProvider>
  );
}

export default Home;
