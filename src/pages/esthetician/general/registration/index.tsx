import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CopyRight from '../../../../components/copyright';
import { parsePhoneNumberFromString } from "libphonenumber-js";
import MuiPhoneNumber from "material-ui-phone-number";
import { IMAGES_URL } from "../../../../constants/Images";
import { UserActions } from '../../../../redux/common/actions';
import { SignInRequest } from '../../../../redux/user/model';
import { validateSignIn } from "../../../../constants/validation";
import { useHistory } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import useStyles from '../styles/style'

const RegistrationPage: React.SFC<any> = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  interface error { [key: string]: any }
  const [values, setValues] = React.useState<SignInRequest>({ user_type: "2" })
  const [formValidate, setSubmitting] = React.useState({ isSubmitting: false, error: undefined })
  const [errors, setErrors] = useState<error>({ selected: undefined });
  const history = useHistory();

  React.useEffect(() => {
    const validationErrors = validateSignIn(values)
    let noErrors = Object.keys(validationErrors).length == 0
    let currentError = validationErrors[errors.selected];
    setSubmitting({ isSubmitting: noErrors, error: currentError })
  }, [errors]);


  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event?.target.name]: event?.target.value
    })
    setErrors({ ...errors, selected: event?.target.name })
  }

  const handleSubmit = () => {
    let value = { ...values }
    dispatch(UserActions.register(value, history));
  }
  const handlePhoneNumberChange = (value: string) => {
    setValues(pre => ({ ...pre, "mobile_no": value }));
    setErrors({ ...errors, selected: "mobile_no" });
  }


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={9} className={classes.image} />
      <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img alt="logo" src={IMAGES_URL.LOGO} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={(input) => handleChange(input)}
              error={errors?.selected == "first_name" && formValidate?.error}
              helperText={errors?.selected == "first_name" ? formValidate?.error : ""}
              id="first_name"
              label="First Name"
              name="first_name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={(input) => handleChange(input)}
              error={errors?.selected == "last_name" && formValidate?.error}
              helperText={errors?.selected == "last_name" ? formValidate?.error : ""}
              name="last_name"
              label="Last Name"
              id="last_name"
            />
            <MuiPhoneNumber
              defaultCountry={"us"}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={values?.mobile_no}
              id="mobile_no"
              label={"Phone"}
              name="Phone"
              onChange={handlePhoneNumberChange}
              error={errors?.mobile_no}
              helperText={errors?.mobile_no}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={(input) => handleChange(input)}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              error={errors?.selected == "email" && formValidate?.error}
              helperText={errors?.selected == "email" ? formValidate?.error : ""}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={(input) => handleChange(input)}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              error={errors?.selected == "password" && formValidate?.error}
              helperText={errors?.selected == "password" ? formValidate?.error : ""}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onChange={(input) => handleChange(input)}
              name="confirm_password"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              error={errors?.selected == "confirm_password" && formValidate?.error}
              helperText={errors?.selected == "confirm_password" ? formValidate?.error : ""}
            />

            <RadioGroup row  name="user_type" value={values.user_type} onChange={handleChange}>
              {/* <FormControlLabel value="1" control={<Radio />} label="Customer" /> */}
              <FormControlLabel value="2" control={<Radio />} label="Provider" />
            </RadioGroup>

            <Button
              onClick={() => handleSubmit()}
              fullWidth
              variant="contained"
              className={classes.submit}
              disabled={!formValidate.isSubmitting}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link className={classes.link} href="/login" variant="body2">
                  {"You have an account? Login"}
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

export default RegistrationPage;