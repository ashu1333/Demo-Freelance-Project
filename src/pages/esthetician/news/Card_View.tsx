
import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import {useState} from 'react';
import { IMAGES_URL } from '../../../constants/Images';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';






const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
   display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
     overflow: 'hidden',
     heigth:'auto',
     // backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: '100%',
      height: 'auto',
      overflow: 'auto',
      
    },
   
   
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    icon1: {
     fontSize:'20px',
      backgroundColor: 'white',
      color: 'black',
      padding:'0px 0px 0px 40px'
    },
  }),
);

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function Card_View(props) {

 
console.log(props);


   const classes = useStyles();
   const [count, setCount] = useState("All");
   const[flag,setFlag]= useState(true);
const[flag1,setFlag1]=useState(true);
   const[newtile,setNewTile]= useState([
    {
"img":IMAGES_URL.PIC7,
"date":"16 Nov 2020",
"cat":"CN",
"key":"1",
},
{
  "img":IMAGES_URL.PIC7,
  "date":"16 Nov 2020",
  "cat":"CN",
  
"key":"2",
  },
  {
    "img":IMAGES_URL.PIC7,
    "date":"16 Nov 2020",
    "cat":"ONLINE",
    "key":"3",
    },
    {
      "img":IMAGES_URL.PIC7,
      "date":"16 Nov 2020",
       "cat":"ONLINE",
       "key":"4",
      },
      {
        "img":IMAGES_URL.PIC7,
        "date":"16 Nov 2020",
         "cat":"ONLINE",
         "key":"5",
        },
        {
          "img":IMAGES_URL.PIC7,
          "date":"16 Nov 2020",
           "cat":"ONLINE",
           "key":"6",
          },
          {
            "img":IMAGES_URL.PIC7,
            "date":"16 Nov 2020",
             "cat":"ONLINE",
             "key":"7",
            },
            {
              "img":IMAGES_URL.PIC7,
              "date":"16 Nov 2020",
               "cat":"ONLINE",
               "key":"8",
              },
              {
                "img":IMAGES_URL.PIC7,
                "date":"16 Nov 2020",
                 "cat":"ONLINE",
                 "key":"9",
                },

                {
                  "img":IMAGES_URL.PIC7,
                  "date":"16 Nov 2020",
                   "cat":"ONLINE",
                   "key":"10",
                  },
                  {
                    "img":IMAGES_URL.PIC7,
                    "date":"16 Nov 2020",
                     "cat":"PRINT",
                     "key":"11",
                    },
                    {
                    "img":IMAGES_URL.PIC7,
                    "date":"16 Nov 2020",
                     "cat":"PRINT",
                     "key":"12",
                    },
   

]);
  const[tile1,settile1]= useState([
{
"img":IMAGES_URL.PIC7,
"date":"16 Nov 2020",
"cat":"CN",
"key":"1",
},
{
  "img":IMAGES_URL.PIC7,
  "date":"16 Nov 2020",
  "cat":"CN",
  
"key":"2",
  },
  {
    "img":IMAGES_URL.PIC7,
    "date":"16 Nov 2020",
    "cat":"ONLINE",
    "key":"3",
    },
    {
      "img":IMAGES_URL.PIC7,
      "date":"16 Nov 2020",
       "cat":"ONLINE",
       "key":"4",
      },
      {
        "img":IMAGES_URL.PIC7,
        "date":"16 Nov 2020",
         "cat":"ONLINE",
         "key":"5",
        },
        {
          "img":IMAGES_URL.PIC7,
          "date":"16 Nov 2020",
           "cat":"ONLINE",
           "key":"6",
          },
          {
            "img":IMAGES_URL.PIC7,
            "date":"16 Nov 2020",
             "cat":"ONLINE",
             "key":"7",
            },
            {
              "img":IMAGES_URL.PIC7,
              "date":"16 Nov 2020",
               "cat":"ONLINE",
               "key":"8",
              },
              {
                "img":IMAGES_URL.PIC7,
                "date":"16 Nov 2020",
                 "cat":"ONLINE",
                 "key":"9",
                },

                {
                  "img":IMAGES_URL.PIC7,
                  "date":"16 Nov 2020",
                   "cat":"ONLINE",
                   "key":"10",
                  },
                  {
                    "img":IMAGES_URL.PIC7,
                    "date":"16 Nov 2020",
                     "cat":"PRINT",
                     "key":"11",
                    },
                    {
                    "img":IMAGES_URL.PIC7,
                    "date":"16 Nov 2020",
                     "cat":"PRINT",
                     "key":"12",
                    },
     

  ])

  return (
    <div className={classes.root} >
    <Grid xs={12} sm={12} md={12} style={{ padding:'10px', border:'none', float:'left', width:'90%',}} >

 <Link style={{color : '#222', fontSize : '15px', paddingRight:'25px', paddingBottom:'10px', lineHeight:'50px',cursor:'pointer', borderBottom:'none',}} onClick={() => {
          setCount("All");
          setFlag(true);
  const tile3=tile1.map((tile1)=>{return(tile1)});
  setNewTile(tile3);
        }}variant="body2">{"ALL    "}</Link>
        
        <Link style={{color : '#222', fontSize : '15px', paddingRight:'25px', paddingBottom:'10px', lineHeight:'50px',cursor:'pointer', borderBottom:'none',}} onClick={() => {setCount("CN");setFlag(true);
         
     const filter_tile = tile1.filter((filter_tile)=>{return(filter_tile.cat=="CN")});
  console.log(filter_tile);
  const tile3=filter_tile.map((tile1)=>{return(tile1)});
setNewTile(tile3);
}}variant="body2">{"COMPANY NAME    "}</Link>
         <Link style={{color : '#222', fontSize : '15px', paddingRight:'25px',  paddingBottom:'10px', lineHeight:'50px',cursor:'pointer', borderBottom:'none',}} onClick={() => {setCount("ONLINE");setFlag(true);
           const filter_tile = tile1.filter((filter_tile)=>{return(filter_tile.cat=="ONLINE")});
        console.log(filter_tile);
      const tile3=filter_tile.map((tile1)=>{return(tile1)});
setNewTile(tile3);
        
        }}variant="body2">{"ONLINE    "}</Link>
         <Link style={{color : '#222', fontSize : '15px', paddingRight:'25px',  paddingBottom:'10px', lineHeight:'50px', cursor:'pointer', borderBottom:'none',}} onClick={() => {setCount("PRINT");setFlag(true);
           
           const filter_tile = tile1.filter((filter_tile)=>{return(filter_tile.cat=="PRINT")});
        console.log(filter_tile);
      const tile3=filter_tile.map((tile1)=>{return(tile1)});
setNewTile(tile3);
        }}variant="body2">{"PRINT    "}</Link>
      
  <Divider />
  </Grid>


<GridList cellHeight={100}   className={classes.gridList} cols={4} spacing={10}  >
       
       {newtile.map((tile) => (
    
   
    
  
          <GridListTile  key={tile.key} style={{border:'1px solid #eee', cursor:'pointer', margin:'25px 25px 0px 0px', paddingBottom:'15px', backgroundColor: '#fff', width:'170px'}}>
            <Link onClick={() =>{window.open('https://www.prnewswire.com/news-releases/the-hydrafacial-company-teams-up-with-fast-company-to-present-glimpse-2019-a-gathering-of-leaders-to-explore-emerging-consumer-behaviors--trends-300862611.html')}} >
            <img src={tile.img} style={{height:'80%', width:'150px', padding:'0px 0px 0px 0px'}} />
            <Typography style={{fontSize:'11px', lineHeight:'16px,'}} className={classes.icon1} >
          {tile.date}

          </Typography>
          </Link>
          </GridListTile>
         
          
        ))}
      </GridList>
    </div>
  );
}
