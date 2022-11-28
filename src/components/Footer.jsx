import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Prime Flight
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <Box component="footer" sx={{ bgcolor: "#DCDCDC", py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography>
        <a href="https://www.freepik.com/free-photo/airplane-flying-cloudy-sky_5869139.htm#query=airplane&position=24&from_view=keyword">
          Image by Racool_studio
        </a>{" "}
        and{" "}
        <a href="https://www.freepik.com/free-photo/airport-aircraft-airplane-aviation-transportation-travel_2861986.htm#page=3&query=airport&position=36&from_view=search&track=sph">
          rawpixel.com
        </a>{" "}
        on Freepik
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
