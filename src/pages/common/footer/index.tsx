import * as React from "react";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { useHistory } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import IconButton from "@material-ui/core/IconButton";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";

import useStyles from "./style";
import { IMAGES_URL } from "../../../constants/Images";

const Footer: React.SFC = () => {
  const userData = useSelector((state: any) => state.user.loginUser);
  const history = useHistory();
  const classes = useStyles();
  return (
    <Grid
      xs={12}
      direction={"row"}
      container
      justify={"space-around"}
      alignItems={"center"}
      className={classes.footer}
    >
      <Grid xs={3} direction={"column"}>
        <div className={classes.footerTitle}> Quick Links</div>
        <Link
          className={classes.footerLink}
          onClick={() => {
            userData.loginAsCustomer
              ? history.push("/dashboard")
              : history.push("/providerDashboard");
          }}
          variant="body2"
        >
          {"Home"}
        </Link>
        <br></br>
        <Link
          className={classes.footerLink}
          href="mailto:giftcard@hydrafacial.com"
          variant="body2"
        >
          {"Contact us"}
        </Link>
        <br></br>
        {localStorage.getItem("user_type") == "CONSUMER" ? (
          <Link
            className={classes.footerLink}
            href="https://hydrafacial.com/about-us/"
            variant="body2"
          >
            {"About Us"}
          </Link>
        ) : (
          <> </>
        )}
      </Grid>

      <Grid xs={5} direction={"row"}>
        <img alt="logo" className={classes.logo} src={IMAGES_URL.LOGO} />

        <div className={classes.footerText}>
          HydraFacial is a registered trademark and a patented system of Edge
          System LLC.
        </div>

        <div className={classes.footerText}>
          Copyright © 2019. Edge Systems, LLC. All Rights Reserved.
        </div>

        <Grid item xs>
          <Link className={classes.footerLink1} href="#">
            {"Privacy Policy"}
          </Link>

          {localStorage.getItem("user_type") == "CONSUMER" ? (
            <Link className={classes.footerLink1} href="#">
              {"Terms and Condition"}
            </Link>
          ) : (
            <> </>
          )}
          {localStorage.getItem("user_type") == "CONSUMER" ? (
            <Link className={classes.footerLink1} href="#">
              {"Faq"}
            </Link>
          ) : (
            <> </>
          )}
        </Grid>
      </Grid>

      <Grid xs={3} direction={"column"}>
        <div className={classes.footerTitle}> Connect With Us</div>
        <IconButton
          onClick={() => {
            window.open("https://www.facebook.com/hydrafacial/");
          }}
        >
          <FacebookIcon style={{ background: "white" }} />
        </IconButton>
        {localStorage.getItem("user_type") == "CONSUMER" ? (
          <>
            <IconButton
              onClick={() => {
                window.open("https://www.youtube.com/user/OfficialHydraFacial");
              }}
            >
              <YouTubeIcon style={{ background: "white" }} />
            </IconButton>

            <IconButton
              onClick={() => {
                window.open("https://twitter.com/hydrafacial/");
              }}
            >
              <TwitterIcon />
            </IconButton>
          </>
        ) : (
          <IconButton
            onClick={() => {
              window.open("https://www.instagram.com/hydrafacial/");
            }}
          >
            <InstagramIcon style={{ background: "white" }} />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
};

export default Footer;
