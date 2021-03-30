import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import useForceUpdate from 'use-force-update';
import Header from '../../common/header'
import Footer from '../../common/footer'
import Header1 from './header1'
import Banner from './banner'
//import Footer from '../common/footer'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
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
  newsnTitle: {
    fontSize: '40px',
    textAlign: 'center',
    lineHeight: '28px',
    padding: '0px 0px',
    colors: '#111',
    fontWeight: 'bold',
    fontFamily: 'BebasNeue Light',
  },

}));


interface NewsProps {
  props: string,
  news: any,
  post: any,
  mostpopular: any,
  feedcategory: any,
  location: any,
  state: any,
  feeddetail: any,
  latest: any


};

const News: React.SFC<NewsProps> = (props) => {
  const newsList = useSelector((state: NewsProps) => state.news.news ? state.news.news : { data: { data: { items: [] } } });
  const mostPopular = useSelector((state: NewsProps) => state.news.most_popular ? state.news.most_popular : { data: { data: { items: [] } } });
  const latest = useSelector((state: NewsProps) => state.news.latest ? state.news.latest : { data: { data: { items: [] } } });
  const feedCategory = useSelector((state: NewsProps) => state.news.feed_category ? state.news.feed_category : { data: [] });
  const classes = useStyles();
  const dispatch = useDispatch();
  const [reply, setreply] = useState([{}]);
  const [flag, setFlag] = useState(true);
  const [flag1, setFlag1] = useState(true);
  const [PostId, setPostId] = useState(0);
  const [Sub_Cat, setSub_Cat] = useState("");
  const [val, setVal] = useState("News");
  const [flag3, setFlag3] = useState(false);

  React.useEffect(() => {
    let data = {}
    let data1 = {}
    dispatch(NewsActions.news(data));
    dispatch(NewsActions.most_popular("most_popular"));
    dispatch(NewsActions.latest("latest"));
    dispatch(NewsActions.feed_category(data));



    return () => { };
  }, []);

  const feedsdetails = (data, data1) => {


    dispatch(NewsActions.feed_detail(data));

  }

  function YouMayAlsoLike() {
    let data = {}
    dispatch(NewsActions.feed_list(data));
  }

  const feedList = useSelector((state: NewsProps) => state.news.feed_list ? state.news.feed_list : { data: { data: { items: [] } } });

  const handleNews = () => {
    setFlag(true);
  }

  const handlePost = () => {
    let data = {}
    dispatch(NewsActions.feed_list(data));
  }


  return (
    <div style={{ overflow: "hidden" }} >

      <Header handleNews={handleNews} />

      <br></br> <br></br> <br></br>
      <Typography className={classes.newsnTitle}>{"HOT OFF THE PRESS!"}</Typography><br></br><br></br>
      <br />
      <br />
      <Grid container xs={12} component="main" >
        <CssBaseline />




        <Grid item xs={7} sm={12} md={8} style={{ padding: '0px 0px 0px 100px' }}>
          {
            flag ?
              <Card_View data={newsList} />
              :
              <Post_View flag1={flag1} type={val} id={PostId} sub_cat={Sub_Cat} />


          }




          {flag3 ?

            <div>
              <Typography variant="h5" style={{ padding: '10px 10px 10px 20px', fontWeight: 'normal', textAlign: 'center', }}>YOU MAY ALSO LIKEiiiiiii</Typography>
              <GridList className={classes.gridList} cols={4} spacing={30}>
                {
                  feedList?.data?.data?.items?.filter(tile => tile.category == Sub_Cat).map((tile, i) => (

                    <GridListTile key={tile.id} style={{ border: '0px solid #555', margin: '15px 0px 40px 0px' }}>
                      <Link>
                        <img src={"https://linq.hydrafacial.com/uploads/feeds/" + tile.image} alt={tile.title} style={{ width: '100%', height: '70%', borderRadius: '7px', }} />
                        <Typography style={{ fontSize: '10px', color: '#444' }} >
                          {tile.title}
                          <br />
                          {tile.category}
                        </Typography>
                      </Link>
                    </GridListTile>

                  ))}
              </GridList>

            </div>

            : <></>}

        </Grid>


        <Grid item xs={5} sm={9} md={4} style={{ borderLeft: '1px solid #ddd', }} >
          <Grid style={{ paddingBottom: '20px', }}>
            <Typography variant="h5" style={{
              margin: '0px 0px 25px 10px', borderBottom: '1px solid #ccc',
              lineHeight: '57px', fontWeight: 'lighter',
            }} >
              Solution For
                </Typography>
            {feedCategory?.data?.data.map((data) => (<>
              <Link onClick={() => { setVal(data.category); setFlag(false); setFlag1(true); setFlag3(false); YouMayAlsoLike(); }} style={{ margin: '0px 10px 5px 25px', cursor: 'pointer', }} variant="body2">{data.category}</Link><br />


            </>))}

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

              {mostPopular?.data?.data?.items?.map((tile) => (<>
                <GridListTile key={tile.post_id} >
                  <div>

                    <Link onClick={() => { setFlag(false); setFlag1(false); setPostId(tile.post_id); setSub_Cat(tile.category); setFlag3(true); feedsdetails(tile.slug, tile.category) }}>
                      <Grid container xs={12} spacing={4} direction="row" style={{ padding: '0% 0px', margin: '-10px 25px 0px 4px' }}>
                        <Grid >
                          <ButtonBase style={{ width: 128, height: 110, margin: '0px 0px 5px 15px', }}>
                            <img alt="complex" src={"https://linq.hydrafacial.com/uploads/feeds/" + tile.image} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '6px', }} />
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



              </>))}


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

              {latest?.data?.data?.items?.map((tile) => (<>
                <GridListTile key={tile.post_id} >
                  <div>
                    <Link onClick={() => { setFlag(false); setFlag1(false); setPostId(tile.post_id); setSub_Cat(tile.subcategory); setFlag3(true); feedsdetails(tile.slug, tile.category); setSub_Cat(tile.category) }}>
                      <Grid container xs={12} spacing={4} direction="row" style={{ padding: '0% 0px', margin: '-10px 25px 0px 4px' }}>
                        <Grid >
                          <ButtonBase style={{ width: 128, height: 110, margin: '0px 0px 5px 15px', }}>
                            <img alt="complex" src={"https://linq.hydrafacial.com/uploads/feeds/" + tile.image} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '6px', }} />
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
                                {tile.description}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Link>
                  </div>
                </GridListTile>



              </>))}



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