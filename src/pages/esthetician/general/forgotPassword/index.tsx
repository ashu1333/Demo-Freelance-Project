import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import useStyles from '../styles/style';
import CopyRight from '../../../../components/copyright';
import { IMAGES_URL } from "../../../../constants/Images";
import { UserActions } from '../../../../redux/common/actions';
import {ForgotRequest} from '../../../../redux/user/model'
import {validateForgotPassword } from "../../../../constants/validation";
import { useHistory } from 'react-router-dom';

const ForgotPassword: React.SFC<any> = () => {
  interface error {
    [key: string]: any
  }

  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = React.useState<ForgotRequest>({})
  const [formValidate, setSubmitting] = React.useState({isSubmitting:false,error:undefined})
  const [errors, setErrors] = useState<error>({selected:undefined});

  React.useEffect(() => {
    const validationErrors = validateForgotPassword(values)
    let noErrors =  Object.keys(validationErrors).length == 0
    let currentError = validationErrors[errors.selected];
    setSubmitting({isSubmitting:noErrors,error:currentError})
  }, [errors]);

  const handleInput =(event: any)=> {
      setValues({
          ...values,
          [event?.target.name]: event?.target.value
      })
      setErrors({...errors,selected:event?.target.name})

  }

  const handleSubmit = () => {
      dispatch(UserActions.forgotPassword(values,history));    
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={9} className={classes.image} />
      <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img alt="logo" src={IMAGES_URL.LOGO}/>
          <Typography component="h1" variant="h5">
           Password Reset
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={(input) => handleInput(input)}
              helperText={errors?.selected=="email"?formValidate?.error:""}
              error={errors?.selected=="email"&&formValidate?.error}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <Button
              fullWidth
              onClick={() => handleSubmit()}
              variant="contained"
              className={classes.submit}
              disabled={!formValidate.isSubmitting}
              >
              Submit
            </Button>
            <Grid container direction="row" style={{justifyContent:"space-between"}}>
              <Grid item>
                <Link className={classes.link} href="#" variant="body2">
                  {"Don't resive OTP? Resend"}
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.link} href="/" variant="body2">
                  {"Login"}
                </Link>
              </Grid>
            </Grid>

            
            <Box mt={5}>
              <CopyRight />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default ForgotPassword;