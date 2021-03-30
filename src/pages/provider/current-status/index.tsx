import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { IMAGES_URL } from '../../../constants/Images';
import useStyles from './style';
import Header from '../../common/header'
import Footer from '../../common/footer'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Carousel from 'react-grid-carousel'
import {ProviderAction} from '../../../redux/common/actions'
interface CurrentStatusProps {
  name: string,
  dashboard: any,
  Provider:any,
};

const Dashboard: React.SFC<CurrentStatusProps> = ({ name }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
 
  React.useEffect(() => {
    dispatch(ProviderAction.current_status_msg());
   

  }, []);
  const current = useSelector((state: CurrentStatusProps) => state.Provider.currentStatus ? state.Provider.currentStatus : {});
 
  return (
    <div className={classes.root}>
      <Header />
      <div id="welcome_section">
    <div id="container">
    <Grid xs={6} className={classes.midLSection}>
          <p className={classes.PrDashboardtitle}>
            {current?.[0]?.title}
          </p>
          
          <div className={classes.PrDashboardtext}
          dangerouslySetInnerHTML={{ __html: current?.[0]?.content }}>
          </div>  
        </Grid>
        <Grid xs={6} className={classes.midLSection}>
          <Grid xs={10} container direction="row" justify="flex-start" style={{padding: '3%', textAlign: 'center' }}  >
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

                    </Typography>

                    <Typography id="userRtext">
                      {"Congratulations! We’ve created a specific category for new customers, called Silver Ring. What does that mean? You are on your way up!"}
                    </Typography>
                  </Grid>

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
                  <Typography variant="h6" id="RankRead" ><Link 
                  onClick={()=>{history.push("/providerRewards")}}>Enjoy Your Rewards!</Link> </Typography>
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
    <div style={{clear:'both',}}></div>
</div>
      <Grid direction={"row"} container>
        <Grid xs={12} direction={"row"} container className={classes.midBSection} justify="center" style={{ backgroundColor: "black" }} >
          <Grid xs={3} id="midBox1">
            <Typography className={classes.midBoxText} >
              FUTURE TIER SPEND
           </Typography>
            <Typography id="midBoxStext">
              7500 <br></br>
             Amount needed to level up
            </Typography>
          </Grid>
          <Grid xs={3} id="midBox2">
            <Typography className={classes.midBoxText} >
              YTD TIER SPEND
           </Typography>
            <Typography id="midBoxStext">
              0 <br></br>
           Shows all HydraFacial purchases for the year
            </Typography>
          </Grid>
          <Grid xs={3} id="midBox3">
            <Typography className={classes.midBoxText} >
              FUTURE TIER LEVEL
           </Typography>
            <Typography id="midBoxStext">
              Silver Ring <br></br>
           Future Tier Status (upon leveling up)
            </Typography>
          </Grid>
        </Grid>

        <Grid xs={12} container direction="row" justify={"center"}>
          <Grid xs={12} container justify={"center"}>
            <Typography variant="h5" id="PgHeadingC" className={classes.BNBookFont} style={{ marginTop: 20 }} >
              {"HOW TO LEVEL UP"}
            </Typography>

          </Grid>
          <Grid xs={10} container justify={"center"}>
            <Typography id="cdashboardText">
              {"Level Up or Secure Your Status at any time! Every 6 months your account spend will be assessed. At each EARN IT date (June 30, 2020 & December 31, 2020), HQ will update with your most current spend and tier status."}
            </Typography>
          </Grid>
          <Grid xs={10} container justify={"center"}>
            <Typography variant="h5" style={{ textAlign: 'center' }}  >
              <img src={IMAGES_URL.REWARD} width="90%" style={{ margin: '0px auto', }} />
            </Typography>

            <Typography variant="h5">
              <Link id="RankRead" href="/providerRewards" >
                <br></br>
                {" View Your Full Program Benefits & Rewards"}
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <Grid xs={12} direction={"row"} container className={classes.midBSection} justify="center" style={{ marginTop: 50 }} >
          <Grid xs={12}>
            <Typography variant="h5" id="PgHeadingC" className={classes.BNBookFont}> PARTNER PROGRAMS</Typography>
          </Grid>
          <Grid xs={12} style={{ marginTop: 20 }}>
            <Typography id="cdashboardText"> As you secure status as a provider, HydraFacial LINQ will give you the opportunity to leverage value-added services that offer a simple and approachable way to build your HydraFacial business and other aesthetic offerings. View our partners below:

        </Typography>
          </Grid>
        </Grid>

        <Grid xs={12} direction={"row"} container className={classes.midBSection} justify={"center"} style={{ backgroundColor: "white", padding: '4% 4%', }} >
        <Carousel cols={4} rows={1} gap={0}  style={{marginLeft:10}}>
        <Carousel.Item>
          <Grid xs item id="minsBoxImg">
            <img src={IMAGES_URL.PARTNER1} />
          </Grid>
          </Carousel.Item>

          <Carousel.Item>
          <Grid xs item id="minsBoxImg">
            <img src={IMAGES_URL.PARTNER2} />
          </Grid>
          </Carousel.Item>


          <Carousel.Item>
          <Grid xs item id="minsBoxImg">
            <img src={IMAGES_URL.PARTNER3} />
          </Grid>
          </Carousel.Item>

          <Carousel.Item>
          <Grid xs item id="minsBoxImg">
            <img src={IMAGES_URL.PARTNER4} />
          </Grid>

          </Carousel.Item>

          <Carousel.Item>
          <Grid xs item id="minsBoxImg">
            <img src={IMAGES_URL.PARTNER5} />
          </Grid>
          </Carousel.Item>


          </Carousel>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}

export default Dashboard;



