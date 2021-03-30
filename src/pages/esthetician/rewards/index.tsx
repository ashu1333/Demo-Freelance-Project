import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { IMAGES_URL } from '../../../constants/Images';
import useStyles from './style';
import Header from '../../common/header'
import Footer from '../../common/footer'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
interface RewardsProps {
  name: string,
  dashboard: any
};


const Rewards: React.SFC<RewardsProps> = ({ name }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [progress, setProgress] = React.useState(0);
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event: any, newValue: any) => { setValue(newValue); };
  React.useEffect(() => {
    if(localStorage.getItem('token'))history.push("/rewards")
    else if(localStorage.getItem('token')==null) history.push("/")
   }, []);

  return (
    <div className={classes.root}>
      <Header />
      <Grid direction={"row"} container >
        <Grid xs={6} className={classes.midRSection1}>
          <Grid className={classes.midRSection1Div}>
            <Typography className={classes.midSectionHeading}>
              {"Welcome to Hydrafacial Love!"}
            </Typography>
            <p className={classes.midSectionTextR}>
              {"You now have access to everything needed to achieve success as a HydraFacialist! This is your headquarters for all things Training, Events, Social, Marketing, and MUCH more! This is bigger than rewards, this is your chance to take part in the new era of Aesthetics!"}
            </p>
          </Grid>
        </Grid>
        <Grid xs={5} container>
          <Grid xs={12} justify="flex-end" alignItems="flex-end" container >
            <Typography className={classes.midRSectionText1}>
              Congratulations HydraFacialist! You are just getting started so let's start glowing and achieve a new status- Glow Dreamer
              </Typography>
          </Grid>
          <Grid container direction={"row"} xs={12} className={classes.midRGlowIconDiv}>
            <Grid xs={3} direction="column" container justify="center" alignItems="center">
              <Typography className={classes.midRSectionGlowTitle}>
                Glow Dreamer
                </Typography>
              <img alt="logo" src={IMAGES_URL.GLOW_ICON1} />
            </Grid>
            <Grid xs={3} direction="column" container justify="center" alignItems="center">
              <Typography className={classes.midRSectionGlowTitle}>
                Glow Getter
                </Typography>
              <img alt="logo" src={IMAGES_URL.GLOW_ICON2} />
            </Grid>
            <Grid xs={3} direction="column" container justify="center" alignItems="center">
              <Typography className={classes.midRSectionGlowTitle}>
                Glow Guru
                </Typography>
              <img alt="logo" src={IMAGES_URL.GLOW_ICON3} />
            </Grid>
            <Grid xs={3} direction="column" container justify="center" alignItems="center">
              <Typography className={classes.midRSectionGlowTitle}>
                Glow Master
                </Typography>
              <img alt="logo" src={IMAGES_URL.GLOW_ICON4} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Divider />
      <Grid xs={12} direction={"row"} container className={classes.midBSection} justify="center" >
        <img alt="glow_table" src={IMAGES_URL.GLOW_TABLE} />
      </Grid>

      <Grid xs={12} direction="column" container className={classes.midBSection} justify="center" style={{ backgroundColor: "#f7e7e5" }} >
        <Grid container justify="center" alignItems="center" direction="column" >
          <Typography className={classes.midRSectionRewardTitle}>
            HOW DO I GLOW UP
        </Typography>
          <Typography className={classes.midRSectionGlowTitle}>
            Achieve your first badge by completing the activities below. Ready, Set GLOW
        </Typography>
        </Grid>
        <Grid container direction={"row"} xs={12} justify="center" className={classes.midRGlowIconDiv}>
          <Grid xs={2} direction="column" container justify="center" alignItems="center">

            <img alt="logo" src={IMAGES_URL.GLOW_ICO1} />
            <Typography className={classes.midRSectionGlowTxt}>
              Complete 100% of Online Training & download all required
                </Typography>
          </Grid>
          <Grid xs={2} direction="column" container justify="center" alignItems="center">

            <img alt="logo" src={IMAGES_URL.GLOW_ICO2} />
            <Typography className={classes.midRSectionGlowTxt}>
              Join HydraFacial Social Channels and post a "Gunkie" picture.
                </Typography>
          </Grid>
          <Grid xs={2} direction="column" container justify="center" alignItems="center">

            <img alt="logo" src={IMAGES_URL.GLOW_ICO3} />
            <Typography className={classes.midRSectionGlowTxt}>
              Introduce yourself to the HydraFacial Nation Community
                </Typography>
          </Grid>
          <Grid xs={2} direction="column" container justify="center" alignItems="center">

            <img alt="logo" src={IMAGES_URL.GLOW_ICO4} />
            <Typography className={classes.midRSectionGlowTxt}>
              Attend Jumpstart <br></br> <br></br><br></br>
                </Typography>
          </Grid>
          <Grid xs={2} direction="column" container justify="center" alignItems="center">

            <img alt="logo" src={IMAGES_URL.GLOW_ICO5} />
            <Typography className={classes.midRSectionGlowTxt}>
              Glow Dreamer Badge  <br></br> <br></br><br></br>
                </Typography>
          </Grid>



          <Grid xs={12} container direction={"row"} justify="center" alignItems="center">
            <Grid xs={10} container style={{ background: "#b8789d", borderRadius: 20, height:20, marginTop: 20 }} alignItems="center" />
            <Grid xs={10} container justify="space-around" alignItems="center" >
              <Grid xs={2} container justify="center" alignItems="center" style={{ width: 40, marginTop:-29, height: 40 }} >
                <Grid style={{ position: "absolute",borderRadius:30 ,width: 40, height: 40, backgroundColor: "#7cacbb" }} />
              </Grid>
              <Grid xs={2} container justify="center" alignItems="center" style={{ width: 40, marginTop:-29, height: 40 }} >
                <Grid style={{ position: "absolute",borderRadius:30 ,width: 40, height: 40, backgroundColor: "#7cacbb" }} />
              </Grid>
              <Grid xs={2} container justify="center" alignItems="center" style={{ width: 40, marginTop:-29, height: 40 }} >
                <Grid style={{ position: "absolute",borderRadius:30 ,width: 40, height: 40, backgroundColor: "#7cacbb" }} />
              </Grid>
              <Grid xs={2} container justify="center" alignItems="center" style={{ width: 40, marginTop:-29, height: 40 }} >
                <Grid style={{ position: "absolute",borderRadius:30 ,width: 40, height: 40, backgroundColor: "#7cacbb" }} />
              </Grid>
              <Grid xs={2} container justify="center" alignItems="center" style={{ width: 40, marginTop:-29, height: 40 }} >
                <Grid style={{ position: "absolute",borderRadius:30 ,width: 40, height: 40, backgroundColor: "#7cacbb" }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div >
  )
}

export default Rewards;