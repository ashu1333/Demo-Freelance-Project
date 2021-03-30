import * as React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { IMAGES_URL } from "../../../constants/Images";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useState } from "react";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import TelegramIcon from "@material-ui/icons/Telegram";
import Link from "@material-ui/core/Link";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import EcoIcon from "@material-ui/icons/Eco";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import PhotoIcon from "@material-ui/icons/Photo";
import CloseIcon from "@material-ui/icons/Close";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import Modal_View from "./Modal_View";
import { NewsActions } from "../../../redux/common/actions";
import { CommentPostRequest } from "../../../redux/news/model";
import { useSelector, useDispatch } from "react-redux";

Storage.prototype.getObject = async function (key) {
  return await this.getItem(key);
};
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    heigth: "auto",
    width: "auto",
    // backgroundColor: theme.palette.background.paper,
  },

  gridList: {
    width: "auto",
    height: "auto",
    overflow: "auto",
  },
  icon1: {
    fontSize: "20px",
    backgroundColor: "white",
    color: "black",
    padding: "0px 0px 0px 25px",
  },

  button: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  paper1: {
    position: "absolute",
    width: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "95%",
    maxHeight: "100%",
  },
  title: {
    color: theme.palette.primary.light,
  },
}));
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();
}

interface NewsProps {
  name: string;
  news: any;
  post: any;
  mostpopular: any;
  feed_detail: any;
}

{
  /*COMPONENT*/
}

const Post_View = (props) => {
  console.log(props);

  {
    /*STATES*/
  }

  const [comment, setcomment] = useState([
    {
      post_id: 0,
      comment_id: 0,
      postedby: "",
      date: "",
      time: "",
      text: "",
    },
  ]);

  const [rply, setrply] = useState([
    {
      post_id: 0,
      comment_id: 0,
      rply_id: 0,
      postedby: "",
      date: "",
      time: "",
      text: "",
    },
  ]);

  let [rply_flag, setRplyFlag] = useState(false);
  let [rply_flag1, setRplyFlag1] = useState(0);
  let [rply_btn, setRplyBtn] = useState(false);
  const [c_flag, setc_flag] = useState(false);
  const [flag, setflag] = useState(0);
  const [ct, setct] = useState("");
  const [rt, setrt] = useState("");
  const [s_button, sets_button] = useState(false);
  const [s_button1, sets_button1] = useState(false);
  const [value, setvalue] = useState("");
  const [open, setOpen] = React.useState(false);
  const [social, setsocial] = React.useState(0);
  //const [open1, setOpen1] = React.useState("");
  const [cat, setcat] = React.useState("");
  const [cmnt, setcmnt] = React.useState<CommentPostRequest>({});
  const [feedid, setfeedid] = React.useState("");
  const [data, setdata] = React.useState({
    data: { data: { user: { id: "" } } },
  });

  const dispatch = useDispatch();

  React.useEffect(() => {
    localStorage.getObject("user").then((data) => setdata(JSON.parse(data)));
    let data = {};
    dispatch(NewsActions.feed_list(data));
    return () => {};
  }, []);
  const feedList = useSelector((state: NewsProps) =>
    state.news.feed_list
      ? state.news.feed_list
      : { data: { data: { items: [] } } }
  );

  console.log(JSON.stringify(feedList?.data?.data?.items?.[0]));
  const feedDetail = useSelector((state: NewsProps) =>
    state.news.feed_detail ? state.news.feed_detail : { data: { data: {} } }
  );
  console.log(feedDetail?.data?.data?.slug);

  // setcat(props.type);

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  {
    /*FUNCTIONS*/
  }

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setvalue(e.target.value);
  };

  const handlect = (e) => {
    setct(e.target.value);
  };

  const handlert = (e) => {
    setrt(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSocialButtons = () => {
    sets_button(!s_button);
  };

  const handlesocial1 = () => {
    sets_button1(!s_button1);
  };

  const handleChange = (event: any) => {
    setcmnt({
      ...cmnt,

      [event?.target.name]: event?.target.value,
      user_id: data?.data?.data?.user?.id,
      feed_id: feedid,
    });
    console.log(cmnt);
    // setErrors({ ...errors, selected: event?.target.name })
  };
  const handlesubmit = () => {
    console.log(cmnt);

    dispatch(NewsActions.comment_post(cmnt));
  };

  const body = (
    <div className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
    </div>
  );

  if (props.flag1) {
    return (
      <div>
        <Grid
          container
          xs={12}
          component="main"
          direction="column"
          className={classes.root}
          style={{ margin: "0px 20px 0px 0px" }}
        >
          <Grid item xs={12}>
            <Grid
              container
              xs={12}
              direction="row"
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                border: "1px solid #eee",
              }}
            >
              <Grid item xs={1}>
                <img
                  src="/images/user_logo.png"
                  style={{ width: "50%", margin: "20px 0px 0px 10px" }}
                />
              </Grid>

              <Grid item xs={8} style={{ margin: "20px 0px 10px 0px" }}>
                <Typography>
                  Aesthetician Loyalty
                  <br />
                  Share a photo or write something
                </Typography>

                <Typography></Typography>
              </Grid>

              <Grid item xs={3} alignContent="flex-end" alignItems="flex-end">
                <Button
                  type="button"
                  onClick={handleOpen}
                  style={{ float: "right", margin: "20px 20px 0 0" }}
                >
                  ADD NEW POST
                </Button>
                {open ? <Modal_View open={open} /> : <> </>}
              </Grid>
            </Grid>
            <br />
            <br />

            {feedList?.data?.data?.items
              ?.filter((tile) => tile.category == props.type)
              .map(
                (tile, i) =>
                  i < 1 && (
                    <div
                      style={{
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        border: "1px solid #eee",
                      }}
                    >
                      <Typography
                        variant="h4"
                        style={{
                          padding: "15px 0px 0px 25px",
                          fontWeight: "lighter",
                        }}
                      >
                        {tile.category}
                      </Typography>

                      <Typography style={{ padding: "0px 0px 10px 30px" }}>
                        <i
                          style={{
                            fontSize: "14px",
                            fontWeight: "lighter",
                            color: "#666",
                          }}
                        >
                          Posted By B{tile.postedby} on {tile.date} |{" "}
                          {tile.category}
                        </i>
                      </Typography>

                      <img
                        src={
                          "https://linq.hydrafacial.com/uploads/feeds/" +
                          tile.image
                        }
                        className={classes.img}
                        style={{
                          borderRadius: "10px",
                          margin: "0px auto",
                          width: "auto",
                          height: "auto",
                          minHeight: "auto",
                        }}
                      />

                      <Typography style={{ padding: "10px 0px 10px 29px" }}>
                        {tile.description}
                      </Typography>

                      <Grid container xs={12} direction="row">
                        <Grid item xs={4} style={{ padding: "0px 0 0 10px" }}>
                          <IconButton
                            onClick={() => {
                              setRplyBtn(!rply_btn);
                            }}
                          >
                            <MessageOutlinedIcon style={{ fontSize: "10px" }} />{" "}
                          </IconButton>
                          {
                            comment.filter((a) => a.post_id == tile.post_id)
                              .length
                          }{" "}
                          Comment
                        </Grid>

                        <Grid item xs={4} style={{ padding: "0px 0 0 10px" }}>
                          <IconButton onClick={handleSocialButtons}>
                            <ShareOutlinedIcon style={{ fontSize: "small" }} />
                          </IconButton>{" "}
                          share
                        </Grid>

                        {s_button ? (
                          <Grid item xs={4} style={{ padding: "0px 0 0 10px" }}>
                            <span>
                              <IconButton
                                onClick={() => {
                                  window.open("https://www.facebook.com");
                                }}
                              >
                                <FacebookIcon
                                  style={{
                                    fill: "blue",
                                    width: "10",
                                    height: "10",
                                  }}
                                />
                              </IconButton>
                              <IconButton
                                onClick={() => {
                                  window.open("https://www.twitter.com");
                                }}
                              >
                                <TwitterIcon
                                  style={{
                                    fill: "#1DA1F2",
                                    width: "10",
                                    height: "10",
                                  }}
                                />
                              </IconButton>
                              <IconButton
                                onClick={() => {
                                  window.open("https://www.linkedin.com");
                                }}
                              >
                                <LinkedInIcon
                                  style={{
                                    fill: "#0072b1",
                                    width: "10",
                                    height: "10",
                                  }}
                                />{" "}
                              </IconButton>
                              <IconButton
                                onClick={() => {
                                  window.open("https://www.pinterest.com");
                                }}
                              >
                                {" "}
                                <PinterestIcon
                                  style={{
                                    fill: "#E60023",
                                    width: "10",
                                    height: "10",
                                  }}
                                />
                              </IconButton>
                            </span>
                          </Grid>
                        ) : (
                          <> </>
                        )}
                      </Grid>

                      <FormControl
                        variant="outlined"
                        style={{ width: "97%", padding: "15px 0px 15px 30px" }}
                      >
                        <OutlinedInput
                          id="outlined-adornment-weight"
                          placeholder="Write Comment"
                          onChange={(input) => {
                            handleChange(input);
                            setfeedid(tile.id);
                          }}
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton onClick={() => handlesubmit()}>
                                <TelegramIcon style={{ color: "secondary" }} />
                              </IconButton>
                            </InputAdornment>
                          }
                          aria-describedby="outlined-weight-helper-text"
                          inputProps={{
                            "aria-label": "weight",
                          }}
                          labelWidth={0}
                          name="comment"
                        />
                      </FormControl>
                      {/*Comment GRid*/}

                      {rply_btn ? (
                        comment.map(
                          (ct, i) =>
                            i > 0 && (
                              <div>
                                <Grid item xs={12}>
                                  <Grid
                                    container
                                    xs={12}
                                    direction="row"
                                    style={{
                                      backgroundColor: "white ",
                                      padding: "0px 0px 0px 10px",
                                    }}
                                  >
                                    <Grid item xs={1}>
                                      <img
                                        src="/images/user_logo.png"
                                        style={{
                                          width: "50%",
                                          height: "50%",
                                          margin: "20px 0px 0px 10px",
                                        }}
                                      />
                                    </Grid>

                                    <Grid
                                      item
                                      xs={8}
                                      style={{ margin: "20px 0px 0px 0px" }}
                                    >
                                      <Typography>
                                        {ct.postedby}
                                        <br />
                                        {ct.date}
                                        <br />
                                        {ct.text}
                                      </Typography>

                                      {rply_btn ? (
                                        <Button
                                          onClick={() => {
                                            setRplyFlag(true);
                                            setRplyFlag1(ct.comment_id);
                                          }}
                                        >
                                          rply
                                        </Button>
                                      ) : (
                                        <> </>
                                      )}
                                      <br />
                                      {/*RPLY FORM*/}
                                      {rply_flag &&
                                      ct.comment_id == rply_flag1 ? (
                                        <FormControl
                                          variant="outlined"
                                          style={{
                                            width: "97%",
                                            padding: "15px 0px 15px 30px",
                                          }}
                                        >
                                          <OutlinedInput
                                            id="outlined-adornment-weight"
                                            placeholder="Write rPLY"
                                            onChange={(e) => handlert(e)}
                                            endAdornment={
                                              <InputAdornment position="end">
                                                <IconButton
                                                  onClick={(e) => {
                                                    setrply((prevState) => [
                                                      ...prevState,
                                                      {
                                                        post_id: ct.post_id,
                                                        comment_id:
                                                          ct.comment_id,
                                                        rply_id:
                                                          rply[rply.length - 1]
                                                            .rply_id + 1,
                                                        postedby: ct.postedby,
                                                        date: ct.date,
                                                        time: ct.date,
                                                        text: rt,
                                                      },
                                                    ]);
                                                    setRplyFlag(false);
                                                  }}
                                                >
                                                  <TelegramIcon
                                                    style={{
                                                      color: "secondary",
                                                    }}
                                                  />
                                                </IconButton>
                                              </InputAdornment>
                                            }
                                            aria-describedby="outlined-weight-helper-text"
                                            inputProps={{
                                              "aria-label": "weight",
                                            }}
                                            labelWidth={0}
                                          />
                                        </FormControl>
                                      ) : (
                                        <> </>
                                      )}
                                      {/* Rply*/}
                                      {rply
                                        .filter(
                                          (tile) =>
                                            tile.comment_id == ct.comment_id
                                        )
                                        .map((tile, i) => (
                                          <div>
                                            <Grid item xs={12}>
                                              <Grid
                                                container
                                                xs={12}
                                                direction="row"
                                                style={{
                                                  backgroundColor: "white ",
                                                  padding: "0px 0px 0px 10px",
                                                }}
                                              >
                                                <Grid item xs={1}>
                                                  <img
                                                    src="/images/user_logo.png"
                                                    style={{
                                                      width: "50%",
                                                      height: "50%",
                                                      margin:
                                                        "20px 0px 0px 10px",
                                                    }}
                                                  />
                                                </Grid>

                                                <Grid
                                                  item
                                                  xs={8}
                                                  style={{
                                                    margin: "20px 0px 0px 0px",
                                                  }}
                                                >
                                                  <Typography>
                                                    {tile.postedby}
                                                    <br />
                                                    {tile.date}
                                                    <br />
                                                    {tile.text}
                                                  </Typography>
                                                </Grid>
                                              </Grid>
                                            </Grid>
                                          </div>
                                        ))}
                                    </Grid>
                                  </Grid>
                                </Grid>
                                <hr />
                              </div>
                            )
                        )
                      ) : (
                        <> </>
                      )}
                    </div>
                  )
              )}
          </Grid>
        </Grid>

        {feedList?.data?.data?.items
          ?.filter((tile) => tile.category == props.type)
          .map(
            (tile, i) =>
              i > 0 && (
                <div
                  style={{
                    padding: "20px",
                    margin: "10px 20px 10px 0px",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    backgroundColor: "#fff",
                  }}
                >
                  <Grid container xs={12} spacing={0} direction="row">
                    <Grid xs={5} style={{ margin: "0px 10px 0px 0px" }}>
                      <ButtonBase>
                        <img
                          alt="complex"
                          src={
                            "https://linq.hydrafacial.com/uploads/feeds/thumbnail/" +
                            tile.imgage
                          }
                          style={{
                            margin: "auto",
                            display: "block",
                            maxWidth: "100%",
                            maxHeight: "100%",
                          }}
                        />
                      </ButtonBase>
                    </Grid>

                    <Grid item xs>
                      <Grid item xs container direction="column">
                        <Grid>
                          <Typography>
                            <i> {tile.category}</i>
                          </Typography>
                          <Link>
                            <Typography
                              variant="h5"
                              style={{ padding: "0px 20px 0px 5px" }}
                            >
                              {tile.title}
                            </Typography>
                          </Link>
                          <Typography style={{ padding: "0px 17px 15px 5px" }}>
                            {tile.description}
                          </Typography>
                        </Grid>
                        <Grid container xs={12} direction="row">
                          <Grid item xs={4} style={{ padding: "0px 0 0 10px" }}>
                            <IconButton
                              onClick={() => {
                                setRplyBtn(!rply_btn);
                              }}
                            >
                              <MessageOutlinedIcon
                                style={{ fontSize: "10px" }}
                              />{" "}
                            </IconButton>
                            {
                              comment.filter((a) => a.post_id == tile.post_id)
                                .length
                            }{" "}
                            Comment
                          </Grid>

                          <Grid item xs={3} style={{ padding: "0px 0 0 10px" }}>
                            <IconButton onClick={handleSocialButtons}>
                              <ShareOutlinedIcon
                                style={{ fontSize: "small" }}
                              />
                            </IconButton>{" "}
                            share
                          </Grid>

                          {s_button ? (
                            <Grid
                              item
                              xs={5}
                              style={{ padding: "0px 0 0 10px" }}
                            >
                              <span>
                                <IconButton
                                  onClick={() => {
                                    window.open("https://www.facebook.com");
                                  }}
                                >
                                  <FacebookIcon
                                    style={{
                                      fill: "blue",
                                      width: "10",
                                      height: "10",
                                    }}
                                  />
                                </IconButton>
                                <IconButton
                                  onClick={() => {
                                    window.open("https://www.twitter.com");
                                  }}
                                >
                                  <TwitterIcon
                                    style={{
                                      fill: "#1DA1F2",
                                      width: "10",
                                      height: "10",
                                    }}
                                  />
                                </IconButton>
                                <IconButton
                                  onClick={() => {
                                    window.open("https://www.linkedin.com");
                                  }}
                                >
                                  <LinkedInIcon
                                    style={{
                                      fill: "#0072b1",
                                      width: "10",
                                      height: "10",
                                    }}
                                  />{" "}
                                </IconButton>
                                <IconButton
                                  onClick={() => {
                                    window.open("https://www.pinterest.com");
                                  }}
                                >
                                  {" "}
                                  <PinterestIcon
                                    style={{
                                      fill: "#E60023",
                                      width: "10",
                                      height: "10",
                                    }}
                                  />
                                </IconButton>
                              </span>
                            </Grid>
                          ) : (
                            <> </>
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid>
                    <FormControl
                      variant="outlined"
                      style={{ width: "100%", padding: "15px 0px 15px 21px" }}
                    >
                      <OutlinedInput
                        id="outlined-adornment-weight"
                        value={"Write a Comment"}
                        name="comment"
                        onChange={(input) => {
                          handleChange(input);
                          setfeedid(feedList?.data?.data?.id);
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton onClick={() => handlesubmit()}>
                              <TelegramIcon style={{ color: "action" }} />
                            </IconButton>
                          </InputAdornment>
                        }
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                          "aria-label": "weight",
                        }}
                        labelWidth={0}
                      />
                    </FormControl>
                  </Grid>
                </div>
              )
          )}
      </div>
    );
  } else {
    return (
      <div>
        <Grid
          container
          xs={12}
          component="main"
          direction="column"
          className={classes.root}
          style={{ margin: "0px 20px 0px 0px" }}
        >
          <div>
            <Grid item xs={12}>
              <Typography variant="h4" style={{ padding: "0px 0px 0px 25px" }}>
                {feedDetail?.data?.data?.title}
              </Typography>
              <Typography style={{ padding: "0px 0px 20px 25px" }}>
                <i style={{ fontSize: "15px" }}>
                  Posted By {"DUMMY"} on Nov 29 2019 |{" "}
                  {feedDetail?.data?.data?.category}
                </i>
              </Typography>

              <img
                src={
                  "https://linq.hydrafacial.com/uploads/feeds/" +
                  feedDetail?.data?.data?.image
                }
                className={classes.img}
              />

              <Typography style={{ padding: "10px 10px 0px 23px" }}>
                {feedDetail?.data?.data?.description}
              </Typography>
            </Grid>
          </div>

          <FormControl
            variant="outlined"
            style={{ width: "97%", padding: "15px 0px 15px 30px" }}
          >
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder="Write Comment"
              onChange={(input) => {
                handleChange(input);
                setfeedid(feedDetail?.data?.data?.id);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      handlesubmit();
                    }}
                  >
                    <TelegramIcon style={{ color: "secondary" }} />
                  </IconButton>
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              labelWidth={0}
              name="comment"
            />
          </FormControl>
          <Grid>
            <Paper>
              {feedDetail?.data?.data?.comment_details?.map((data) => (
                <>
                  <Typography>{data.comment}</Typography>
                </>
              ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
};
export default Post_View;
