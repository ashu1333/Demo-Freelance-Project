import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { IMAGES_URL } from '../../../constants/Images';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Header from '../../common/header'
import Footer from '../../common/footer'
import Header1 from './header1'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import Post_View from './Post_View';
import Card_View from './Card_View';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import { NewsActions } from '../../../redux/common/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 110,
  },
  icon1: {
    fontSize: '20px',
    backgroundColor: 'white',
    color: 'black',
    padding: '0px 0px 0px 40px'
  },
  gridList: {
    width: '100%',
    height: 'auto',
    overflow: 'auto',

  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

}));


interface NewsProps {
  name: string,
  news: any,
  post: any,

};

const News: React.SFC<NewsProps> = ({ name }) => {
  React.useEffect(() => {
    let data = {}
    let data1 = {}
    dispatch(NewsActions.news(data));
    dispatch(NewsActions.post(data1));
    return () => { };
  }, []);
  const newsList = useSelector((state: NewsProps) => state.news.news ? state.news.news : {});
  const newsPost = useSelector((state: NewsProps) => state.news.news ? state.news.news : {});
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [post, setpost] = useState([
    {
      "img": IMAGES_URL.PIC1,
      "title": "START YOUR SKIN HEALTH JOURNEY WITH HYDRAFACIALIST",
      "description": "Have you taken steps to improve your skin health? If not, you need to! Start your skin health journey with HydraFacialist",
      "post_id": 1,
      "postedby": "ram singh",
      "category": "Skin Care",
      "subcategory": "latest",
      "date": "1-11-2020",

    },
    {
      "img": IMAGES_URL.PIC2,
      "title": "DERMALINFUSION VS. HYDRAFACIAL: WHY DERMALINFUSION IS BETTER",
      "description": "HydraFacial is marketed as a multi-tasking treatment that cleanses, exfoliates, extracts, and infuses",
      "post_id": 2,
      "postedby": "hari singh",
      "category": "Skin Care",
      "subcategory": "most popular",
      "date": "2-11-2020",

    },
    {
      "img": IMAGES_URL.PIC3,
      "title": "I TRIED THE VACUUM FACIAL THAT???S ALL OVER INSTAGRAM, AND THIS IS",
      "description": "The treatment in question is called a HydraFacial ??? and it???s blown up in",
      "post_id": 3,
      "postedby": "mohan singh",
      "category": "Beauty Care",
      "subcategory": "most popular",
      "date": "3-11-2020",
      //comment_no":"0",
    },
    {
      "img": IMAGES_URL.PIC4,
      "title": "START YOUR SKIN HEALTH JOURNEY WITH HYDRAFACIALIST",
      "description": "Have you taken steps to improve your skin health? If not, you need to! Start your skin health journey with HydraFacialist",
      "post_id": 4,
      "postedby": "ram4 singh",
      "category": "Skin Care",
      "subcategory": "latest",
      "date": "4-11-2020",
      //comment_no":"0",
    },
    {
      "img": IMAGES_URL.PIC5,
      "title": "DERMALINFUSION VS. HYDRAFACIAL: WHY DERMALINFUSION IS BETTER",
      "description": "HydraFacial is marketed as a multi-tasking treatment that cleanses, exfoliates, extracts, and infuses",
      "post_id": 5,
      "postedby": "hari5 singh",
      "category": "Skin Care",
      "subcategory": "most popular",
      "date": "5-11-2020",
      //comment_no:"0",
    },
    {
      "img": IMAGES_URL.PIC1,
      "title": "I TRIED THE VACUUM FACIAL THAT???S ALL OVER INSTAGRAM, AND THIS IS",
      "description": "The treatment in question is called a HydraFacial ??? and it???s blown up in",
      "post_id": 6,
      "postedby": "mohan6 singh",
      "category": "Beauty Care",
      "subcategory": "latest",
      "date": "6-11-2020",
      //comment_no":"0",
    }
  ]);
  
  const [reply, setreply] = useState([{}]);
  const [flag, setFlag] = useState(true);
  const [flag1, setFlag1] = useState(true);
  const [PostId, setPostId] = useState(0);
  const [Sub_Cat, setSub_Cat] = useState("");
  const [val, setVal] = useState("News");
  const [flag3, setFlag3] = useState(false);

  return (
    <div style={{ overflow: "hidden" }} >
      <Header />
      <Header1 name={val} />
      <br />
      <br />
      <Grid container xs={12} component="main" >
        <CssBaseline />

        <Grid item xs={7} sm={12} md={8} style={{ padding: '0px 0px 0px 100px' }}>
          {flag ? <Card_View data={newsList} /> : <Post_View flag1={flag1} data={post} type={val} id={PostId} sub_cat={Sub_Cat} />}
          {flag3 ?

            <div>
              <Typography variant="h5" style={{ padding: '10px 10px 10px 20px', fontWeight: 'normal', textAlign: 'center', }}>YOU MAY ALSO LIKE</Typography>
              <GridList className={classes.gridList} cols={4} spacing={30}>
                {
                  post.filter(tile => tile.subcategory === Sub_Cat).map((tile, i) => (
                    tile.post_id != PostId &&
                    <GridListTile key={tile.post_id} style={{ border: '0px solid #555', margin: '15px 0px 40px 0px' }}>
                      <Link onClick={() => setPostId(tile.post_id)}>
                        <img src={tile.img} alt={tile.title} style={{ width: '100%', height: '70%', borderRadius: '7px', }} />
                        <Typography style={{ fontSize: '10px', color: '#444' }} >
                          {tile.title}
                          <br />
                          {tile.date}
                        </Typography>
                      </Link>
                    </GridListTile>

                  ))}
              </GridList>

            </div>
            : <> </>
          }

        </Grid>
        <Grid item xs={5} sm={9} md={4} style={{ borderLeft: '1px solid #ddd', }} >
          <Grid style={{ paddingBottom: '20px', }}>
            <Typography variant="h5" style={{
              margin: '0px 0px 25px 10px', borderBottom: '1px solid #ccc',
              lineHeight: '57px', fontWeight: 'lighter',
            }} >
              Solution For
                </Typography>
            <Link onClick={() => { setVal("Skin Care"); setFlag(false); setFlag1(true); setFlag3(false); }} style={{ margin: '0px 10px 5px 25px', cursor: 'pointer', }} variant="body2">{"Skin Care"}</Link><br />
            <Link onClick={() => { setVal("Hair Care"); setFlag(false); setFlag1(true); setFlag3(false); }} style={{ margin: '0px 10px 5px 25px', cursor: 'pointer', }} variant="body2">{"Hair Care"}</Link><br />
            <Link onClick={() => { setVal("Beauty Care"); setFlag(false); setFlag1(true); setFlag3(false); }} style={{ margin: '0px 10px 5px 25px', cursor: 'pointer', }} variant="body2">{"Beauty"}</Link><br />

          </Grid>

          <Grid >

            <Typography variant="h5" style={{
              margin: '0px 0px 25px 10px', borderBottom: '1px solid #ccc',
              borderTop: '1px solid #ccc',
              lineHeight: '57px', fontWeight: 'lighter',
            }} >
              Most Popular
       </Typography>

            <GridList cellHeight={100} className={classes.gridList} cols={1} spacing={10}  >

              {post.filter(tile => tile.subcategory === "most popular").map((tile, i) => (

                i < 3 &&

                <GridListTile key={tile.post_id} >
                  <div>

                    <Link onClick={() => { setFlag(false); setFlag1(false); setPostId(tile.post_id); setSub_Cat(tile.subcategory); setFlag3(true); }}>
                      <Grid container xs={12} spacing={4} direction="row" style={{ padding: '0% 0px', margin: '-10px 25px 0px 4px' }}>
                        <Grid >
                          <ButtonBase style={{ width: 128, height: 110, margin: '0px 0px 5px 15px', }}>
                            <img alt="complex" src={tile.img} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '6px', }} />
                          </ButtonBase>
                        </Grid>

                        <Grid item xs  >
                          <Grid item xs container direction="column" >
                            <Grid>
                              <Typography style={{
                                fontWeight: 'normal', color: '#222', paddingBottom: '0px',
                                textTransform: 'none', fontSize: '12px', cursor: 'pointer', textDecoration: 'none',
                              }}>
                                {tile.title}
                              </Typography>
                            </Grid>


                            <Grid item xs  >
                              <Typography variant="body2" style={{
                                fontWeight: 'normal', color: '#888', paddingRight: '15px', paddingBottom: '5px',
                                textTransform: 'none', fontSize: '11px', cursor: 'pointer', textDecoration: 'none',
                              }}>
                                {tile.description}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Link>
                  </div>
                </GridListTile>
              ))}
            </GridList>
          </Grid>
          <Grid>
            <Typography variant="h5" style={{
              margin: '20px 0px -10px 10px', borderBottom: '1px solid #ccc', borderTop: '1px solid #ccc',
              lineHeight: '57px', fontWeight: 'lighter',
            }} >
              Latest
                </Typography>
            <br />

            <GridList cellHeight={100} className={classes.gridList} cols={1} spacing={10}  >
              {post.filter(tile => tile.subcategory === "latest").map((tile, i) => (
                i < 3 &&

                <GridListTile key={tile.post_id} >
                  <div>
                    <Link onClick={() => { setFlag(false); setFlag1(false); setPostId(tile.post_id); setSub_Cat(tile.subcategory); setFlag3(true); }}>
                      <Grid container xs={12} spacing={4} direction="row" style={{ padding: '0% 0px', margin: '-10px 25px 0px 4px' }}>
                        <Grid >
                          <ButtonBase style={{ width: 128, height: 110, margin: '0px 0px 5px 15px', }}>
                            <img alt="complex" src={tile.img} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '6px', }} />
                          </ButtonBase>
                        </Grid>

                        <Grid item xs  >
                          <Grid item xs container direction="column" >
                            <Grid>
                              <Typography style={{
                                fontWeight: 'normal', color: '#222', paddingBottom: '0px',
                                textTransform: 'none', fontSize: '12px', cursor: 'pointer', textDecoration: 'none',
                              }}>
                                {tile.title}
                              </Typography>
                            </Grid>


                            <Grid item xs  >
                              <Typography variant="body2" style={{
                                fontWeight: 'normal', color: '#888', paddingRight: '15px', paddingBottom: '5px',
                                textTransform: 'none', fontSize: '11px', cursor: 'pointer', textDecoration: 'none',
                              }}>
                                {tile.description}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Link>
                  </div>
                </GridListTile>
              ))}
            </GridList>
          </Grid>

          <Grid>
            <Typography variant="h5" style={{
              margin: '0px 0px 25px 10px', borderBottom: '1px solid #ccc', borderTop: '1px solid #ccc',
              lineHeight: '57px', fontWeight: 'lighter',
            }} >
              Instagram Feeds
                </Typography>
            <br />

            <Grid container xs={12} spacing={5} direction="row" style={{ padding: '0% 0px', margin: '0px 0px 0px 4px' }}>
              <Grid>
                <ButtonBase style={{ width: 128, height: 110 }} ></ButtonBase>
              </Grid>

              <Grid item xs={12} sm container >
                <Grid item xs container direction="column" alignItems={"stretch"}>
                  <Grid>
                    <Typography style={{
                      fontWeight: 'normal', color: '#222', paddingBottom: '0px',
                      textTransform: 'none', fontSize: '12px', cursor: 'pointer', textDecoration: 'none',
                    }}>

                    </Typography>
                  </Grid>
                  <Grid item xs  >
                    <Typography variant="body2" style={{
                      fontWeight: 'normal', color: '#888', paddingRight: '15px', paddingBottom: '5px',
                      textTransform: 'none', fontSize: '11px', cursor: 'pointer', textDecoration: 'none',
                    }}>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div >
  )
}

export default News;