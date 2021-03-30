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
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import { validatepProfilePage } from "../../../constants/validation";
import { validateChangePassword } from "../../../constants/validation";
import { UserActions } from "../../../redux/common/actions";
import { ResetPasswordRequest } from "../../../redux/user/model";

interface ProfileProps {
  data: any;
}
const Profile: React.SFC<ProfileProps> = () => {
  interface error {
    [key: string]: any;
  }
  interface c_error {
    [key: string]: any;
  }

  Storage.prototype.getObject = async function (key) {
    return await this.getItem(key);
  };
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [c_values, c_setValues] = React.useState<any>({});
  const [flag, setFlag] = React.useState(1);
  const [formValidate, setSubmitting] = React.useState({
    isSubmitting: true,
    error: undefined,
  });
  const [c_formValidate, c_setSubmitting] = React.useState({
    c_isSubmitting: true,
    c_error: undefined,
  });
  const [errors, setErrors] = React.useState<error>({ selected: undefined });
  const [c_errors, c_setErrors] = React.useState<c_error>({
    c_selected: undefined,
  });
  const userData = useSelector((state: any) => state.user.loginUser);
  const [values, setValues] = React.useState<ResetPasswordRequest>({});
  const [newvalue, setnewvalue] = React.useState<ResetPasswordRequest>({});
  const [data, setdata] = React.useState({
    email: "",
    first_name: "",
    mobile_no: "",
    image: "",
  });
  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event?.target.name]: event?.target.value,
    });
    setErrors({ ...errors, selected: event?.target.name });
  };

  const handleChange1 = (event: any) => {
    c_setValues({
      ...c_values,
      [event?.target.name]: event?.target.value,
    });

    setnewvalue({
      ...newvalue,
      [event?.target.name]:
        event?.target.name == "newpassword" ? event?.target.value : undefined,
    });
    c_setErrors({ ...c_errors, c_selected: event?.target.name });
  };
  const handleSubmit = () => {
    dispatch(UserActions.resetPassword(newvalue, history));
  };

  React.useEffect(() => {
    localStorage.getObject("user").then((data) => setdata(JSON.parse(data)));
    const c_validationErrors = validateChangePassword(c_values);
    let c_noErrors = Object.keys(c_validationErrors).length == 0;
    let c_currentError = c_validationErrors[c_errors.c_selected];
    c_setSubmitting({ c_isSubmitting: c_noErrors, c_error: c_currentError });

    const validationErrors = validatepProfilePage(values);
    let noErrors = Object.keys(validationErrors).length == 0;
    let currentError = validationErrors[errors.selected];
    setSubmitting({ isSubmitting: noErrors, error: currentError });
  }, [errors, c_errors]);
  const handleFlag = (val) => {
    setFlag(val);
  };

  return (
    <div className={classes.root}>
      <Header />
      <Grid direction={"row"} container>
        <Grid
          xs={12}
          container
          className={classes.profiletSection}
          style={{ backgroundColor: "#B19CD9" }}
        >
          <Grid
            xs={6}
            container
            item
            direction="row"
            style={{ textAlign: "left" }}
          >
            <Grid item style={{ padding: "0px 0px 0px 50px" }}>
              <div id="profileimg">
                <img
                  src={"https://linq.hydrafacial.com/images/" + data?.image}
                />
              </div>
            </Grid>

            <Grid item style={{ marginLeft: 10 }}>
              {console.log(JSON.stringify(data))}
              <Typography variant="h6" className={classes.profiletTitle}>
                {data?.first_name}
              </Typography>
              {!userData.loginAsCustomer ? (
                <Typography className={classes.profiletText}>
                  {"P071665"}
                </Typography>
              ) : (
                <></>
              )}
              <Typography variant="body2" className={classes.profiletText}>
                <LocationOnIcon /> {"601 Whitney Ranch D21 Henderson NV 89014"}
              </Typography>
            </Grid>
          </Grid>

          <Grid
            xs={5}
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
              style={{ height: "60px" }}
            >
              <IconButton
                style={{ color: "#fff", padding: "8px" }}
                onClick={() => {
                  window.open("https://www.facebook.com/hydrafacial/");
                }}
              >
                <FacebookIcon />
              </IconButton>

              {localStorage.getItem("user_type") == "CONSUMER" ? (
                <div>
                  <IconButton
                    style={{ color: "#fff", padding: "8px" }}
                    onClick={() => {
                      window.open("https://twitter.com/hydrafacial/");
                    }}
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    style={{ color: "#fff", padding: "8px" }}
                    onClick={() => {
                      window.open(
                        "https://www.linkedin.com/jobs/hydrafacial-jobs"
                      );
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </div>
              ) : (
                <IconButton
                  style={{ color: "#fff", padding: "8px" }}
                  onClick={() => {
                    window.open("https://www.instagram.com/hydrafacial/");
                  }}
                >
                  <InstagramIcon />
                </IconButton>
              )}
            </Grid>
            {localStorage.getItem("user_type") == "CONSUMER" ? (
              <Grid
                item
                xs={12}
                direction="row"
                container
                style={{
                  backgroundColor: "#211f20",
                  height: "60px",
                  borderRadius: "10px 10px 0 0",
                  paddingBottom: "10px",
                }}
              >
                <Grid
                  item
                  container
                  xs={4}
                  direction="column"
                  alignItems={"center"}
                >
                  <br />
                  <Brightness1Icon
                    style={{ color: "white", width: "50px", height: "50px" }}
                  />
                  <Typography style={{ color: "white" }}>{"75%"}</Typography>
                  <Typography style={{ color: "white" }}>
                    {"Influencing Score"}
                  </Typography>
                </Grid>

                <Grid
                  item
                  container
                  xs={4}
                  direction="column"
                  alignItems={"center"}
                >
                  <br />
                  <Brightness1Icon
                    style={{ color: "white", width: "50px", height: "50px" }}
                  />
                  <Typography style={{ color: "white" }}>{"65%"}</Typography>
                  <Typography style={{ color: "white" }}>
                    {"Connecting Score"}
                  </Typography>
                </Grid>

                <Grid
                  item
                  container
                  xs={4}
                  direction="column"
                  alignItems={"center"}
                >
                  <br />
                  <Brightness1Icon
                    style={{ color: "white", width: "50px", height: "50px" }}
                  />
                  <Typography style={{ color: "white" }}>{"Fair"}</Typography>
                  <Typography style={{ color: "white" }}>
                    {"Learning Score"}
                  </Typography>
                </Grid>
              </Grid>
            ) : (
              <Grid
                item
                xs={12}
                direction="row"
                container
                style={{
                  backgroundColor: "#211f20",
                  height: "60px",
                  borderRadius: "10px 10px 0 0",
                  paddingBottom: "10px",
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
                  <Brightness1Icon
                    style={{ color: "white", width: "50px", height: "50px" }}
                  />
                  <Typography style={{ color: "#aa93c1" }}>
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
                  <Brightness1Icon
                    style={{ color: "white", width: "50px", height: "50px" }}
                  />
                  <Typography style={{ color: "#e0ad78" }}>
                    Future Status: Silver Ring
                  </Typography>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
        {/*PROVIDER*/}
        {flag == 1 && localStorage.getItem("user_type") == "AESTHETICIAN" && (
          <Grid
            xs={8}
            className={classes.midLSection}
            style={{ backgroundColor: "white" }}
          >
            <Paper
              variant="elevation"
              square
              elevation={10}
              style={{
                margin: "0px 0px 50px 80px",
                paddingBottom: "40px",
                paddingTop: "40px",
              }}
            >
              <Grid xs={12} container direction="row">
                <Grid xs={8} justify="center" style={{ textAlign: "left" }}>
                  <Typography variant="h5" className={classes.profiletTitle}>
                    {"The HydraFacial Company"}
                  </Typography>
                  <Typography variant="body2" className={classes.profiletText}>
                    {"The HydraFacial Company"}
                  </Typography>
                  <Typography variant="body2" className={classes.profiletText}>
                    {"Phone:"}
                    <Link href="tel:+1 2223333434">{data?.mobile_no}</Link>
                  </Typography>
                  <Typography variant="body2" className={classes.profiletText}>
                    {"Email:"}
                    <Link href="mailto:loyaltyrewards@hydrafacial.com">
                      {data?.email}
                    </Link>
                  </Typography>

                  <br />
                  <br />
                </Grid>
                <Grid item xs={4}>
                  <div
                    style={{
                      width: "200px",
                      height: "25px",
                      lineHeight: "25px",
                      textAlign: "center",
                      float: "right",
                      padding: "10px 0px",
                      marginRight: "25px",
                      borderRadius: "6px",
                      backgroundColor: "#eee",
                    }}
                  >
                    <Typography>{"0 Year Expereince"}</Typography>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        )}

        {/*CUSTOMER*/}
        {flag == 1 && localStorage.getItem("user_type") == "CONSUMER" && (
          <Grid
            xs={8}
            className={classes.midLSection}
            style={{ backgroundColor: "white" }}
          >
            <Paper
              variant="elevation"
              square
              elevation={10}
              style={{
                margin: "0px 0px 50px 80px",
                paddingBottom: "40px",
                paddingTop: "40px",
              }}
            >
              <Grid xs={12} container direction="row">
                <Grid xs={8} justify="center" style={{ textAlign: "left" }}>
                  <Typography variant="h5" className={classes.profiletTitle}>
                    {"PROFESSIONAL BIO"}
                  </Typography>
                  <Typography variant="body2" className={classes.profiletText}>
                    {"HydraFacial"}
                  </Typography>
                </Grid>

                <Grid item xs={4}>
                  <div
                    style={{
                      width: "200px",
                      height: "25px",
                      lineHeight: "25px",
                      textAlign: "center",
                      float: "right",
                      padding: "10px 0px",
                      marginRight: "25px",
                      borderRadius: "6px",
                      backgroundColor: "#eee",
                    }}
                  >
                    <Typography>{"0 Year Expereince"}</Typography>
                  </div>
                </Grid>
                <br />
                <br />

                <Grid xs={8} justify="center" style={{ textAlign: "left" }}>
                  <Typography variant="h5" className={classes.profiletTitle}>
                    {"CONTACT INFORMATION"}
                  </Typography>
                  <Typography variant="body2" className={classes.profiletText}>
                    {"Phone:"}
                    <Link href="tel:+1 2223333434">{data?.mobile_no}</Link>
                  </Typography>
                  <Typography variant="body2" className={classes.profiletText}>
                    {"Email:"}
                    <Link href="mailto:loyaltyrewards@hydrafacial.com">
                      {data?.email}
                    </Link>
                  </Typography>
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
              style={{ margin: "0px 0px 50px 80px", paddingBottom: "40px" }}
            >
              <Typography className={classes.profileTitle}>
                Change Password
              </Typography>
              <FormControl style={{ width: "70%", marginLeft: 50 }}>
                <TextField
                  variant="outlined"
                  id="outlined-number"
                  type="password"
                  label="Current Password"
                  name="currentpassword"
                  style={{ marginTop: 20 }}
                  helperText={
                    c_errors?.c_selected == "currentpassword"
                      ? c_formValidate?.c_error
                      : ""
                  }
                  error={
                    c_errors?.c_selected == "currentpassword" &&
                    c_formValidate?.c_error
                  }
                />

                <TextField
                  id="outlined-number"
                  label="New Password"
                  name="newpassword"
                  type="password"
                  style={{ marginTop: 20 }}
                  variant="outlined"
                  onChange={handleChange1}
                  helperText={
                    c_errors?.c_selected == "newpassword"
                      ? c_formValidate?.c_error
                      : ""
                  }
                  error={
                    c_errors?.c_selected == "newpassword" &&
                    c_formValidate?.c_error
                  }
                />

                <TextField
                  id="outlined-number"
                  label="Confirm Password"
                  type="password"
                  style={{ marginTop: 20 }}
                  variant="outlined"
                  name="confirmedpassword"
                  onChange={handleChange1}
                  helperText={
                    c_errors?.c_selected == "confirmedpassword"
                      ? c_formValidate?.c_error
                      : ""
                  }
                  error={
                    c_errors?.c_selected == "confirmedpassword" &&
                    c_formValidate?.c_error
                  }
                />

                <Grid xs={9} direction={"row"} style={{ marginTop: 20 }}>
                  <Button
                    style={{
                      backgroundColor: "black",
                      width: "80px",
                      marginRight: 20,
                    }}
                    onClick={() => handleSubmit()}
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
              style={{ margin: "0px 0px 50px 80px", paddingBottom: "40px" }}
            >
              <Typography className={classes.profileTitle1}>
                Edit Profile
              </Typography>
              <Typography className={classes.profileTitle2}>
                Personal Info
              </Typography>
              <Grid>
                <img
                  src={IMAGES_URL.HYDRA}
                  style={{
                    height: "50px",
                    width: "50px",
                    border: "1px solid #eee",
                    marginLeft: "50px",
                    borderRadius: "50%",
                  }}
                />

                <Button
                  style={{ padding: "-20px 0px 0px 10px", marginTop: "-44px" }}
                >
                  <label htmlFor="upload-photo">
                    <input
                      style={{ display: "none" }}
                      id="upload-photo"
                      name="upload-photo1"
                      type="file"
                      required
                      // onChange={(input) => {uploadImage(input);handleChange(input)}}
                    />

                    <Button
                      style={{ backgroundColor: "#eee" }}
                      variant="contained"
                      component="span"
                    >
                      Upload Profile Photo
                    </Button>
                  </label>
                </Button>
              </Grid>
              {localStorage.getItem("user_type") != "CONSUMER" && (
                <Grid>
                  <img
                    src={IMAGES_URL.HYDRA}
                    style={{
                      height: "50px",
                      width: "50px",
                      border: "1px solid #eee",
                      marginLeft: "50px",
                      borderRadius: "50%",
                    }}
                  />

                  <Button
                    style={{
                      padding: "-20px 0px 0px 10px",
                      marginTop: "-44px",
                    }}
                  >
                    <label htmlFor="upload-photo">
                      <input
                        style={{ display: "none" }}
                        id="upload-photo"
                        name="upload-photo2"
                        type="file"
                        required
                      />

                      <Button
                        style={{ backgroundColor: "#eee" }}
                        variant="contained"
                        component="span"
                      >
                        Upload Provider Photo
                      </Button>
                    </label>
                  </Button>
                </Grid>
              )}
              <FormControl
                style={{ width: "55%", marginLeft: 50, clear: "both" }}
              >
                <TextField
                  id="outlined-number"
                  label="First Name"
                  name="first_name"
                  type="text"
                  style={{ marginTop: 20 }}
                  onChange={handleChange}
                  variant="outlined"
                  helperText={
                    errors?.selected == "first_name" ? formValidate?.error : ""
                  }
                  error={
                    errors?.selected == "first_name" && formValidate?.error
                  }
                />

                <TextField
                  id="outlined-number"
                  label="Last Name"
                  name="last_name"
                  type="text"
                  style={{ marginTop: 20 }}
                  variant="outlined"
                  onChange={handleChange}
                  helperText={
                    errors?.selected == "last_name" ? formValidate?.error : ""
                  }
                  error={errors?.selected == "last_name" && formValidate?.error}
                />

                <TextField
                  id="outlined-number"
                  label="Business Name"
                  type="text"
                  name="bussiness_name"
                  style={{ marginTop: 20 }}
                  variant="outlined"
                  onChange={handleChange}
                  helperText={
                    errors?.selected == "bussiness_name"
                      ? formValidate?.error
                      : ""
                  }
                  error={
                    errors?.selected == "bussiness_name" && formValidate?.error
                  }
                />
                <TextField
                  id="outlined-number"
                  label="Phone"
                  type="text"
                  name="mobile_no"
                  style={{ marginTop: 20 }}
                  variant="outlined"
                  onChange={handleChange}
                  helperText={
                    errors?.selected == "mobile_no" ? formValidate?.error : ""
                  }
                  error={errors?.selected == "mobile_no" && formValidate?.error}
                />

                <TextField
                  id="outlined-number"
                  label="Address"
                  name="address"
                  type="text"
                  style={{ marginTop: 20 }}
                  variant="outlined"
                  onChange={handleChange}
                  helperText={
                    errors?.selected == "address" ? formValidate?.error : ""
                  }
                  error={errors?.selected == "address" && formValidate?.error}
                />

                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Work Experience
                  </InputLabel>
                  <Select
                    native
                    // value={state.age}
                    name="exp"
                    onChange={handleChange}
                    label="Age"
                    inputProps={{
                      name: "Work Experience",
                      id: "outlined-age-native-simple",
                    }}
                    style={{
                      borderRadius: 4,
                      border: "1px solid #ced4da",
                      marginTop: 20,
                    }}
                    required
                  >
                    <option aria-label="None" value="" />
                    <option value={"Less than 1 year"}>Less than 1 year</option>
                    <option value={"Less than 2 year"}>Less than 2 year</option>
                    <option value={"Less than 3 year"}>Less than 3 year</option>
                  </Select>
                  <FormHelperText></FormHelperText>
                </FormControl>
                <Grid xs={9} direction={"row"} style={{ marginTop: 20 }}>
                  <Button
                    style={{
                      backgroundColor: "black",
                      width: "80px",
                      marginRight: 20,
                    }}
                    disabled={!formValidate.isSubmitting}
                    onClick={() => handleSubmit()}
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
          <Grid xs={8} style={{ marginLeft: "30px" }}>
            <AppBar position="static">
              <Toolbar
                variant="dense"
                className={classes.navMenu}
                style={{
                  backgroundColor: flag == 1 ? "#ddd" : "white",
                  cursor: "pointer",
                }}
              >
                <IconButton edge="start" aria-label="menu">
                  <PersonIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.navMenu}
                >
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
                className={classes.navMenu}
                style={{
                  backgroundColor: flag == 2 ? "#ddd" : "white",
                  cursor: "pointer",
                }}
              >
                <IconButton
                  edge="start"
                  style={{ color: "black" }}
                  aria-label="menu"
                >
                  <LockIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  style={{ color: "black" }}
                  className={classes.navMenu}
                >
                  <Link
                    onClick={() => {
                      handleFlag(2);
                    }}
                  >
                    {" "}
                    Change Password{" "}
                  </Link>
                </Typography>
              </Toolbar>
            </AppBar>

            <AppBar position="static">
              <Toolbar
                variant="dense"
                className={classes.navMenu}
                style={{
                  backgroundColor: flag == 3 ? "#ddd" : "white",
                  cursor: "pointer",
                }}
              >
                <IconButton
                  edge="start"
                  style={{ color: "black" }}
                  aria-label="menu"
                >
                  <EditIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  style={{ color: "black" }}
                  className={classes.navMenu}
                >
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

export default Profile;
