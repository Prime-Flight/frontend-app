import {
  Avatar,
  Grid,
  ThemeProvider,
  createTheme,
  Box,
  Typography,
  Button,
  Container,
  Paper,
  TextField,
  MenuItem,
  Divider,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  details,
  updateDetails,
  verify,
  addPhoto,
} from "../redux/actions/authAction";

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

const titles = [
  {
    value: "Mr",
    label: "Mr",
  },
  {
    value: "Mrs",
    label: "Mrs",
  },
  {
    value: "Miss",
    label: "Miss",
  },
];
const genders = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];

export default function UserProfile() {
  const { userDetails } = useSelector((state) => state.auth);
  const [gender, setGender] = useState(userDetails?.gender);
  //   const [changeData, setChangeData] = useState(false);
  const [name, setName] = useState(userDetails?.name);
  const [phone_number, setPhonenumber] = useState(userDetails?.phone_number);
  const [nationality, setNationality] = useState(userDetails?.nationality);
  const [nik, setNik] = useState("");
  const [passport, setPassport] = useState("");
  //   const [title, setTitle] = useState(userDetails?.title);
  const [email, setEmail] = useState(userDetails?.email);
  const [status, setStatus] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const handleTitle = (e) => {
  //     setTitle(e.target.value);
  //   };
  const [photo, setPhoto] = useState(userDetails?.url_profile_picture);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(details());
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(addPhoto());
  // }, [dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      email,
      name,
      nationality,
      phone_number,
    };
    dispatch(updateDetails(data));
  };

  const addPhoto = async (event) => {
    event.preventDefault();
    dispatch(addPhoto(photo));
  };

  console.log(photo);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid item sx={{ padding: 3 }}>
        <Paper
          sx={{
            height: "90vh",
            width: 1050,
            backgroundColor: "sub.main",
            borderRadius: 3,
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Grid item xs={6} sm={6}>
            <Box
              sx={{ display: "flex", flexDirection: "column", marginLeft: 3 }}
            >
              <Paper sx={{ my: 3, p: 2, backgroundColor: "sub.main" }}>
                <Avatar
                  sx={{
                    width: 250,
                    height: 250,
                    marginTop: 3,
                    marginBottom: 2,
                    marginLeft: 13,
                  }}
                />
                <Button variant="contained" component="label" value={photo}>
                  Change Profile Picture
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={(e) => setPhoto(e.target.value)}
                  />
                </Button>
                <Button
                  variant="contained"
                  component="label"
                  color="success"
                  onClick={addPhoto}
                >
                  Save
                </Button>
              </Paper>
              <Button variant="contained">Change Password</Button>
            </Box>
          </Grid>

          <Grid item xs={3} sm={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 10,
                paddingTop: 5,
                width: 350,
              }}
              component="form"
              noValidate
              onSubmit={handleSubmit}
            >
              <Grid item xs={12} sm={12}>
                <Typography variant="h6" gutterBottom>
                  Status anda:{" "}
                  {userDetails?.is_verified === true
                    ? "Verified"
                    : "Not Verified"}
                </Typography>
                <Button
                  variant="contained"
                  onClick={dispatch(verify())}
                  style={{ marginBottom: 20 }}
                  disabled={userDetails?.is_verified === true ? true : false}
                >
                  Verifikasi
                </Button>
              </Grid>

              <TextField
                size="small"
                label="Name"
                id="Name"
                value={name}
                margin="dense"
                name="name"
                onChange={(e) => setName(e.target.value)}
              ></TextField>

              {/* <TextField
                  select
                  size="small"
                  label="Title"
                  value={title}
                  onChange={handleTitle}
                  margin="dense"
                >
                  {titles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField> */}

              <TextField
                required
                label="Gender"
                id="outlined-select"
                select
                fullWidth
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                {genders.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                size="small"
                label="Nationality"
                margin="dense"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              ></TextField>

              {/* <Divider sx={{ my: 2 }} />

                <TextField size="small" label="NIK" margin="dense"></TextField>

                <TextField
                  size="small"
                  label="Passport number"
                  margin="dense"
                ></TextField>

                <Divider sx={{ my: 2 }} /> */}

              <TextField
                size="small"
                label="Email"
                margin="dense"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></TextField>

              <TextField
                size="small"
                label="Phone Number"
                margin="dense"
                value={phone_number}
                onChange={(e) => setPhonenumber(e.target.value)}
              ></TextField>

              <Button
                color="success"
                variant="contained"
                type="submit"
                sx={{ marginTop: 1 }}
              >
                Save Changes
              </Button>
            </Box>
            {/* <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 10,
                  paddingTop: 5,
                  width: 350,
                }}
              >
                <TextField
                  size="small"
                  label="Name"
                  id="Name"
                  value={userDetails?.name}
                  margin="dense"
                  name="name"
                ></TextField>

                <TextField
                  select
                  size="small"
                  label="Title"
                  value={title}
                  margin="dense"
                >
                  {titles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  size="small"
                  label="Nationality"
                  margin="dense"
                  value={userDetails?.nationality}
                ></TextField>

                <Divider sx={{ my: 2 }} />

                <TextField size="small" label="NIK" margin="dense"></TextField>

                <TextField
                  size="small"
                  label="Passport number"
                  margin="dense"
                ></TextField>

                <Divider sx={{ my: 2 }} />

                <TextField
                  size="small"
                  label="Email"
                  margin="dense"
                  value={userDetails?.email}
                ></TextField>

                <TextField
                  size="small"
                  label="Phone Number"
                  margin="dense"
                  value={userDetails?.phone_number}
                ></TextField>

                <Button
                  variant="contained"
                  onClick={setChangeData(true)}
                  sx={{ marginTop: 1 }}
                >
                  Change Data
                </Button>
              </Box> */}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
