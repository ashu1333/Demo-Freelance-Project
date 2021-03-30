import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import Header from "../../common/header";
import Footer from "../../common/footer";
import { useSelector, useDispatch } from "react-redux";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import { OtherAction } from "../../../redux/common/actions";
interface PrivacyPolicyProps {
  data: any;
}

const PrivacyPolicy: React.SFC<PrivacyPolicyProps> = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(OtherAction.privacy(data));
  }, []);

  const data = useSelector((state: PrivacyPolicyProps) =>
    state.data.privacy_policy
      ? state.data.privacy_policy
      : { data: { data: { items: [] } } }
  );
  return (
    <div className={classes.root}>
      <Header />
      <Grid direction={"row"} container className={classes.TrainingTopSection}>
        <Grid xs={6} className={classes.midRSection1}>
          <Grid className={classes.midRSection1Div}>
            <Typography className={classes.TrainingTopHeading}>
              {"Welcome Message"}
            </Typography>
            <p className={classes.TrainingTopText}>
              {
                "Welcome to your HydraFacial learning center. We have provided you with all of the educational materials and opportunities you need for success. Don't wait to get started! After all.. the more you know, the more you glow!"
              }
            </p>
          </Grid>
        </Grid>
        <Grid xs={5} container>
          <video width="100%" autoPlay loop>
            <source
              src="https://linq.hydrafacial.com/images/Model3_01.webm"
              type="video/webm"
            ></source>
            Sorry, your browser doesn't support embedded videos.
          </video>
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
        <Grid
          xs={3}
          style={{
            backgroundColor: "#fff",
            borderRadius: 20,
            paddingBottom: "30px",
          }}
        >
          <Typography className={classes.midSectionBoxHeading1}>
            {"ONLINE TRAINING"}
          </Typography>
          <p>
            <div></div>
          </p>
          <p
            className={classes.midSectionBoxText}
            style={{ paddingBottom: "15px" }}
          >
            {
              "CONTENT BLOCK: Get to 100% to start earning your Glow Dreamer status!"
            }
          </p>
          <Link
            href="#"
            className={classes.midSectionBoxTextLink}
            variant="body2"
          >
            {"HF connect for now"}
          </Link>
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
            {"EVENTS"}
          </Typography>
          <p className={classes.midSectionBoxText}>
            {
              "CONTENT BLOCK: Ready to expand your knowledge of HydraFacial? Click here to learn more about our in-person training events!"
            }
          </p>
          <Link
            href="#"
            className={classes.midSectionBoxTextLink}
            variant="body2"
          >
            {"https://linq.hydrafacial.com/provider/training-education"}
          </Link>
        </Grid>
        <Grid xs={3} style={{ backgroundColor: "#fff", borderRadius: 20 }}>
          <Typography className={classes.midSectionBoxHeading3}>
            {"MARKETING MATERIALS"}
          </Typography>
          <p
            className={classes.midSectionBoxText}
            style={{ paddingBottom: "25px" }}
          >
            {
              "CONTENT BLOCK: We make promoting HydraFacial easy by giving you access to all materials needed to grow your business"
            }
          </p>
          <Link
            href="#"
            className={classes.midSectionBoxTextLink}
            variant="body2"
          >
            {"https://hydrafacialconnect.com/marketing/"}
          </Link>
        </Grid>
      </Grid>

      <Grid
        direction={"row"}
        container
        className={classes.FtBoxes}
        justify="center"
      >
        <div className={classes.FtBox}>
          <div>
            <img
              src={
                "https://linq.hydrafacial.com/uploads/partners/partners_2019129_151126.png"
              }
              style={{ height: 80, width: 180 }}
            />
          </div>
          <div className={classes.FtBoxTxt}>
            <Link href="https://linq.hydrafacial.com/provider/offer-benefit">
              {" Get to 100% to start earning your Glow Dreamer status!"}{" "}
            </Link>
          </div>
        </div>

        <div className={classes.FtBox}>
          <div>
            <img
              src={
                "https://linq.hydrafacial.com/uploads/partners/partners_2019129_151126.png"
              }
              style={{ height: 80, width: 180 }}
            />
          </div>
          <div className={classes.FtBoxTxt}>
            <Link href="https://linq.hydrafacial.com/provider/offer-benefit">
              {" Get to 100% to start earning your Glow Dreamer status!"}{" "}
            </Link>
          </div>
        </div>
        <div className={classes.FtBox}>
          <div>
            <img
              src={
                "https://linq.hydrafacial.com/uploads/partners/partners_2019129_151126.png"
              }
              style={{ height: 80, width: 180 }}
            />
          </div>
          <div className={classes.FtBoxTxt}>
            <Link href="https://linq.hydrafacial.com/provider/offer-benefit">
              {" Get to 100% to start earning your Glow Dreamer status!"}{" "}
            </Link>
          </div>
        </div>
        <div className={classes.FtBox}>
          <div>
            <img
              src={
                "https://linq.hydrafacial.com/uploads/partners/partners_2019129_151126.png"
              }
              style={{ height: 80, width: 180 }}
            />
          </div>
          <div className={classes.FtBoxTxt}>
            <Link href="https://linq.hydrafacial.com/provider/offer-benefit">
              {" Get to 100% to start earning your Glow Dreamer status!"}{" "}
            </Link>
          </div>
        </div>
      </Grid>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
