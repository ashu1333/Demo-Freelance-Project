import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { IMAGES_URL } from "../../../constants/Images";
import useStyles from "./style";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useHistory, useLocation } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import { HelpModalValidation } from "../../../constants/validation";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import { ProviderAction } from "../../../redux/common/actions";
import { loginUser } from "../../../redux/user/reducer";

interface HeaderProps {
  handleNews: any;
}
interface error {
  [key: string]: any;
}

const Header = (props) => {
  const location = useLocation();
  const [values, setValues] = React.useState<any>({});
  const [formValidate, setSubmitting] = React.useState({
    isSubmitting: true,
    error: undefined,
  });
  const [errors, setErrors] = React.useState<error>({ selected: undefined });
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [profile, setProfile] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const userData = useSelector((state: any) => state.user.loginUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    mobileView: false,
    drawerOpen: false,
  });
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const images = localStorage.getItem("image");
  console.log(props);

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <>
        <AppBar style={{ backgroundColor: "black" }}>
          <Toolbar>
            <Grid container direction="column">
              <Grid item xs>
                <IconButton
                  onClick={() => {
                    window.open("https://www.facebook.com/hydrafacial/");
                  }}
                >
                  <FacebookIcon style={{ background: "white" }} />
                </IconButton>
                <IconButton
                  onClick={() => {
                    window.open("https://www.instagram.com/hydrafacial/");
                  }}
                >
                  <InstagramIcon style={{ background: "white" }} />
                </IconButton>
                <IconButton onClick={handleOpen}>
                  <PersonIcon style={{ background: "white" }} />
                  <Typography
                    style={{ color: "white", padding: "0px 0px 0px 10px" }}
                  >
                    HELP
                  </Typography>
                </IconButton>
              </Grid>

              <Grid xs={10} item>
                <Modal
                  open={open}
                  onClose={handleClose2}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  style={{
                    width: "250%",
                    margin: "30px 0px 0px 0px",
                    outline: "2",
                  }}
                >
                  <Grid xs={12} container>
                    <Grid
                      container
                      xs
                      style={{ height: "60px", backgroundColor: "#8ec6d7" }}
                      direction="row"
                    >
                      <Grid item xs={2}>
                        <Typography variant="h4" className={classes.modelTitle}>
                          SUPPORT
                        </Typography>
                      </Grid>

                      <Grid item xs={2}>
                        <IconButton
                          onClick={() => {
                            handleClose2();
                          }}
                          style={{ margin: "0px 0px 0px 350px" }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      xs={12}
                      direction="row"
                      style={{ backgroundColor: "white " }}
                    >
                      <FormControl
                        style={{
                          width: "80%",
                          paddingLeft: "40px",
                          paddingBottom: "30px",
                        }}
                      >
                        <TextField
                          variant="outlined"
                          id="outlined-number"
                          label="Name"
                          name="name"
                          type="text"
                          style={{ marginTop: 20 }}
                          onChange={handleChange}
                          helperText={
                            errors?.selected == "name"
                              ? formValidate?.error
                              : ""
                          }
                          error={
                            errors?.selected == "name" && formValidate?.error
                          }
                          autoFocus
                        />

                        <TextField
                          variant="outlined"
                          id="outlined-number"
                          label="Email"
                          name="email"
                          type="text"
                          style={{ marginTop: 20 }}
                          onChange={handleChange}
                          helperText={
                            errors?.selected == "email"
                              ? formValidate?.error
                              : ""
                          }
                          error={
                            errors?.selected == "email" && formValidate?.error
                          }
                          autoFocus
                        />

                        <TextField
                          variant="outlined"
                          id="outlined-number"
                          label="Title"
                          name="topic"
                          type="text"
                          style={{ marginTop: 20 }}
                          onChange={handleChange}
                          helperText={
                            errors?.selected == "topic"
                              ? formValidate?.error
                              : ""
                          }
                          error={
                            errors?.selected == "topic" && formValidate?.error
                          }
                          autoFocus
                        />

                        <TextField
                          variant="outlined"
                          id="outlined-number"
                          label="Message"
                          name="message"
                          type="text"
                          style={{ marginTop: 20 }}
                          onChange={handleChange}
                          helperText={
                            errors?.selected == "message"
                              ? formValidate?.error
                              : ""
                          }
                          error={
                            errors?.selected == "message" && formValidate?.error
                          }
                          autoFocus
                        />

                        <Grid
                          xs={9}
                          direction={"row"}
                          style={{ marginTop: 20 }}
                        >
                          <Button
                            style={{
                              backgroundColor: "black",
                              width: "80px",
                              marginRight: 20,
                            }}
                            onClick={handleSubmit}
                            disabled={!formValidate.isSubmitting}
                          >
                            {" "}
                            <Typography style={{ color: "white" }}>
                              Submit{" "}
                            </Typography>
                          </Button>
                          <Button
                            style={{ backgroundColor: "black", width: "90px" }}
                            onClick={() => {
                              handleClose2();
                            }}
                          >
                            {" "}
                            <Typography style={{ color: "white" }}>
                              Cancel{" "}
                            </Typography>
                          </Button>
                        </Grid>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Modal>
              </Grid>

              <Grid item xs={12}>
                <img
                  alt="logo"
                  className={classes.logo}
                  src={IMAGES_URL.LOGO_WHITE}
                />
                <IconButton
                  onClick={() => {
                    handleDrawerOpen();
                  }}
                  style={{
                    backgroundColor: "white",
                    marginTop: "-45px",
                    marginLeft: "10px",
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <Grid item xs={12}>
          <Drawer
            {...{
              anchor: "left",
              open: state.drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <Grid
              container
              style={{ backgroundColor: "black", width: "220px" }}
              direction="column"
            >
              {/* userData.loginAsCustomer */}
              {false ? (
                <>
                  <Link
                    className={classes.drawerlink}
                    onClick={() => {
                      history.push("/dashboard");
                    }}
                    variant="body2"
                  >
                    {"DASHBOARD"}{" "}
                  </Link>
                  <Link
                    className={classes.drawerlink}
                    onClick={() => {
                      history.push("/news", true);
                    }}
                    variant="body2"
                  >
                    {"NEWS"}
                  </Link>
                  <Link
                    className={classes.drawerlink}
                    onClick={() => {
                      history.push("/training");
                    }}
                    variant="body2"
                  >
                    {"TRAINING"}
                  </Link>
                  <Link
                    className={classes.drawerlink}
                    onClick={() => {
                      history.push("/social");
                    }}
                    variant="body2"
                  >
                    {"SOCIAL"}
                  </Link>
                  <Link
                    className={classes.drawerlink}
                    onClick={() => {
                      history.push("/rewards");
                    }}
                    variant="body2"
                  >
                    {"REWARDS"}
                  </Link>
                  <Link
                    className={classes.drawerlink}
                    variant="body2"
                    onClick={handleClick1}
                  >
                    {" "}
                    <img
                      src={"https://linq.hydrafacial.com/images/" + data?.image}
                      style={{ width: "40px" }}
                    />
                    <ExpandMoreIcon />
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className={classes.drawerlink}
                    onClick={() => {
                      history.push("/providerDashboard");
                    }}
                    variant="body2"
                  >
                    {"DASHBOARD"}
                  </Link>
                  <Link
                    className={classes.drawerlink}
                    onClick={() => {
                      history.push("/currentStatus");
                    }}
                    variant="body2"
                  >
                    {"CURRENT STATUS"}
                  </Link>
                  <Link
                    className={classes.drawerlink}
                    onClick={() => {
                      history.push("/partners");
                    }}
                    variant="body2"
                  >
                    {"PARTNERS"}
                  </Link>
                  <Link
                    className={classes.drawerlink}
                    onClick={() => {
                      history.push("/providerRewards");
                    }}
                    variant="body2"
                  >
                    {"REWARD"}
                  </Link>
                  <Link
                    className={classes.drawerlink}
                    onClick={() => {
                      history.push("/feeds");
                    }}
                    variant="body2"
                  >
                    {"FEEDS"}
                  </Link>
                  <Link
                    className={classes.drawerlink}
                    variant="body2"
                    onClick={handleClick1}
                  >
                    {" "}
                    <img
                      src={"https://linq.hydrafacial.com/images/" + data?.image}
                      style={{ width: "50px" }}
                    />
                    <ExpandMoreIcon />
                  </Link>
                </>
              )}

              <Menu
                id="simple-menu1"
                anchorEl={profile}
                keepMounted
                open={Boolean(profile)}
                onClose={handleClose1}
                style={{ width: "50%" }}
              >
                <Grid
                  container
                  xs={12}
                  direction={"row"}
                  alignItems={"flex-start"}
                >
                  <Grid xs={3}>
                    <img
                      src={"https://linq.hydrafacial.com/images/" + data?.image}
                      style={{ width: "70%", height: "70%", marginTop: 10 }}
                    />
                  </Grid>

                  <Grid xs={9}>
                    <Typography>{data?.first_name}</Typography>
                    <Grid>
                      <Typography> {data?.email}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <MenuItem onClick={handleClose}>
                  <Link
                    onClick={() => {
                      history.push("/profile");
                    }}
                    variant="body2"
                    className={classes.link1}
                  >
                    <AccountCircleIcon />
                    MY ACCOUNT
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ExitToAppIcon />
                  LOGOUT
                </MenuItem>
              </Menu>
            </Grid>
          </Drawer>
        </Grid>
      </>
    );
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick1 = (event) => {
    setProfile(event.currentTarget);
  };

  const handleClose1 = (event) => {
    setProfile(null);
  };

  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event?.target.name]: event?.target.value,
    });
    setErrors({ ...errors, selected: event?.target.name });
  };

  const handleSubmit = () => {
    dispatch(ProviderAction.support(values));
    console.log("support  form data data data data", values);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose2 = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem("data");
    localStorage.removeItem("token");
    dispatch(loginUser({ loginAsCustomer: null }));
    history.push("/");
  };
  Storage.prototype.getObject = async function (key) {
    return await this.getItem(key);
  };

  const [data, setdata] = React.useState({
    email: "",
    first_name: "",
    mobile_no: "",
    image: "",
  });

  React.useEffect(() => {
    localStorage.getObject("user").then((data) => {
      setdata(JSON.parse(data));
    });
  }, [userData]);

  React.useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    const validationErrors = HelpModalValidation(values);
    let noErrors = Object.keys(validationErrors).length == 0;
    let currentError = validationErrors[errors.selected];
    setSubmitting({ isSubmitting: noErrors, error: currentError });
  }, [errors]);

  return (
    <>
      {state.mobileView ? (
        displayMobile()
      ) : (
        <div id="header">
          <div id="container">
            {console.log("__________________________", location.pathname)}
            <Grid
              xs={12}
              direction={"row"}
              container
              justify={"center"}
              alignItems={"center"}
              className={classes.header2}
            >
              <Grid item xs={2}>
                <IconButton
                  style={{ color: "#fff", padding: "6px" }}
                  onClick={() => {
                    window.open("https://www.facebook.com/hydrafacial/");
                  }}
                >
                  <FacebookIcon />
                </IconButton>

                <IconButton
                  style={{ color: "#fff", padding: "6px" }}
                  onClick={() => {
                    window.open("https://www.instagram.com/hydrafacial/");
                  }}
                >
                  <InstagramIcon />
                </IconButton>
              </Grid>

              <Grid item xs={8} style={{ textAlign: "center" }}>
                <img
                  alt="logo"
                  className={classes.logo}
                  src={IMAGES_URL.LOGO_WHITE}
                />
              </Grid>

              <Grid item xs={2} style={{ padding: "0px 0px 0px 8%" }}>
                <Typography
                  onClick={handleOpen}
                  style={{
                    float: "right",
                    cursor: "pointer",
                    color: "white",
                    fontSize: "15px",
                    padding: "7px 0px 0px 3px",
                  }}
                >
                  HELP
                </Typography>
                <IconButton
                  onClick={handleOpen}
                  style={{ color: "#fff", float: "right", padding: "8px" }}
                >
                  <PersonIcon />
                </IconButton>
              </Grid>

              <Grid xs item>
                <Modal
                  open={open}
                  onClose={handleClose2}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  style={{
                    width: "160%",
                    margin: "60px 0px 0px 28%",
                    outline: "2",
                  }}
                >
                  <Grid xs={3} container>
                    <Grid
                      container
                      xs
                      style={{ height: "60px", backgroundColor: "#8ec6d7" }}
                      direction="row"
                    >
                      <Typography variant="h4" className={classes.modelTitle}>
                        SUPPORT
                      </Typography>

                      <IconButton
                        onClick={() => {
                          handleClose2();
                        }}
                        style={{
                          float: "right",
                          position: "absolute",
                          top: "6px",
                          right: "75.5%",
                          color: "#fff",
                        }}
                      >
                        <CloseIcon />
                      </IconButton>
                    </Grid>
                    <Grid
                      container
                      xs={12}
                      direction="row"
                      style={{ backgroundColor: "white " }}
                    >
                      <FormControl
                        style={{ width: "94%", margin: "5px auto 25px auto" }}
                      >
                        <TextField
                          variant="outlined"
                          id="outlined-number"
                          label="Name"
                          name="name"
                          type="text"
                          style={{ marginTop: 20 }}
                          onChange={handleChange}
                          helperText={
                            errors?.selected == "name"
                              ? formValidate?.error
                              : ""
                          }
                          error={
                            errors?.selected == "name" && formValidate?.error
                          }
                          autoFocus
                        />

                        <TextField
                          variant="outlined"
                          id="outlined-number"
                          label="Email"
                          name="email"
                          type="text"
                          style={{ marginTop: 20 }}
                          onChange={handleChange}
                          helperText={
                            errors?.selected == "email"
                              ? formValidate?.error
                              : ""
                          }
                          error={
                            errors?.selected == "email" && formValidate?.error
                          }
                          autoFocus
                        />

                        <TextField
                          variant="outlined"
                          id="outlined-number"
                          label="Title"
                          name="topic"
                          type="text"
                          style={{ marginTop: 20 }}
                          onChange={handleChange}
                          helperText={
                            errors?.selected == "topic"
                              ? formValidate?.error
                              : ""
                          }
                          error={
                            errors?.selected == "topic" && formValidate?.error
                          }
                          autoFocus
                        />

                        <TextField
                          variant="outlined"
                          id="outlined-number"
                          label="Message"
                          name="message"
                          type="text"
                          style={{ marginTop: 20 }}
                          onChange={handleChange}
                          helperText={
                            errors?.selected == "message"
                              ? formValidate?.error
                              : ""
                          }
                          error={
                            errors?.selected == "message" && formValidate?.error
                          }
                          autoFocus
                        />

                        <Grid
                          xs={9}
                          direction={"row"}
                          style={{ marginTop: 20 }}
                        >
                          <Button
                            style={{
                              backgroundColor: "black",
                              width: "80px",
                              marginRight: 20,
                            }}
                            onClick={handleSubmit}
                            disabled={!formValidate.isSubmitting}
                          >
                            {" "}
                            <Typography style={{ color: "white" }}>
                              Submit{" "}
                            </Typography>
                          </Button>
                          <Button
                            style={{ backgroundColor: "black", width: "90px" }}
                            onClick={() => {
                              handleClose2();
                            }}
                          >
                            {" "}
                            <Typography style={{ color: "white" }}>
                              Cancel{" "}
                            </Typography>
                          </Button>
                        </Grid>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Modal>
              </Grid>
            </Grid>
            {/* userData.loginAsCustomer */}
            {false ? (
              <Grid
                xs={12}
                container
                className={classes.header}
                direction="row"
                justify="center"
              >
                <Link
                  className={classes.link}
                  onClick={() => {
                    history.push("/dashboard");
                  }}
                  variant="body2"
                >
                  {"DASHBOARD"}
                </Link>
                <Link
                  className={classes.link}
                  onClick={() => {
                    history.push("/news");
                    props.handleNews();
                  }}
                  variant="body2"
                >
                  {"NEWS"}
                </Link>
                <Link
                  className={classes.link}
                  onClick={() => {
                    history.push("/training");
                  }}
                  variant="body2"
                >
                  {"TRAINING"}
                </Link>
                <Link
                  className={classes.link}
                  onClick={() => {
                    history.push("/social");
                  }}
                  variant="body2"
                >
                  {"SOCIAL"}
                </Link>
                <Link
                  className={classes.link}
                  onClick={() => {
                    history.push("/rewards");
                  }}
                  variant="body2"
                >
                  {"REWARDS"}
                </Link>
                <Link
                  className={classes.link}
                  variant="body2"
                  onClick={handleClick1}
                >
                  {" "}
                  <img
                    src={"https://linq.hydrafacial.com/images/" + images}
                    style={{ width: "50px" }}
                  />
                  <ExpandMoreIcon />
                </Link>
                <Menu
                  id="simple-menu1"
                  anchorEl={profile}
                  keepMounted
                  open={Boolean(profile)}
                  onClose={handleClose1}
                  style={{ width: "75%" }}
                >
                  <Grid
                    container
                    xs={12}
                    direction={"row"}
                    alignItems={"flex-start"}
                  >
                    <Grid xs={3}>
                      <img
                        src={
                          "https://linq.hydrafacial.com/images/" + data?.image
                        }
                        style={{ width: "70%", height: "70%", marginTop: 10 }}
                      />
                    </Grid>
                    <Grid xs={9}>
                      <Typography>{data?.first_name}</Typography>
                      <Grid>
                        <Typography> {data?.email}</Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <MenuItem onClick={handleClose}>
                    <Link
                      onClick={() => {
                        history.push("/profile");
                      }}
                      variant="body2"
                      className={classes.link1}
                    >
                      <AccountCircleIcon />
                      MY ACCOUNT
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ExitToAppIcon />
                    LOGOUT
                  </MenuItem>
                </Menu>
              </Grid>
            ) : (
              <Grid
                xs={12}
                container
                className={classes.header}
                direction="row"
                justify="center"
              >
                <Link
                  className={classes.link}
                  onClick={() => {
                    history.push("/providerDashboard");
                  }}
                  style={{
                    color: location.pathname.includes("providerDashboard")
                      ? "#fff"
                      : "#aaa",
                    borderBottom: location.pathname.includes(
                      "providerDashboard"
                    )
                      ? "4px solid #43aac5"
                      : "none",
                  }}
                  variant="body2"
                >
                  {"DASHBOARD"}
                </Link>
                <Link
                  className={classes.link}
                  onClick={() => {
                    history.push("/currentStatus");
                  }}
                  style={{
                    color: location.pathname.includes("currentStatus")
                      ? "#fff"
                      : "#aaa",
                    borderBottom: location.pathname.includes("currentStatus")
                      ? "4px solid #43aac5"
                      : "none",
                  }}
                  variant="body2"
                >
                  {"CURRENT STATUS"}
                </Link>
                <Link
                  className={classes.link}
                  onClick={() => {
                    history.push("/partners");
                  }}
                  style={{
                    color: location.pathname.includes("partners")
                      ? "#fff"
                      : "#aaa",
                    borderBottom: location.pathname.includes("partners")
                      ? "4px solid #43aac5"
                      : "none",
                  }}
                  variant="body2"
                >
                  {"PARTNERS"}
                </Link>
                <Link
                  className={classes.link}
                  onClick={() => {
                    history.push("/providerRewards");
                  }}
                  style={{
                    color: location.pathname.includes("providerRewards")
                      ? "#fff"
                      : "#aaa",
                    borderBottom: location.pathname.includes("providerRewards")
                      ? "4px solid #43aac5"
                      : "none",
                  }}
                  variant="body2"
                >
                  {"REWARD"}
                </Link>
                <Link
                  className={classes.link}
                  onClick={() => {
                    history.push("/feeds");
                  }}
                  style={{
                    color: location.pathname.includes("feeds")
                      ? "#fff"
                      : "#aaa",
                    borderBottom: location.pathname.includes("feeds")
                      ? "4px solid #43aac5"
                      : "none",
                  }}
                  variant="body2"
                >
                  {"FEEDS"}
                </Link>
                <Link
                  style={{
                    color: "/providerTraining /news".includes(
                      String(location.pathname)
                    )
                      ? "#fff"
                      : "#aaa",
                    borderBottom: location.pathname.includes(
                      "providerTraining /news"
                    )
                      ? "4px solid #43aac5"
                      : "none",
                  }}
                  onMouseOver={handleClick}
                  onClick={handleClick}
                >
                  <Grid container direction="row">
                    <Link
                      className={classes.link}
                      variant="body2"
                      style={{
                        color: "/providerTraining /news".includes(
                          String(location.pathname)
                        )
                          ? "#fff"
                          : "#aaa",
                        borderBottom: location.pathname.includes(
                          "providerTraining /news"
                        )
                          ? "4px solid #43aac5"
                          : "none",
                        padding: "0px 4px 5px 15px",
                      }}
                    >
                      {"MORE MENU"}
                    </Link>
                    <ExpandMoreIcon style={{ marginRight: 30 }} />
                  </Grid>
                </Link>
                <Link
                  className={classes.link}
                  variant="body2"
                  style={{
                    color: "/profile".includes(String(location.pathname))
                      ? "#fff"
                      : "#aaa",
                    borderBottom: location.pathname.includes("profile")
                      ? "4px solid #43aac5"
                      : "none",
                  }}
                  onMouseOver={handleClick1}
                  onClick={handleClick1}
                >
                  {" "}
                  <img src={IMAGES_URL.HYDRA} style={{ width: "50px" }} />
                  <ExpandMoreIcon />
                </Link>
                {/* MENU1 */}
                <Menu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  // keepMounted
                  style={{ marginTop: 100 }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <Grid onMouseLeave={handleClose}>
                    <MenuItem id="menulink">
                      <Link
                        href="/providerTraining"
                        variant="body2"
                        className={classes.link1}
                      >
                        TRAINING AND EDUCATION
                      </Link>
                    </MenuItem>
                    <MenuItem id="menulink">
                      <Link
                        href="https://www.hydrafacial.store/"
                        target="_blank"
                        variant="body2"
                        className={classes.link1}
                      >
                        PURCHASE CONSUMABLES
                      </Link>
                    </MenuItem>
                    <MenuItem id="menulink">
                      <Link
                        href="/news"
                        variant="body2"
                        className={classes.link1}
                      >
                        HOT OFF THE PRESS !!
                      </Link>
                    </MenuItem>
                    <MenuItem id="menulink">
                      <Link
                        href="mailto:loyalty@hydrafacial.com"
                        variant="body2"
                        className={classes.link1}
                      >
                        {"CONTACT US"}
                      </Link>
                    </MenuItem>
                    <MenuItem id="menulink">
                      <Link
                        href="https://hydrafacial.com/privacy-policy/"
                        target="_blank"
                        variant="body2"
                        className={classes.link1}
                      >
                        PRIVACY POLICY
                      </Link>
                    </MenuItem>
                  </Grid>
                </Menu>

                {/* MENU2*/}

                <Menu
                  id="simple-menu1"
                  anchorEl={profile}
                  keepMounted
                  open={Boolean(profile)}
                  onClose={handleClose1}
                  style={{ width: "45%", marginTop: 70 }}
                >
                  <Grid onMouseLeave={handleClose1}>
                    <Grid
                      container
                      xs={12}
                      direction={"row"}
                      alignItems={"flex-start"}
                    >
                      <Grid xs={2}>
                        <img
                          src={IMAGES_URL.HYDRA}
                          style={{
                            width: "20px",
                            marginLeft: "10px",
                            height: "20px",
                            border: "1px solid #eee",
                            borderRadius: "50%",
                            marginTop: 10,
                          }}
                        />
                      </Grid>

                      <Grid xs={10}>
                        <Typography
                          style={{ marginLeft: "6px", marginTop: "8px" }}
                        >
                          {data.first_name}
                        </Typography>
                        <Grid>
                          {/* <Typography> {"loyaltyrewards@hydrafacial.com"}</Typography> */}
                        </Grid>
                      </Grid>
                    </Grid>
                    <MenuItem onClick={handleClose} id="menulink">
                      <Link
                        onClick={() => {
                          history.push("/profile");
                        }}
                        variant="body2"
                        className={classes.link1}
                      >
                        <AccountCircleIcon /> <span>MY ACCOUNT</span>
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={handleLogOut} id="menulink">
                      <Link variant="body2" className={classes.link1}>
                        <ExitToAppIcon /> <span>LOGOUT</span>
                      </Link>
                    </MenuItem>
                  </Grid>
                </Menu>
              </Grid>
            )}
          </div>
          <div id="clear"></div>
        </div>
      )}
    </>
  );
};

export default Header;
