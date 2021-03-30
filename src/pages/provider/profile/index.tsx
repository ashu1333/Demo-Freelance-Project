import * as React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import { IMAGES_URL } from "../../../constants/Images";
import useStyles from "./style";
import Header from "../../common/header";
import Footer from "../../common/footer";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { DashboardAction } from "../../../redux/common/actions";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { months } from "../../../constants/static";
import { useHistory } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import TabScrollButton from "@material-ui/core/TabScrollButton";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import EditIcon from "@material-ui/icons/Edit";
import MenuIcon from "@material-ui/icons/Menu";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Divider from "@material-ui/core/Divider";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

interface DashboardProps {
  name: string;
  dashboard: any;
}

const Dashboard: React.SFC<DashboardProps> = ({ name }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [progress, setProgress] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const [flag, setFlag] = React.useState(1);

  const handleFlag = (val) => {
    setFlag(val);
    console.log(flag);
  };

  return (
    <div className={classes.root}>
      <Header />
      <Grid direction={"row"} container>
        <Grid
          xs={12}
          container
          className={classes.midLSection}
          style={{ backgroundColor: "#B19CD9" }}
        >
          <Grid
            xs={7}
            container
            item
            direction="row"
            style={{ textAlign: "left" }}
          >
            <Grid item style={{ padding: "0px 0px 0px 50px" }}>
              <img src={IMAGES_URL.HYDRA} style={{ width: "200px" }} />
            </Grid>

            <Grid item style={{ marginLeft: 10 }}>
              <Typography variant="h6">{"Meredith Jones"}</Typography>
              <Typography>{"Meredith Jones"}</Typography>
              <Typography variant="body2">
                <LocationOnIcon />
                {"601 Whitney Ranch D21 Henderson NV 89014"}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            xs={4}
            container
            item
            direction="column"
            style={{ textAlign: "left" }}
          >
            <Grid
              item
              container
              direction="row"
              justify={"flex-end"}
              alignItems={"center"}
              style={{ height: "100px" }}
            >
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={12}
              direction="row"
              container
              style={{
                backgroundColor: "black",
                height: "100px",
                borderRadius: "10px",
              }}
            >
              <Grid
                item
                container
                xs={6}
                direction="column"
                alignItems={"center"}
              >
                <br />
                <br />
                <br />
                <br />
                <Brightness1Icon style={{ color: "white" }} />

                <Typography style={{ color: "white" }}>
                  Tier Status: Silver Ring
                </Typography>
              </Grid>

              <Grid
                item
                container
                xs={6}
                direction="column"
                alignItems={"center"}
              >
                <br />
                <br />
                <br />
                <br />
                <Brightness1Icon style={{ color: "white" }} />

                <Typography style={{ color: "white" }}>
                  Tier Status: Silver Ring
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {flag == 1 && (
          <Grid
            xs={8}
            className={classes.midLSection}
            style={{ backgroundColor: "white" }}
          >
            <Paper
              variant="elevation"
              square
              elevation={10}
              style={{ margin: "0px 0px 0px 80px" }}
            >
              <Grid xs={12} container direction="row">
                <Grid xs={12} justify="center" style={{ textAlign: "left" }}>
                  <Typography variant="h5" style={{ marginTop: 10 }}>
                    {"The HydraFacial Company"}
                  </Typography>
                  <Typography variant="body2" style={{ marginTop: 10 }}>
                    {"The HydraFacial Company"}
                  </Typography>
                  <Typography variant="body2" style={{ marginTop: 10 }}>
                    {"Phone:"}
                    <Link>{"+1 2223333434"}</Link>
                  </Typography>
                  <Typography variant="body2" style={{ marginTop: 10 }}>
                    {"Email:"}
                    <Link>{"loyaltyrewards@hydrafacial.com"}</Link>
                  </Typography>

                  <br />
                  <br />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        )}

        {flag == 2 && (
          <Grid
            xs={8}
            className={classes.midLSection}
            style={{ backgroundColor: "white" }}
          >
            <Paper
              variant="elevation"
              square
              elevation={10}
              style={{ margin: "0px 0px 0px 80px" }}
            >
              <Typography>Change Password</Typography>
              <FormControl style={{ width: "70%", marginLeft: 50 }}>
                <TextField
                  id="outlined-number"
                  label="Current Password"
                  type="text"
                  style={{ marginTop: 20 }}
                  variant="outlined"
                />

                <TextField
                  id="outlined-number"
                  label="New Password"
                  type="text"
                  style={{ marginTop: 20 }}
                  variant="outlined"
                />

                <TextField
                  id="outlined-number"
                  label="Confirm Password"
                  type="text"
                  style={{ marginTop: 20 }}
                  variant="outlined"
                />

                <Grid xs={9} direction={"row"} style={{ marginTop: 20 }}>
                  <Button
                    style={{
                      backgroundColor: "black",
                      width: "80px",
                      marginRight: 20,
                    }}
                  >
                    {" "}
                    <Typography style={{ color: "white" }}>Submit </Typography>
                  </Button>
                </Grid>
              </FormControl>
            </Paper>
          </Grid>
        )}

        {flag == 3 && (
          <Grid
            xs={8}
            className={classes.midLSection}
            style={{ backgroundColor: "white" }}
          >
            <Paper
              variant="elevation"
              square
              elevation={10}
              style={{ margin: "0px 0px 0px 80px" }}
            >
              <Typography>Edit Profile</Typography>
              <br />
              <br />
              <Typography>Personal Info</Typography>
              <img
                src={IMAGES_URL.HYDRA}
                style={{ height: "50px", width: "50px" }}
              />

              <Button style={{ padding: "0px 0px 0px 10px" }}>
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                  />

                  <Button
                    style={{ backgroundColor: "#41F5DF" }}
                    variant="contained"
                    component="span"
                  >
                    Upload Profile Photo
                  </Button>
                </label>
              </Button>

              <img
                src={IMAGES_URL.HYDRA}
                style={{ height: "50px", width: "50px" }}
              />

              <Button style={{ padding: "0px 0px 0px 10px" }}>
                <label htmlFor="upload-photo">
                  <input
                    style={{ display: "none" }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                  />

                  <Button
                    style={{ backgroundColor: "#41F5DF" }}
                    variant="contained"
                    component="span"
                  >
                    Upload provider Photo
                  </Button>
                </label>
              </Button>

              <FormControl style={{ width: "40%", marginLeft: 50 }}>
                <TextField
                  id="outlined-number"
                  label="First Name"
                  type="text"
                  style={{ marginTop: 20 }}
                  variant="outlined"
                />

                <TextField
                  id="outlined-number"
                  label="Last Name"
                  type="text"
                  style={{ marginTop: 20 }}
                  variant="outlined"
                />

                <TextField
                  id="outlined-number"
                  label="Business Name"
                  type="text"
                  style={{ marginTop: 20 }}
                  variant="outlined"
                />
                <TextField
                  id="outlined-number"
                  label="Phone"
                  type="text"
                  style={{ marginTop: 20 }}
                  variant="outlined"
                />

                <TextField
                  id="outlined-number"
                  label="Address"
                  type="text"
                  style={{ marginTop: 20 }}
                  variant="outlined"
                />

                <TextField
                  id="outlined-number"
                  label="Work Experience"
                  type="text"
                  style={{ marginTop: 20 }}
                  variant="outlined"
                />
                <Grid xs={9} direction={"row"} style={{ marginTop: 20 }}>
                  <Button
                    style={{
                      backgroundColor: "black",
                      width: "80px",
                      marginRight: 20,
                    }}
                  >
                    {" "}
                    <Typography style={{ color: "white" }}>Submit </Typography>
                  </Button>
                </Grid>
              </FormControl>
            </Paper>
          </Grid>
        )}

        <Grid xs={4} className={classes.midLSection} container>
          <Grid xs={8} style={{ marginLeft: 30 }}>
            <AppBar position="static">
              <Toolbar
                variant="dense"
                style={{ backgroundColor: flag == 1 ? "#87ceeb" : "white" }}
              >
                <IconButton edge="start" aria-label="menu">
                  <PersonIcon />
                </IconButton>
                <Typography variant="h6" color="inherit">
                  <Link
                    onClick={() => {
                      handleFlag(1);
                    }}
                  >
                    {" "}
                    My Account{" "}
                  </Link>
                </Typography>
              </Toolbar>
            </AppBar>

            <AppBar position="static">
              <Toolbar
                variant="dense"
                style={{ backgroundColor: flag == 2 ? "#87ceeb" : "white" }}
              >
                <IconButton
                  edge="start"
                  style={{ color: "black" }}
                  aria-label="menu"
                >
                  <LockIcon />
                </IconButton>
                <Typography variant="h6" style={{ color: "black" }}>
                  <Link
                    onClick={() => {
                      handleFlag(2);
                    }}
                  >
                    {" "}
                    Forget Password{" "}
                  </Link>
                </Typography>
              </Toolbar>
            </AppBar>

            <AppBar position="static">
              <Toolbar
                variant="dense"
                style={{ backgroundColor: flag == 3 ? "#87ceeb" : "white" }}
              >
                <IconButton
                  edge="start"
                  style={{ color: "black" }}
                  aria-label="menu"
                >
                  <EditIcon />
                </IconButton>
                <Typography variant="h6" style={{ color: "black" }}>
                  <Link
                    onClick={() => {
                      handleFlag(3);
                    }}
                  >
                    {" "}
                    Edit Profile{" "}
                  </Link>
                </Typography>
              </Toolbar>
            </AppBar>
          </Grid>
        </Grid>
      </Grid>
      <Grid></Grid>
      <Footer />
    </div>
  );
};

export default Dashboard;
