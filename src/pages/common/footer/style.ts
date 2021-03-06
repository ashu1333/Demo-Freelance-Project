import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
footer : {
    borderTop : '1px solid #eee',
    padding : '50px 30px 80px 30px',
    backgroundColor : '#fff',
},
logo : {
    height: "55px",
  },
footerTitle : {
    fontSize : '24px',
    color : '#222',
    paddingBottom : '15px',
},
footerLink : {
    fontSize : '17px',
    color : '#222',
    paddingBottom : '5px',
    lineHeight : '30px',
},
footerText : {
    fontSize : '17px',
    color : '#222',
    paddingBottom : '5px',
    lineHeight : '25px',
},
footerLink_U : {
    fontSize : '17px',
    color : '#222', 
    paddingRight : '25px',
    textDecoration : 'underline',
    paddingBottom : '5px',
    lineHeight : '30px',
},
footerLink1 : {
    fontSize : '17px',
    color : '#222',
    paddingLeft : '0px',
     
    
    lineHeight : '30px',
},

}));

export default useStyles;