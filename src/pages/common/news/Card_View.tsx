import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { useState } from "react";
import { IMAGES_URL } from "../../../constants/Images";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Modal_View from "./Modal_View";
import ImageSlides from "react-imageslides";
import Modal from "@material-ui/core/Modal";
import { NewsActions } from "../../../redux/common/actions";
import { months } from "../../../constants/static";

import { shallowEqual, useSelector, useDispatch } from "react-redux";

interface NewsProps {
  name: string;
  news: any;
  post: any;
}

interface monthList {
  [key: string]: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      heigth: "auto",
      // backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: "100%",
      height: "auto",
      overflow: "auto",
    },

    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
    icon1: {
      fontSize: "20px",
      backgroundColor: "white",
      color: "black",
      padding: "0px 0px 0px 40px",
    },
  })
);

export default function Card_View(props) {
  const images = [
    "http://dingyue.nosdn.127.net/0UDLpU6BsCNm9v9OpT0Dhn=nHKJFC6SMByz8bMWxFM=1t1531988836046compressflag.jpeg",
    "http://dingyue.nosdn.127.net/9sFTTWDQoHjxyIkU9wzm8CiDNVbq48Mwf2hyhgRghxA5O1527909480497compressflag.jpeg",
    "http://dingyue.nosdn.127.net/eSJPDtcP9NBvEOIMPyPLxwpJSZIu4D36qDss2RGQjNHBp1531990042001compressflag.jpeg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503235534249&di=4c198d5a305627d12e5dae4c581c9e57&imgtype=0&src=http%3A%2F%2Fimg2.niutuku.com%2Fdesk%2Fanime%2F0529%2F0529-17277.jpg",
  ];

  console.log(props);
  const classes = useStyles();
  const [count, setCount] = useState("All");
  const [flag, setFlag] = useState(true);
  const [flag1, setFlag1] = useState(true);
  const [slide, setSlide] = useState(false);
  const [print, setPrint] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [cat, setcat] = React.useState(0);
  const [on, seton] = React.useState(false);
  const newsList = useSelector((state: NewsProps) =>
    state.news.news ? state.news.news : { data: { data: { items: [] } } }
  );
  console.log(JSON.stringify(newsList?.data?.data?.items?.[0]));

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    //setOpen(true);
  };

  const handleSlide = () => {
    setSlide(true);
  };
  const [monthList, setmonthList] = React.useState<monthList>([]);

  React.useState(() => {
    let currentMonth = new Date().getMonth();

    let preMonths = months.slice(0, currentMonth);
    let nextMonths = months.slice(currentMonth, months.length);
    nextMonths = nextMonths.concat(preMonths);

    setmonthList(nextMonths);
    console.log(monthList);
  });
  console.log(monthList);
  const handleCloseSlide = () => {
    setSlide(false);
  };

  function getDateIfDate(d) {
    var m = d.match(/\/Date\((\d+)\)\//);
    return m
      ? new Date(+m[1]).toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        })
      : d;
  }

  function changedate(data) {
    let date = getDateIfDate(data);
    return date.split("T")[0];
  }

  console.log(getDateIfDate("2019-11-01T10:00:09.000Z"));

  return (
    <div className={classes.root}>
      <Grid
        xs={12}
        sm={12}
        md={12}
        style={{ padding: "10px", border: "none", float: "left", width: "90%" }}
      >
        <Link
          style={{
            color: "#222",
            fontSize: "15px",
            paddingRight: "25px",
            paddingBottom: "10px",
            lineHeight: "50px",
            cursor: "pointer",
            borderBottom: "none",
          }}
          onClick={() => {
            seton(false);
          }}
          variant="body2"
        >
          {"ALL"}
        </Link>

        <Link
          style={{
            color: "#222",
            fontSize: "15px",
            paddingRight: "25px",
            paddingBottom: "10px",
            lineHeight: "50px",
            cursor: "pointer",
            borderBottom: "none",
          }}
          onClick={() => {
            seton(true);
            setcat(1);
          }}
          variant="body2"
        >
          {"COMPANY NAME    "}
        </Link>

        <Link
          style={{
            color: "#222",
            fontSize: "15px",
            paddingRight: "25px",
            paddingBottom: "10px",
            lineHeight: "50px",
            cursor: "pointer",
            borderBottom: "none",
          }}
          onClick={() => {
            setcat(2);
            seton(true);
          }}
          variant="body2"
        >
          {"ONLINE    "}
        </Link>

        <Link
          style={{
            color: "#222",
            fontSize: "15px",
            paddingRight: "25px",
            paddingBottom: "10px",
            lineHeight: "50px",
            cursor: "pointer",
            borderBottom: "none",
          }}
          onClick={() => {
            setPrint(true);
            setcat(3);
            seton(true);
          }}
          variant="body2"
        >
          {"PRINT    "}
        </Link>

        <Divider />
      </Grid>

      <GridList
        cellHeight={100}
        className={classes.gridList}
        cols={4}
        spacing={10}
      >
        {on
          ? newsList?.data?.data?.items?.map(
              (tile) =>
                tile.category_id === cat && (
                  <>
                    <GridListTile
                      key={tile.key}
                      style={{
                        border: "1px solid #eee",
                        cursor: "pointer",
                        margin: "25px 25px 0px 0px",
                        paddingBottom: "15px",
                        backgroundColor: "#fff",
                        width: "170px",
                      }}
                    >
                      <Link
                        onClick={() => {
                          print ? setSlide(true) : window.open(tile.news_link);
                        }}
                      >
                        <img
                          src={
                            "https://linq.hydrafacial.com/uploads/news/" +
                            tile.logo_image
                          }
                          style={{
                            height: "80%",
                            width: "150px",
                            padding: "0px 0px 0px 0px",
                          }}
                        />
                        <Typography
                          style={{ fontSize: "11px", lineHeight: "16px," }}
                          className={classes.icon1}
                        >
                          {tile.publish_date}
                        </Typography>
                      </Link>
                    </GridListTile>
                  </>
                )
            )
          : newsList?.data?.data?.items?.map((tile) => (
              <>
                <GridListTile
                  key={tile.key}
                  style={{
                    border: "1px solid #eee",
                    cursor: "pointer",
                    margin: "25px 25px 0px 0px",
                    paddingBottom: "15px",
                    backgroundColor: "#fff",
                    width: "170px",
                  }}
                >
                  <Link
                    onClick={() => {
                      print ? setSlide(true) : window.open(tile.news_link);
                    }}
                  >
                    <img
                      src={
                        "https://linq.hydrafacial.com/uploads/news/" +
                        tile.logo_image
                      }
                      style={{
                        height: "80%",
                        width: "150px",
                        padding: "0px 0px 0px 0px",
                      }}
                    />
                    <Typography
                      style={{ fontSize: "11px", lineHeight: "16px," }}
                      className={classes.icon1}
                    >
                      {changedate(tile.publish_date)}
                    </Typography>
                  </Link>
                </GridListTile>
              </>
            ))}
      </GridList>

      {slide ? (
        <>
          <Modal
            open={slide}
            onClose={handleCloseSlide}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{
              width: "150%",
              margin: "20px 0px 0px 400px",
              outline: "0",
            }}
          >
            <ImageSlides
              index={0}
              tapClose={true}
              images={images}
              isOpen
              showPageButton
            />
          </Modal>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
