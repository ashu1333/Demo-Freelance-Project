import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header : {
     backgroundColor: '#000',
     padding: '15px 0px 0px 0px',
     textAlign:'center',
     borderBottom : '1px solid #000',
     fontFamily:'Futura LT Light',  
  },
header2 : {
     backgroundColor: '#000',
     padding: '15px 15px',
     borderBottom : '1px solid #000'  
  },
  header1:{
backgroundColor: '#FF0000'
  },
  
  logo : {
    height: "52px", margin:'3px auto',
    
  },
 menuimg : {
     textAlign : 'right',
     color : '#fff',
 },
  link : {
    color : '#aaa',
    padding: '0px 15px 5px 15px',
    cursor:'pointer',
    fontFamily:'Futura PT Book', 
    "&:hover": {
      color: "#fff",
      textDecoration:'none',
    }, 
  },
  drawerlink : {
    color : '#fff',
    padding: '10px 15px 10px 25px',
    cursor:'pointer',
  },
  link1:{
    color:'black',
  },
  modelTitle : {
    backgroundColor: '#8ec6d7', color:'#fff', padding:'20px 20px 15px 25px', fontWeight:'lighter',
    fontSize : '18px',
    textAlign : 'left',
    fontFamily:'Futura PT Book',
  },
}));

export default useStyles;