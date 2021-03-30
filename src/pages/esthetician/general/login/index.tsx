import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { UserActions } from '../../../../redux/common/actions';
import useStyles from '../styles/style';
import CopyRight from '../../../../components/copyright';
import { IMAGES_URL } from "../../../../constants/Images";
import { validateLogin } from "../../../../constants/validation";
import { LoginRequest } from '../../../../redux/user/model'
import { useHistory } from 'react-router-dom';

const LoginPage: React.SFC<any> = () => {
  interface error {
    [key: string]: any
  }

  const [values, setValues] = React.useState<LoginRequest>({ })
  const [formValidate, setSubmitting] = React.useState({ isSubmitting: true, error: undefined })
  const [errors, setErrors] = useState<error>({ selected: undefined });
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event: any) => {    
    setValues({
      ...values,
      [event?.target.name]: event?.target.value
    })
    setErrors({ ...errors, selected: event?.target.name })
  }

  const handleBlur = () => {
    const validationErrors = validateLogin(values)
    setErrors(validationErrors)
  }
  const userData = useSelector((state: any) => state.user.loginUser);

  useEffect(() => {
  if(userData.loginAsCustomer!=null) history.push("providerDashboard")  
    const validationErrors = validateLogin(values)
    let noErrors = Object.keys(validationErrors).length == 0
    let currentError = validationErrors[errors.selected];
    setSubmitting({ isSubmitting: noErrors, error: currentError })
 
  }, [userData,errors]);
  
  const handleSubmit = () => {
    let userdata =values; 
    userdata["password"]=btoa(String(userdata.password));
     dispatch(UserActions.login(userdata, history));
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={5} sm={12} md={9} className={classes.image} />
      <Grid item xs={8} sm={9} md={3} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img alt="logo" src={IMAGES_URL.LOGO} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={() => { }}>
            <TextField
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              helperText={errors?.selected == "email" ? formValidate?.error : ""}
              error={errors?.selected == "email" && formValidate?.error}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              onChange={handleChange}
              error={errors?.selected == "password" && formValidate?.error}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              helperText={errors?.selected == "password" ? formValidate?.error : ""}
              autoComplete="current-password"
            />
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              onClick={() => handleSubmit()}
              variant="contained"
              className={classes.submit}
              disabled={!formValidate.isSubmitting}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link className={classes.link} href="/forgotPassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.link} href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
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

export default LoginPage;