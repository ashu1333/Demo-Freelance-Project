import { makeStyles } from '@material-ui/core/styles';
import { IMAGES_URL } from "../../../../constants/Images";

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${ IMAGES_URL.LOGIN_BACKGROUND })`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },

select:{
 width:"100%",
 height:50
},


  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor : '#43aac5',
    color : '#fff',
    '&:hover': {
      backgroundColor : '#43aac5',
      color : '#222',
    },
  },
  link : {
    color : '#43aac5',
  },
  buttonWhiteLargeN : {
    fontSize : '17px',
    lineHeight : '1.2',
    padding : '.675rem 2rem',
    backgroundColor : '#50acd5',
    border : '1px solid #50acd5',
    textTransform : 'uppercase',
    letterSpacing : '0.2px',
    color : '#fff',
    fontWeight : 'normal',
    clear : 'both',
    margin : '0px auto',

    '&:hover': {
      backgroundColor: '#fff',
      border : '1px solid #000',
      color: '#000'
    },
    
  },


  buttonWhiteLargeRM : {
    fontSize : '17px',
    lineHeight : '1.2',
    padding : '.675rem 2rem',
    backgroundColor : '#fff',
    border : '1px solid #111',
    textTransform : 'uppercase',
    letterSpacing : '0.2px',
    color : '#111',
    fontWeight : 'normal',
    clear : 'both',
    margin : '0px auto',

    '&:hover': {
      backgroundColor: '#50acd5',
      border : '1px solid #50acd5',
      color: '#FFF'
    },
  },
  emailcBac: {
    backgroundImage: `url(${ IMAGES_URL.EMAILC_BACKGROUND })`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    width : '600px',
    border: '1px solid #dce7ed', 
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'center',
  },
  ecimage: {
    backgroundImage: `url(${ IMAGES_URL.EMAILCNEW_BACKGROUND })`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },


}));


export default useStyles;