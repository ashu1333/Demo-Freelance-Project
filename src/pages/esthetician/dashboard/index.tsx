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
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

interface DashboardProps {
  name: string;
  dashboard: any;
}
interface monthList {
  [key: string]: any;
}
const data = [
  { name: "Group A", value: 70 },
  { name: "Group B", value: 30 },
];
const COLORS = ["#8884d8", "gray"];

const Dashboard: React.SFC<DashboardProps> = ({ name }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [progress, setProgress] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const [monthList, setmonthList] = React.useState<monthList>([]);
  const [open, setopen] = React.useState(false);
  const [event, setevent] = React.useState(false);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    dispatch(DashboardAction.dashboard());
    let currentMonth = new Date().getMonth();
    let preMonths = months.slice(0, currentMonth);
    let nextMonths = months.slice(currentMonth, months.length);
    nextMonths = nextMonths.concat(preMonths);
    setmonthList(nextMonths);
  }, []);

  const eventList = useSelector((state: DashboardProps) =>
    state.dashboard.eventList ? state.dashboard.eventList : []
  );

  const getTabItem = () => {
    return monthList.map((e: string) => {
      return (
        <Tab
          label={e}
          onClick={() => {
            handleEvent(e);
          }}
        />
      );
    });
  };

  const handleEvent = (month) => {
    setevent(!event);
  };

  const handleOpen = () => {
    setopen(true);
  };

  const handleClose = () => {
    setopen(false);
  };

  const getListItem = () => {
    let filterArray = eventList.filter((e: any) => {
      return months[new Date(e.start_date).getMonth()] == monthList[value];
    });

    if (filterArray[0]) {
      return eventList.map((e: any) => {
        let startDateMonth = new Date(e.start_date).getMonth();
        let startDateDay = new Date(e.start_date).getDate();
        return (
          <Grid
            xs={12}
            container
            direction="row"
            style={{ backgroundColor: "#fff", marginTop: 20, borderRadius: 10 }}
          >
            <Box
              bgcolor="#f2c3e4"
              color="#222"
              p={4}
              style={{
                textAlign: "left",
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            >
              {months[startDateMonth] + " " + startDateDay}
            </Box>
            <Grid
              xs={6}
              justify="space-around"
              container
              direction="column"
              alignItems="flex-start"
              style={{ marginLeft: 20 }}
            >
              <Typography
                style={{
                  fontSize: "15px",
                  padding: "0px 10px",
                  marginTop: "0px",
                  lineHeight: "0px",
                }}
              >
                {e.title}
              </Typography>
              <Typography
                style={{
                  fontSize: "15px",
                  padding: "0px 10px",
                  marginTop: "0px",
                  lineHeight: "0px",
                }}
              >
                {e.book_text}
              </Typography>
            </Grid>
            <Typography style={{ alignSelf: "center" }}>Join Now</Typography>
          </Grid>
        );
      });
    } else {
      return (
        <Typography style={{ alignSelf: "center" }}>No data found</Typography>
      );
    }
  };

  return (
    <div className={classes.root}>
      <Header />
      <Grid direction={"row"} container>
        <Grid xs={6} className={classes.midLSection}>
          <Grid xs={6} container justify="center">
            <img
              alt="logo"
              src={IMAGES_URL.NOT_IMG}
              style={{
                borderRadius: 100,
                backgroundColor: "gray",
                height: 100,
                width: 100,
              }}
            />
          </Grid>
          <p className={classes.DashboardText}>
            {
              "Current Status Badge icon will display here. Day 1 everyone will start with the hydrafacial icon"
            }
          </p>
        </Grid>

        <Grid
          xs={6}
          className={classes.midLSection}
          container
          justify="center"
          alignItems="center"
        >
          <Grid
            xs={8}
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ backgroundColor: "#fff", padding: "3%" }}
          >
            <div style={{ height: 60, width: 60, float: "left" }}>
              <img
                alt="logo"
                src={IMAGES_URL.NOT_IMG}
                style={{
                  borderRadius: 50,
                  backgroundColor: "gray",
                  height: 55,
                  width: 55,
                  float: "left",
                  border: "1px solid #000",
                }}
              />
            </div>
            <div
              style={{
                height: 60,
                width: 320,
                float: "left",
                marginLeft: "15px",
              }}
            >
              <Typography className={classes.dashboardHeading1}>
                {"AESTHETICIAN LOYALTY"}
              </Typography>
            </div>
            <Grid xs={12} container direction="row">
              <Grid
                xs={12}
                justify="flex-start"
                alignItems="center"
                container
                style={{
                  backgroundColor: "#fff",
                  boxShadow: "box-shadow: 0 0 20px rgba(0,0,0,0.08)",
                }}
              >
                <div style={{ height: 60, width: 20, float: "left" }}>
                  <img
                    alt="location"
                    src={IMAGES_URL.LOCATION_IMG}
                    style={{ height: 21, width: 15 }}
                  />
                </div>
                <p className={classes.DashboardAddressText}>
                  {"1211 Light Street Baltimore, MD 2 years with HF"}
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid direction={"row"} container>
          <Grid xs={6} className={classes.midRSection1}>
            <Grid className={classes.midRSection1Div}>
              <Typography className={classes.midSectionHeading}>
                {"WELCOME TO HYDRAFACIAL LOVE!"}
              </Typography>
              <p className={classes.midSectionText}>
                {
                  "You now have access to everything needed to achieve success as a HydraFacialist! This is your headquarters for all things Training, Events, Social, Marketing, and MUCH more! This is bigger than rewards, this is your chance to take part in the new era of Aesthetics!"
                }
              </p>
            </Grid>
          </Grid>
          <Grid xs={5} container>
            <Grid xs={12} justify="flex-end" alignItems="flex-end" container>
              <Typography className={classes.midRSectionText1}>
                Congratulations HydraFacialist! You are just getting started so
                let's start glowing and achieve a new status- Glow Dreamer
              </Typography>
            </Grid>
            <Grid
              container
              direction={"row"}
              xs={12}
              className={classes.midRGlowIconDiv}
            >
              <Grid
                xs={3}
                direction="column"
                container
                justify="center"
                alignItems="center"
              >
                <Typography className={classes.midRSectionGlowTitle}>
                  Glow Dreamer
                </Typography>
                <img alt="logo" src={IMAGES_URL.GLOW_ICON1} />
              </Grid>
              <Grid
                xs={3}
                direction="column"
                container
                justify="center"
                alignItems="center"
              >
                <Typography className={classes.midRSectionGlowTitle}>
                  Glow Getter
                </Typography>
                <img alt="logo" src={IMAGES_URL.GLOW_ICON2} />
              </Grid>
              <Grid
                xs={3}
                direction="column"
                container
                justify="center"
                alignItems="center"
              >
                <Typography className={classes.midRSectionGlowTitle}>
                  Glow Guru
                </Typography>
                <img alt="logo" src={IMAGES_URL.GLOW_ICON3} />
              </Grid>
              <Grid
                xs={3}
                direction="column"
                container
                justify="center"
                alignItems="center"
              >
                <Typography className={classes.midRSectionGlowTitle}>
                  Glow Master
                </Typography>
                <img alt="logo" src={IMAGES_URL.GLOW_ICON4} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          direction={"row"}
          container
          className={classes.midBSection}
          justify="center"
          style={{ backgroundColor: "#b7deed" }}
        >
          <Grid xs={3} style={{ backgroundColor: "#fff", borderRadius: 20 }}>
            <Typography className={classes.midSectionBoxHeading1}>
              {"EDUCATION FOR THE NATION"}
            </Typography>
            <p className={classes.midSectionBoxText}>
              {
                "Will link page that contains HF Connect, Marketing Material, and Training Events"
              }
            </p>
          </Grid>

          <Grid
            xs={3}
            style={{
              backgroundColor: "#fff",
              marginRight: 30,
              marginLeft: 30,
              borderRadius: 20,
            }}
          >
            <Typography className={classes.midSectionBoxHeading2}>
              {"LET'S GET SOCIAL"}
            </Typography>
            <p className={classes.midSectionBoxText}>
              {
                "Will link to page that shows influencer of the week, social media class, hashtags, and social ads"
              }
            </p>
          </Grid>
          <Grid xs={3} style={{ backgroundColor: "#fff", borderRadius: 20 }}>
            <Typography className={classes.midSectionBoxHeading3}>
              {"HYDRAFACIALISTS"}
            </Typography>
            <p className={classes.midSectionBoxText}>
              {
                "Day 1 this will link to a Welcome page for Communities with the link to HF Facebook page"
              }
            </p>
          </Grid>
        </Grid>
        <Grid xs={12} direction={"row"} className={classes.midBSection1}>
          <Typography className={classes.midSectionHeading1}>
            ABOVE THE FOLD
          </Typography>
        </Grid>
        <Grid
          xs={12}
          style={{ backgroundColor: "#000", paddingTop: 20, paddingBottom: 20 }}
        >
          <Typography
            className={classes.midSectionHeading2}
            style={{ color: "#fff" }}
          >
            {"NEWEST PRODUCT LAUNCH"}
          </Typography>
          <p className={classes.midSectionText1} style={{ color: "#fff" }}>
            {
              "*Should link out to a landing page taht is interchangeable. Contect on it can be updated at any time for updates on our products."
            }
          </p>
        </Grid>

        <Grid xs={12} container direction="row">
          <Grid xs={6} className={classes.midRSection1}>
            <Typography className={classes.midSectionHeadingBox}>
              NassifMD® Hydraglucan™ Intense Hydration Booster
            </Typography>
            <img
              alt=""
              style={{ margin: "0px auto", minWidth: "250px", width: "250px" }}
              src={IMAGES_URL.DOC_IMG}
            />
            <Grid xs={12} container alignItems="center" justify="center">
              <Grid xs={7} alignItems="flex-start">
                <Typography
                  style={{
                    color: "#43aac5",
                    fontSize: "15px",
                    padding: "10px",
                  }}
                >
                  Valid Until 12/31/19
                </Typography>
                <Typography>
                  We’re excited to announce the exclusive hydrating treatment
                  NassifMD® Hydraglucan™ Intense Hydration Booster .
                </Typography>
                <Button
                  variant="contained"
                  className={classes.buttonWhiteLargeN}
                  style={{ marginTop: 20 }}
                >
                  Take Advantage Today
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            xs={6}
            className={classes.midLSection1}
            container
            justify="center"
          >
            <Grid xs={10}>
              <Typography className={classes.midSectionHeadingBox}>
                EVENTS / TRAINING
              </Typography>
              <Grid xs={10} container justify={"center"} alignItems={"center"}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  {getTabItem()}
                </Tabs>
              </Grid>

              {/* <List style={{ height:"100%",width:"90%", overflow: 'scroll' }}   >
                {getListItem()}
              </List>
  */}

              {!event ? (
                <Grid
                  xs={10}
                  container
                  justify={"center"}
                  direction="row"
                  style={{ height: 300 }}
                >
                  <Grid item xs>
                    <img
                      src={IMAGES_URL.EVENT}
                      width="50%"
                      style={{ marginTop: "15px" }}
                    />

                    <Typography
                      variant="h6"
                      style={{
                        color: "#29a1c5",
                        fontSize: "20px",
                        textAlign: "center",
                      }}
                    >
                      {" "}
                      NO DATA FOUND{" "}
                    </Typography>
                  </Grid>
                </Grid>
              ) : (
                <></>
              )}

              {event ? (
                <Paper
                  variant="elevation"
                  square
                  elevation={10}
                  style={{ marginTop: "15px" }}
                >
                  <Grid
                    container
                    xs={12}
                    direction="row"
                    style={{ borderRadius: 10 }}
                  >
                    <Grid item xs={2} className={classes.dateD}>
                      <Typography variant="h5" className={classes.dateDtitle}>
                        DEC 27
                      </Typography>
                    </Grid>

                    <Grid
                      item
                      xs={6}
                      style={{ backgroundColor: "white", paddingTop: "20px" }}
                    >
                      <Typography variant="h6" className={classes.midDateText}>
                        DEC 27 - 27
                      </Typography>
                      <Typography variant="h6" className={classes.midDateText}>
                        REFRESH - LONG BEACH
                      </Typography>
                    </Grid>

                    <Grid
                      item
                      xs={4}
                      style={{
                        backgroundColor: "white",
                        textAlign: "center",
                        marginTop: 32,
                      }}
                    >
                      <Link
                        style={{ color: "#fff", cursor: "pointer" }}
                        className={classes.midDatelink}
                        onClick={() => {
                          handleOpen();
                          window.open("https://hydrafacial.com/refresh/");
                        }}
                      >
                        Join Now
                      </Link>
                    </Grid>
                  </Grid>
                </Paper>
              ) : (
                <> </>
              )}

              {open ? (
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  style={{
                    width: "160%",
                    margin: "40px 0px 0px 400px",
                    outline: "0",
                  }}
                >
                  <Grid xs={3}>
                    <Grid
                      container
                      xs={12}
                      style={{ height: "60px", backgroundColor: "#8ec6d7" }}
                      direction="row"
                    >
                      <Grid item xs={10}>
                        <Typography variant="h6" className={classes.modelTitle}>
                          EVENT DETAIL
                        </Typography>
                      </Grid>

                      <Grid item xs={1}>
                        <IconButton
                          onClick={() => {
                            handleClose();
                          }}
                        >
                          <CloseIcon />
                        </IconButton>
                      </Grid>
                    </Grid>

                    <Grid item xs style={{ backgroundColor: "white" }}>
                      <Typography variant="h4" className={classes.modelTitleT1}>
                        REFRESH
                      </Typography>
                      <Typography variant="h5" className={classes.modelTitleT2}>
                        REFRESH LONG BEACH
                      </Typography>
                      <Typography variant="h6" className={classes.modelText}>
                        Refresh is our 1-day workshop for existing accounts
                        designed to refresh your knowledge post-pandemic. We'll
                        cover social media marketing, your treatments, and your
                        business! Take your business to the next level with tips
                        on treatment personalization, social media strategies,
                        and hands-on treatments, including HydraFacial Keravive!
                      </Typography>
                    </Grid>
                  </Grid>
                </Modal>
              ) : (
                <> </>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Dashboard;
