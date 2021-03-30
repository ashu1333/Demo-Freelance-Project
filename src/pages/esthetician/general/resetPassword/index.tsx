import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import {validateSignIn } from "../../../../constants/validation";
import {ResetPasswordRequest} from '../../../../redux/user/model'
import { useHistory } from 'react-router-dom';

const ResetPassword: React.SFC<any> = (props) => {
 
  interface error {
    [key: string]: any
}
  
  const [values, setValues] = React.useState<ResetPasswordRequest>({token:props?.match?.params?.token})
  const [formValidate, setSubmitting] = React.useState({isSubmitting:false,error:undefined})
  const [errors, setErrors] = useState<error>({selected:undefined});
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  
  React.useEffect(() => {
    const validationErrors = validateSignIn(values)
    let noErrors = false
    noErrors =  validationErrors.password?validationErrors.password.length > 0?false:false:true;
    noErrors =  validationErrors.confirm_password?validationErrors.confirm_password.length > 0?false:false:true;
    let currentError = validationErrors[errors.selected];
    setSubmitting({isSubmitting:noErrors,error:currentError})
  }, [errors]);

  const handleChange =(event: any)=> {
      setValues({
          ...values,
          [event?.target.name]: event?.target.value
      })
      setErrors({...errors,selected:event?.target.name})

  }

  const handleBlur = ()=> {
      const validationErrors = validateSignIn(values)
      setErrors(validationErrors)
  }

  const handleSubmit = () => {
    dispatch(UserActions.resetPassword(values,history));
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={9} className={classes.image} />
      <Grid item xs={12} sm={8} md={3} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img alt="logo" src={IMAGES_URL.LOGO} />
          <Typography component="h1" variant="h5">
            Reset password
          </Typography>
          <form className={classes.form} noValidate onSubmit={()=>{}}>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onBlur={handleBlur}
              onChange={(input) => handleChange(input)}
              error={errors?.selected=="password"&&formValidate?.error}
              helperText={errors?.selected=="password"?formValidate?.error:""}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              onBlur={handleBlur}
              onChange={(input) => handleChange(input)}
              error={errors?.selected=="confirm_password"&&formValidate?.error}
              helperText={errors?.selected=="confirm_password"?formValidate?.error:""}
              name="confirm_password"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
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
            
            <Box mt={5}>
              <CopyRight />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

export default ResetPassword;