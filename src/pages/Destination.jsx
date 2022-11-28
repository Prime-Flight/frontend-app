import React from "react";
import ResponsiveAppBar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// Data Dummy
function generate(element) {
  return [0, 1, 2, 4, 5, 6, 7, 8].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

function Destination() {
  return (
    <>
      <ResponsiveAppBar />

      <React.Fragment>
        <img
          src={require("../assets/airplane.jpg")}
          alt="airplane"
          style={{ height: 500, width: "100%" }}
        />
      </React.Fragment>

      <h1>Destinasi</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent turpis
        sem, laoreet sit amet elementum quis, sagittis at purus. Mauris vel orci
        posuere, venenatis arcu ut, rutrum nunc. Fusce orci velit, maximus vel
        risus at, varius elementum lacus. Donec aliquam metus at aliquet
        placerat. Nulla facilisi. Quisque volutpat auctor quam, sit amet viverra
        arcu pulvinar vel.
      </p>

      <React.Fragment>
        <Grid container spacing={5} marginBottom={5}>
          {generate(
            <Grid item xs={12} md={3}>
              <Card
                sx={{ maxWidth: 345 }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={require("../assets/airplane.jpg")}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Jakarta
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis veniam cum et, nam ratione neque placeat inventore
                      vero doloremque ab voluptatibus soluta vitae, dolore, sint
                      consequatur? Officia veritatis autem eius?
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          )}
        </Grid>
      </React.Fragment>
      <Footer />
    </>
  );
}

export default Destination;
