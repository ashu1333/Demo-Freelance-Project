import * as React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { IMAGES_URL } from '../../../constants/Images';
import useStyles from './style';
import Header from '../../common/header';
import Footer from '../../common/footer';
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { DashboardAction } from '../../../redux/common/actions';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { months } from '../../../constants/static';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import CloseIcon from '@material-ui/icons/Close';
interface DashboardProps {
  name: string,
  dashboard: any
};
interface monthList {
  [key: string]: any
}
const data = [
  { name: 'Group A', value: 70 },
  { name: 'Group B', value: 30 }
];
const COLORS = ['#8884d8', 'gray'];

const Dashboard: React.SFC<DashboardProps> = ({ name }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  const [monthList, setmonthList] = React.useState<monthList>([]);
  const [eventWithFilter, seteventWithFilter] = React.useState<any>([]);

  const [open, setopen] = React.useState(false);
  const [open1, setopen1] = React.useState(false);
  const [flag, setFlag] = React.useState(1);
  const [event, setevent] = React.useState(false);
  const [bookEvent, setBookEvent] = React.useState({ title: "", description: "" });

  const setTab = (val) => {
    setFlag(val);
  }
  const handleChange = (event: any, newValue: any) => { setValue(newValue); };
  React.useEffect(() => {
    dispatch(DashboardAction.dashboard());
    dispatch(DashboardAction.dashboard_welcome_msg());
    let currentMonth = new Date().getMonth();
    let preMonths = months.slice(0, currentMonth);
    let nextMonths = months.slice(currentMonth, months.length);
    nextMonths = nextMonths.concat(preMonths)
    setmonthList(nextMonths);
  }, []);

  const eventList = useSelector((state: DashboardProps) => state.dashboard.eventList ? state.dashboard.eventList : []);
  const dashboardWelcome_msg = useSelector((state: DashboardProps) => state.dashboard.dashboardWelcome_msg ? state.dashboard.dashboardWelcome_msg : []);

  const getTabItem = () => {
    return (
      monthList.map((e: string, index: number) => {
        return <Tab style={{ width: 30, minWidth: 60 }} label={e} onClick={() => { handleEvent(e, index) }} />
      })
    );
  }

  const handleEvent = (month, month_index) => {
    let selectedMonthIndex = months.indexOf(month);
    let filterArray = eventList.filter((e: any) => new Date(e.startDate).getMonth() == selectedMonthIndex);
    seteventWithFilter(filterArray);
    setevent(!event);
  }
  const handleModal = () => {
    setopen(true);
  }

  const handleClose = () => {
    setopen(false);
  }

  const handleSubmit = () => { }

  const handleOpen1 = (bookEvent) => {
    setopen1(true)
    setBookEvent(bookEvent)
  }

  const handleClose1 = () => {
    setopen1(false);
    setBookEvent({ title: "", description: "" })

  }

  return (
    <div className={classes.root}>
      <Header />

      <div id="welcome_section">
        <div id="container">

          <Grid xs={6} className={classes.midLSection}>
            <p className={classes.PrDashboardtitle}>
              {dashboardWelcome_msg?.[0]?.title}
            </p>
            <div className={classes.PrDashboardtext}
              dangerouslySetInnerHTML={{ __html: dashboardWelcome_msg?.[0]?.content }}>
            </div>
          </Grid>

          <Grid xs={6} className={classes.midLSection}>
            <Grid xs={10} container direction="row" justify="flex-start" style={{ padding: '3%', textAlign: 'center' }}  >
              <Paper variant="elevation" square elevation={10}>
                <Grid xs={12} container direction="row"   >
                  <Grid xs={12} justify="flex-start" container style={{ boxShadow: 'box-shadow: 0 0 20px rgba(0,0,0,0.08)', }} >

                    <Grid xs={2}>
                      <img src={IMAGES_URL.HQ} id="userRuserimg" />
                    </Grid>

                    <Grid xs={9} justify="center" className={classes.userRdetails} id="userRdetails">
                      <Typography id="userRuser">
                        {"Meredith Jones"}
                      </Typography>
                      <Typography>
                        <Link className={classes.userRlink} id="userRlink" onClick={() => { handleModal(); }}>
                          Click here to receive your Loyalty ID</Link>
                      </Typography>

                      <Typography id="userRtext">
                        {"Congratulations! We’ve created a specific category for new customers, called Silver Ring. What does that mean? You are on your way up!"}
                      </Typography>
                    </Grid>
                    {open ?
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        style={{ width: '140%', margin: '20px 0px 0px 400px', outline: '0' }}
                      >
                        <Grid xs={3}>
                          <Grid container xs={12} style={{ height: "60px", backgroundColor: '#8ec6d7' }} direction="row">
                            <Typography variant="h6" className={classes.modelTitle}>
                              EVENT DETAIL
                               </Typography>

                            <IconButton onClick={() => { handleClose() }} style={{
                              float: 'right', position: 'absolute',
                              top: '6px', right: '75.5%', color: '#fff',
                            }}><CloseIcon /></IconButton>

                          </Grid>
                          <Grid container xs={12} direction="row" style={{ backgroundColor: 'white ' }}>
                            <FormControl style={{ width: '94%', margin: '5px auto 10px auto', }}>
                              <TextField
                                variant="outlined"
                                id="outlined-number"
                                label="Name"
                                name="name"
                                type="text"
                                style={{ marginTop: 20 }}
                              />

                              <TextField
                                variant="outlined"
                                id="outlined-number"
                                label="Email"
                                name="email"
                                type="text"
                                style={{ marginTop: 20 }}
                              />

                              <TextField
                                variant="outlined"
                                id="outlined-number"
                                label="Practice Name"
                                name="Practice Name"
                                type="Practice Name"
                                style={{ marginTop: 20, marginBottom: 20, }}


                              />
                              <FormControl >

                                <NativeSelect
                                  // value={state.age}
                                  // onChange={handleChange}
                                  name="category"
                                  // className={classes.selectEmpty}
                                  inputProps={{ 'aria-label': 'age' }}
                                  // onChange={(input)=>{handleSelect(input);}}
                                  required
                                  variant="outlined"

                                >

                                  <option value="">Select Category</option>
                                  <option value={"Aesthetion"}>Aesthetion</option>
                                  <option value={"Provider"}>Provider</option>
                                  <option value={"Staff"}>Staff</option>
                                </NativeSelect>

                              </FormControl>

                              <Grid xs={9} direction={"row"} style={{ marginTop: 20, marginBottom: '20px', }}>
                                <Button
                                  style={{ backgroundColor: 'black', width: "80px", marginRight: 20 }}
                                  onClick={handleSubmit}

                                > <Typography style={{ color: "white" }}>Submit </Typography></Button>
                                <Button
                                  style={{ backgroundColor: 'black', width: "90px" }}
                                  onClick={() => { handleClose() }}> <Typography style={{ color: "white" }}>Cancel </Typography></Button>
                              </Grid>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Modal>
                      : <> </>
                    }
                  </Grid>

                  <Grid xs={12} justify="space-around" container
                    style={{
                      boxShadow: 'box-shadow: 20px  20px 20px rgba(1,1,1,1)', backgroundColor: '#262d2f',
                      padding: '20px 0px',
                    }}>

                    <Grid direction={"column"} style={{ margin: '10px 0px 0px 0px' }} >
                      <img alt="" src={IMAGES_URL.RANKICO1} />
                      <Typography className={classes.Ranktitle} style={{ color: '#aa93c1' }}>BLACK DIAMOND</Typography>
                    </Grid>

                    <Grid direction={"column"} style={{ margin: '10px 0px 0px 0px' }}>
                      <img alt="" src={IMAGES_URL.RANKICO2} />
                      <Typography className={classes.Ranktitle} style={{ color: '#f3d9a6' }}>WHITE STAR</Typography>
                    </Grid>

                    <Grid direction={"column"} style={{ margin: '10px 0px 0px 0px' }}>
                      <img alt="" src={IMAGES_URL.RANKICO3} />
                      <Typography className={classes.Ranktitle} style={{ color: '	#ca94bb' }}>SILVER RING</Typography>
                    </Grid>

                    <Grid direction={"column"} style={{ margin: '10px 0px 0px 0px' }}>
                      <img alt="" src={IMAGES_URL.RANKICO4} />
                      <Typography className={classes.Ranktitle} style={{ color: '	#96c0d4' }}>BLUE CIRCLE</Typography>
                    </Grid>
                  </Grid>
                  <Grid xs={12} justify="flex-start" alignItems="center">
                    <Typography variant="h6" id="RankRead" >
                      <Link
                        onClick={() => { history.push("/currentStatus") }}
                      >Learn More About Each Tier Level & Your Potential Rewards</Link>
                    </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
          </Grid>

        </div>

        <div id="img_one">
          <img alt="" src={IMAGES_URL.DASHBG1_BACKGROUND} />
        </div>
        <div id="img_two">
          <img alt="" src={IMAGES_URL.DASHBG2_BACKGROUND} />
        </div>

        <div style={{ clear: 'both', }}></div>

      </div>

      <Grid direction={"row"} container>

        <Grid xs={12} direction={"row"} container className={classes.midBSection} justify="center" style={{ backgroundColor: "black" }} >

          <Grid xs={3} id="midBox1">
            <Typography className={classes.midBoxText}>
              RECEIVE <br></br> BENIFITS
            </Typography>
          </Grid>

          <Grid xs={3} id="midBox2">
            <Link onClick={() => { history.push("/partners") }}>

              <Typography className={classes.midBoxText} >
                EARN VALUE-ADDED
<br></br> OPPORTUNITIES
            </Typography>
            </Link>
          </Grid>

          <Grid xs={3} id="midBox3">
            <Link onClick={() => { history.push("/providerRewards") }}>

              <Typography className={classes.midBoxText} >
                TRACK
 <br></br> REWARDS
            </Typography>
            </Link>
          </Grid>


        </Grid>



        <Grid xs={12} container direction="row" >
          <Grid xs={6} className={classes.midRSection1} style={{ backgroundColor: '#fff' }} >

            <Grid xs={10}>
              <Typography variant="h5" id="PgHeading" className={classes.BNBookFont}
                style={{ marginLeft: 100, }}>{"NEW DAYS,NEW TOOLS"}</Typography>
            </Grid>

            <Grid xs={10} className={classes.midRSection1} style={{ marginLeft: 100, backgroundColor: 'black' }}>

              <Typography variant="h5" className={classes.BNBookFont} style={{ color: 'white' }} >
                STAYING SAFE, FACE-TO-FACE
            </Typography>
              <img alt="" style={{ margin: '10px auto', width: '50%', }} src={IMAGES_URL.DOC_IMG} />
              <Grid xs={12} container alignItems="center" justify="center">
                <Grid xs={8} alignItems="flex-start">
                  <Typography style={{ color: "#43aac5", fontSize: '15px', padding: '10px', }}>

                    <Link href="/providerDashboard">  Valid UntiL </Link>

                  </Typography>

                  <Typography style={{ color: 'white', textAlign: 'center' }}>

                    The FaceLife™ mask is the newest addition to your daily uniform! Built specifically
                    for personal care pros with 3 key features - proven copper protection,
                    performance fit, and machine washable - allowing you to Face Life, Face First.
                    Call 877-671-1045 click the button below to order!
            </Typography>
                  <Button

                    variant="contained" className={classes.buttonWhiteLargeN} style={{ marginTop: 20 }} >
                    <Link href="mailto:facelifesales@hydrafacial.com">
                      ORDER NOW
                  </Link>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>


          <Grid xs={6} className={classes.midRSection1} style={{ backgroundColor: 'white' }} >

            <Grid xs={9} style={{ marginLeft: 20, textAlign: 'left' }}>
              <Typography variant={"h5"} id="PgHeading" className={classes.BNBookFont}>{"LIVE TRAINING IS BACK !!"}</Typography>
            </Grid>



            <Grid xs={9} className={classes.midTrainingSection1} style={{ marginLeft: 20, textAlign: 'left' }}>

              <Typography variant="h6" style={{ color: 'black' }} id="liveTText">
                {
                  "We are thrilled to announce that our Experience Centers have opened up, and programs (modified for our new times/precautions) are in full swing! The Training Team has finalized the dates for all upcoming events and updated the materials to include new safety protocols. All updated events & registration links can be found in the calendar below."
                }
              </Typography>
              <Grid xs={12} container direction="row"  >
                <Grid xs={12} className={classes.midLSection1} container justify="center"   >
                  <Grid xs={12}>
                    <Typography className={classes.midSectionHeadingBox}>
                      EVENTS / TRAINING
                    </Typography>
                    <Grid xs={12} container justify={"center"} alignItems={"center"} >
                      <Tabs
                        style={{ width: "100%" }}
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
                  </Grid>


                  {!eventWithFilter[0] ?
                    <Grid xs={10} container justify={"center"} direction="row" style={{ height: 300 }}>


                      <Grid item xs style={{ marginTop: 20 }}>
                        <img src={IMAGES_URL.EVENT} width="50%" style={{ marginTop: '15px', }} />

                        <Typography variant="h6" style={{ color: "#29a1c5", fontSize: '20px', textAlign: 'center' }}> NO DATA FOUND </Typography>
                      </Grid>
                    </Grid>
                    : <></>
                  }



                </Grid>
              </Grid>



              {eventWithFilter[0] ?
                eventWithFilter.map(eventObj =>
                  <Paper variant="elevation" square elevation={10} style={{ marginTop: '15px', }}>
                    <Grid container xs={12} direction="row" style={{ borderRadius: 10 }}>
                      <Grid item xs={2} className={classes.dateD}>
                        <Typography variant="h5" className={classes.dateDtitle}>{months[new Date(eventObj.startDate).getMonth()] + " " + new Date(eventObj.startDate).getDate()}</Typography>
                      </Grid>
                      <Grid item xs={6} style={{ backgroundColor: 'white', paddingTop: '30px', }}>
                        <Typography variant="h6" className={classes.midDateText}>
                          {months[new Date(eventObj.startDate).getMonth()] + " " + new Date(eventObj.startDate).getDate() + "-" + new Date(eventObj.end_date).getDate()}
                        </Typography>
                        <Typography variant="h6" className={classes.midDateText}>
                          {eventObj.title}
                        </Typography>
                      </Grid>
                      <Grid item xs={4} style={{ backgroundColor: 'white', textAlign: 'center', marginTop: 32 }}>
                        <Link style={{ color: '#fff', cursor: 'pointer' }} className={classes.midDatelink} onClick={() => { handleOpen1(eventObj); window.open("https://hydrafacial.com/refresh/") }}>Book Hear</Link>
                      </Grid>
                    </Grid>
                  </Paper>
                )
                : <> </>}





            </Grid>
          </Grid>

        </Grid>




        <Grid xs={12} direction={"row"} container className={classes.midBSection} justify="center" style={{ backgroundColor: "black" }} >

          <Grid xs={5} style={{ borderRadius: 20 }}>
            <img src={IMAGES_URL.PRODUCT} width="70%" />

          </Grid>

          <Grid xs={5} style={{ marginRight: 30, marginLeft: 30, borderRadius: 20 }}>
            <Typography style={{ color: "white", margin: '50px 0px 0px 0px' }} variant="h5" id="PgHeadingW" className={classes.BNBookFont} >
              {"SHOP OUT LATEST SKIN SOLUTIOINS"}
            </Typography>

            <Button style={{ backgroundColor: '#87CEEB', marginTop: '20px', width: '25%', height: '15%', color: 'white' }}>
              <Link href="https://hydrafacial.store/skin-solutions">
                SHOP NOW
           </Link>
            </Button>

          </Grid>

        </Grid>





      </Grid>

      {open1 ?
        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          style={{ width: '160%', margin: '40px 0px 0px 400px', outline: '0' }}>

          <Grid xs={3}>
            <Grid container xs={12} style={{ height: "60px", backgroundColor: '#8ec6d7' }} direction="row">


              <Grid item xs={10}>
                <Typography variant="h6" className={classes.modelTitle}>
                  Event Detail
                </Typography>
              </Grid>



              <Grid item xs={1}>
                <IconButton onClick={() => { handleClose1() }}><CloseIcon /></IconButton>
              </Grid>
            </Grid>



            <Grid item xs style={{ backgroundColor: 'white' }}>

              <Typography variant="h4" className={classes.modelTitleT1}>
                {bookEvent?.title}
              </Typography>
              {/* <Typography variant="h5" className={classes.modelTitleT2}>
                REFRESH LONG BEACH
              </Typography> */}
              <Typography variant="h6" className={classes.modelText}>
                {bookEvent?.description}
              </Typography>
            </Grid>
          </Grid>
        </Modal>
        : <> </>
      }




      <Footer />


    </div>
  )
}

export default Dashboard;



