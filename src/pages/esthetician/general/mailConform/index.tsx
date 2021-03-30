import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { UserActions } from '../../../../redux/common/actions';
import { IMAGES_URL } from "../../../../constants/Images";
import CopyRight from '../../../../components/copyright';
import useStyles from '../styles/style';

const MailConform = (props) => {
  interface error {
    [key: string]: any
  }

  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(UserActions.verifyMail({token:String(props.match.params.token)},history));
  }, []);

  const goToLogin = () => {
    history.replace("/");
  }

  const resendMail = () => {
    dispatch(UserActions.verifyMailResend({token:String(props.match.params.token)},history));

  }

  const mailVerificationResponse = useSelector((state: any) => state.user.mailVerification ? state.user.mailVerification : {});


   return  (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img alt="logo" src={IMAGES_URL.LOGO}  style={{ width: 260, margin:'20px', float :'left' }} />
          <div style={{ float :'left', textAlign:'left', paddingBottom :'20px', }} >
          <span style={{ fontSize:26, color: '#000', fontWeight: 'lighter', textAlign:'left', }}>
          {mailVerificationResponse.message}          </span>
          </div>

          <Typography variant="h5" style={{textAlign:'center', paddingBottom :'20px',}}>
          <span style={{ fontSize:20, color: '#000', fontWeight: 'lighter', }}>
           {!mailVerificationResponse.status?mailVerificationResponse.message:"You have successfully verified the email address."}
          <br></br>
          You will be the first to know about new releases,
          <br>
          </br> giveaways and special offers. 
          </span>
          </Typography>

          <Typography variant="h5" style={{textAlign:'center', paddingBottom :'20px',}}>
          <span style={{ fontSize:20, color: '#000', fontWeight: 'lighter', }}>
          Stay Tuned. 
          </span>
          </Typography>


          <Grid xs={12} container  style={{ marginTop: '40px', }} >
          <Grid xs={2}></Grid>
          <Grid xs={12} container justify={"center"}>
              <Grid xs={4} container >
                <Button
                  fullWidth
                  onClick={() => goToLogin()}
                  variant="contained"
                  className={classes.buttonWhiteLargeN} >
                  Back to Login
                </Button>
              </Grid>

              {!mailVerificationResponse.status &&<Grid xs={4} container  style={{ float :'left', paddingLeft:'20px', }} >
                <Button
                 onClick={() => resendMail()}
                  fullWidth
                  variant="contained"
                  className={classes.buttonWhiteLargeRM} >
                  Resend Mail
               </Button>
              </Grid>}
              </Grid>
            </Grid>
          
            <Grid xs={12} container  style={{ marginTop: '40px', }} ></Grid>
            <div style={{ textAlign:'center', border:'0px solid' }} >
              <img  src={IMAGES_URL.SOCIAL_ICON_FB} /><img  src={IMAGES_URL.SOCIAL_ICON_TW} /><img  src={IMAGES_URL.SOCIAL_ICON_IN} />
            </div>
            <Box mt={1}>
              <CopyRight />
            </Box>
          
        </div>
      </Grid>
      <Grid item xs={false} sm={6} md={6} className={classes.ecimage} />
    </Grid>
  );
}

export default MailConform;