import * as React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Training from "../pages/esthetician/training";
import News from "../pages/common/news"; //WITH API CALL
import News_old from "../pages/esthetician/news"; //DUMMY DATA

import Social from "../pages/esthetician/social";
import Rewards from "../pages/esthetician/rewards";
import LoginPage from "../pages/esthetician/general/login";
import ResetPassword from "../pages/esthetician/general/resetPassword";
import MailConform from "../pages/esthetician/general/mailConform";
import RegistrationPage from "../pages/esthetician/general/registration";
import ForgotPassword from "../pages/esthetician/general/forgotPassword";
import Dashboard from "../pages/esthetician/dashboard";
import Privacy from "../pages/esthetician/privacypolicy";
import TermsCondition from "../pages/esthetician/termscondition";

import ProviderDashboard from "../pages/provider/dashboard";
import Partners from "../pages/provider/partners";
import ProviderRewards from "../pages/provider/rewards";
import currentstatus from "../pages/provider/current-status";
import PTraining from "../pages/provider/training";
import feeds from "../pages/provider/feeds";
import profile from "../pages/common/profile";

import profile_old from "../pages/provider/profile";
import CircularProgress from "@material-ui/core/CircularProgress";
import useStyles from "./style";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { showToast } from "../redux/user/reducer";

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loader = useSelector((state: any) =>
    state.user.loader ? state.user.loader : false
  );
  const toast = useSelector((state: any) =>
    state.user.toast ? state.user.toast : {}
  );
  const userData = useSelector((state: any) => state.user.loginUser);
  console.log(userData);

  function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = () => {
    dispatch(showToast({ show: false, message: "", duration: 0 }));
  };
  const token = localStorage.getItem("token") ? true : false;

  const isAuthenticate = () => {
    return token ? true : false;
  };
  return (
    <Router>
      {loader && (
        <div className={classes.loader}>
          <CircularProgress style={{ alignSelf: "center" }} />
        </div>
      )}

      <Snackbar
        open={toast.show}
        autoHideDuration={toast.duration ? toast.duration : 1000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert severity={toast.type ? toast.type : "info"}>
          {toast.message}
        </Alert>
      </Snackbar>
      <Switch>
        <Route
          path="/rewards"
          component={userData.loginAsCustomer ? Rewards : LoginPage}
        />
        <Route
          path="/social"
          component={userData.loginAsCustomer ? Social : Social}
        />
        <Route
          path="/training"
          component={userData.loginAsCustomer ? Training : Training}
        />
        <Route path="/forgotPassword" component={ForgotPassword} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/email-success-verified/:token" component={MailConform} />
        <Route path="/reset-password/:token" component={ResetPassword} />
        <Route
          path="/dashboard"
          component={userData.loginAsCustomer ? Dashboard : Dashboard}
        />
        <Route
          path="/privacypolicy"
          component={userData.loginAsCustomer ? Privacy : Dashboard}
        />
        <Route
          path="/termscondition"
          component={userData.loginAsCustomer ? TermsCondition : Dashboard}
        />

        <Route
          path="/providerdashboard"
          component={
            !userData.loginAsCustomer ? ProviderDashboard : ProviderDashboard
          }
        />
        <Route
          path="/partners"
          component={!userData.loginAsCustomer ? Partners : Partners}
        />
        <Route
          path="/providerrewards"
          component={
            !userData.loginAsCustomer ? ProviderRewards : ProviderRewards
          }
        />
        <Route
          path="/currentstatus"
          component={!userData.loginAsCustomer ? currentstatus : currentstatus}
        />
        <Route
          path="/providertraining"
          component={!userData.loginAsCustomer ? PTraining : PTraining}
        />
        <Route
          path="/feeds"
          component={!userData.loginAsCustomer ? feeds : feeds}
        />
        <Route path="/profile" component={profile} />
        <Route path="/news" component={News_old} />
        <Route path="/profileold" component={profile_old} />

        <Route
          path="/dashboard"
          component={userData.loginAsCustomer ? Dashboard : Dashboard}
        />

        <Route path="/" component={ProviderDashboard} />
      </Switch>
    </Router>
  );
};
