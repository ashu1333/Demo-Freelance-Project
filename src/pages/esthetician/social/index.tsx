import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import Header from "../../common/header";
import Footer from "../../common/footer";
import Link from "@material-ui/core/Link";
interface SocialProps {
  name: string;
  dashboard: any;
}

const Social: React.SFC<SocialProps> = ({ name }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Grid direction={"row"} container>
        <Grid xs={6} className={classes.midRSection1}>
          <Grid className={classes.midRSection1Div}>
            <Typography className={classes.midSectionHeading}>
              {"SOCIAL MESSAGE"}
            </Typography>
            <p className={classes.midSectionText}>{"Comming Soon"}</p>
          </Grid>
        </Grid>
        <Grid xs={5} container style={{ padding: "40px 0px" }}>
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
        <Grid xs={3} style={{ backgroundColor: "#fff", borderRadius: 20 }}>
          <Typography className={classes.midSectionBoxHeading1}>
            {"UPLOAD MY SOCIAL MEDIA POSTS"}
          </Typography>
          <p className={classes.midSectionBoxText}>
            {
              "Will link page that contains HF Connect, Marketing Material, and Social Events"
            }
          </p>
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
            {"FEEDS"}
          </Typography>
          <p className={classes.midSectionBoxText}>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </p>
        </Grid>
        <Grid xs={3} style={{ backgroundColor: "#fff", borderRadius: 20 }}>
          <Typography className={classes.midSectionBoxHeading3}>
            {"VALUE-ADDED OPPORTUNITIES"}
          </Typography>
          <p className={classes.midSectionBoxText}>{"(COMING SOON)"}</p>
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
            Get to 100% to start earning your Glow Dreamer status!
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

export default Social;
