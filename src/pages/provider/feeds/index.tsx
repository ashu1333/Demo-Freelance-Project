import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { IMAGES_URL } from "../../../constants/Images";
import useStyles from "./style";
import Header from "../../common/header";
import Footer from "../../common/footer";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import { ProviderAction } from "../../../redux/common/actions";
interface FeedsProps {
  name: string;
  dashboard: any;
  Provider: any;
}

const Feeds: React.SFC<FeedsProps> = ({ name }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(ProviderAction.feeds_msg());
  }, []);

  const feeds = useSelector((state: FeedsProps) =>
    state.Provider.feeds ? state.Provider.feeds : {}
  );

  console.log(feeds);

  return (
    <div className={classes.root}>
      <Header />

      <div id="welcome_section">
        <div id="container">
          <Grid xs={12} className={classes.midLSection}>
            <br></br>
            <Typography className={classes.feedTitle}>
              {feeds?.[0]?.title}
            </Typography>
            <br></br>
            <br></br>
            <Typography className={classes.feedTitle}>
              {"MORE COMING SOON"}
            </Typography>
            <Typography className={classes.feedText}>
              {" "}
              {"But for now check us out on the Today Show with Hoda & Jenna!"}
            </Typography>
          </Grid>
          <Grid xs={12}>
            <CardMedia
              component="iframe"
              src={IMAGES_URL.VIDEO}
              allow="autoPlay"
              style={{ height: "641.5px" }}
            />
          </Grid>
        </div>

        <div id="img_one">
          <img alt="" src={IMAGES_URL.DASHBG1_BACKGROUND} />
        </div>

        <div id="img_two">
          <img alt="" src={IMAGES_URL.DASHBG2_BACKGROUND} />
        </div>

        <div style={{ clear: "both" }}></div>
      </div>
      <Footer />
    </div>
  );
};

export default Feeds;
