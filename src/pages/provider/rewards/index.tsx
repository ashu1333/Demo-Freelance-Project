import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { IMAGES_URL } from "../../../constants/Images";
import useStyles from "./style";
import Header from "../../common/header";
import Footer from "../../common/footer";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

import { ProviderAction } from "../../../redux/common/actions";
interface RewardsProps {
  name: string;
  dashboard: any;
  Provider: any;
}

const Rewards: React.SFC<RewardsProps> = ({ name }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(ProviderAction.rewards_msg());
  }, []);

  const rewards = useSelector((state: RewardsProps) =>
    state.Provider.rewards ? state.Provider.rewards : {}
  );
  console.log(rewards[0]?.title);
  const card_obj = [
    {
      title: "MARKETING MATERIALS",
      img: IMAGES_URL.REICO2,
      text:
        "Running low on in-office brochures? Not to worry! You can replenish at no cost with any order",
      color: "#43aac5",
    },
    {
      title: "FREE BRANDED GIVEWAYS",
      img: IMAGES_URL.REICO3,
      text:
        "Exclusive swag available to all HydraFacial LINQ providers & you get it first!",
      color: "#9568c4 ",
    },
    {
      title: "CONSUMER CAMPAIGNS",
      img: IMAGES_URL.REICO1,
      text:
        "What can we do to help your clinic with consumer pull through? As Seen In 2019 for Black Diamond Accounts – Booster Bonanza",
      color: "#3582bd ",
    },
    {
      title: "EXCLUSIVE OFFERS",
      img: IMAGES_URL.REICO4,
      text:
        "We do exclusive things year-round and we want you to be the first to have access to it!",
      color: "#af8880",
    },
  ];

  return (
    <div className={classes.root}>
      <Header />

      <div id="welcome_section">
        <div id="container">
          <Grid xs={6} className={classes.midLSection}>
            <p className={classes.PrDashboardtitle}>{rewards[0]?.title}</p>

            <div
              className={classes.PrDashboardtext}
              dangerouslySetInnerHTML={{ __html: rewards?.[0]?.content }}
            ></div>
          </Grid>

          <Grid xs={6} className={classes.midLSection}>
            <Grid
              xs={10}
              container
              direction="row"
              justify="center"
              style={{
                backgroundColor: "#fff",
                padding: "120px 3% 60px 3%",
                textAlign: "center",
              }}
            >
              <Paper variant="elevation" square elevation={10}>
                <Grid xs={12} container direction="row">
                  <Grid
                    xs={12}
                    justify="flex-start"
                    container
                    style={{
                      boxShadow: "box-shadow: 0 0 20px rgba(0,0,0,0.08)",
                    }}
                  >
                    <Grid
                      xs={12}
                      justify="center"
                      style={{ textAlign: "center" }}
                    >
                      <Typography variant="h5" className={classes.ReTitle}>
                        {"TRACK ‘EM AS YOU EARN ‘EM"}
                      </Typography>
                      <img
                        src={IMAGES_URL.TSHIRT}
                        width="40%"
                        style={{ marginTop: 10 }}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    container
                    xs={12}
                    justify="center"
                    style={{ textAlign: "center", marginTop: 10 }}
                  >
                    <Typography variant="h6" className={classes.ReText}>
                      COMING SOON{" "}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
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

      <Grid direction={"row"} container>
        <Grid
          xs={12}
          direction={"row"}
          container
          className={classes.midBSection}
          justify={"center"}
          style={{ backgroundColor: "black" }}
        >
          <Grid xs={12}>
            <Typography className={classes.ReTitle1} style={{ color: "#fff" }}>
              {"WHAT`S INCLUDED"}{" "}
            </Typography>
          </Grid>

          {card_obj.map((data) => (
            <Grid
              xs
              item
              style={{
                backgroundColor: data.color,
                height: "350px",
                marginRight: 20,
                marginLeft: 30,
                borderRadius: 5,
              }}
            >
              <img src={data.img} style={{ margin: "20px auto 0px auto" }} />
              <Grid xs={12} style={{ textAlign: "center" }}>
                <Typography
                  variant="h6"
                  className={classes.ReBoxTitle}
                  style={{ color: "#fff" }}
                >
                  {data.title}
                </Typography>
                <Typography
                  className={classes.ReBoxText}
                  style={{ color: "#fff" }}
                >
                  {data.text}{" "}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>

        <Grid
          xs={12}
          container
          direction="row"
          justify={"center"}
          style={{ marginTop: 20 }}
        >
          <img
            src={IMAGES_URL.REWARD}
            width="80%"
            style={{ margin: "50px auto" }}
          />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Rewards;
