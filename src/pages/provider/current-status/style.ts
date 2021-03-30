import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  root : {
    height : '100vh'
  },
  PrDashboardtitle : {
    fontSize : '40px',
    textAlign : 'left',
    lineHeight : '28px',
    padding : '10% 15% 0px 10%',
    colors : '#000',
    fontWeight:'bold',
    fontFamily:'BebasNeue Light',
  },
  PrDashboardtext : {
    fontSize : '18px',
    textAlign : 'left',
    lineHeight : '32px',
    padding : '0px 15% 15% 10%',
    colors : '#000',
    fontWeight:'normal',
    fontFamily:'Futura PT Book',
  },
  tablettitle : {
    fontSize : '100px',
    textAlign : 'center',
    lineHeight : '50px',
    fontWeight:'bold',
    textTransform:'uppercase',
    fontFamily:'BebasNeue Light',
  },
  tablettext : {
    fontSize : '18px',
    textAlign : 'center',
    lineHeight : '25px',
    color : '#222',
    fontWeight:'lighter',
    fontFamily:'Futura PT Book',
  },
  userRdetails : {
    fontSize : '18px',
    textAlign : 'left',
    lineHeight : '32px',
    colors : '#000',
    fontWeight:'bold',
    fontFamily:'Futura LT Light',
  },
  userRlink : {
    colors : '#43aac5',
    fontSize : '14px',
  },
  rankText : {
    fontFamily:'BebasNeue Light',
    fontSize : '18px',
  },
  Ranktitle : {
    fontSize : '19px',
    letterSpacing:'.5px',
    textAlign : 'center',
    lineHeight : '28px',
    padding : '5px',
    fontFamily:'BebasNeue Light',
  },
  midBoxText: {
    fontFamily:'BebasNeue book',
    fontSize : '30px',
    textAlign : 'center',
    lineHeight : '30px',
  },
  

  BNBookFont: {
    fontFamily:'BebasNeue book',
  },
  dashboardText : {
    fontSize : '18px',
    textAlign : 'left',
    lineHeight : '32px',
    padding : '0px 15% 15% 10%',
    colors : '#000',
    fontWeight:'normal',
    fontFamily:'Futura PT Book',
  },




  buttonWhiteLargeRM: {
    backgroundColor: "#fff",
    borderRadius: 10,
    height: "150px",
    "&:hover": {
      backgroundColor: "blue",
      border: "1px solid #50acd5",
      color: "#FFF",
    },
  },
  buttonWhiteLargeRM1: {
    backgroundColor: "#fff",
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 10,
    "&:hover": {
      backgroundColor: "pink",
      border: "1px solid #50acd5",
      color: "#FFF",
    },
  },
  buttonWhiteLargeRM2: {
    backgroundColor: "#fff",
    borderRadius: 10,
    "&:hover": {
      backgroundColor: "skyblue",
      border: "1px solid #50acd5",
      color: "#FFF",
    },
  },
  midLSection : {
    textAlign : 'left',
    float :'left',
    padding : '3% 0px',
  },
  midRSection : {
    backgroundColor : "#ffffff", 
    textAlign : 'center',
    float :'left', 
    padding : '3% 0%',
  },
  midRSectionDiv : {
    border : '1px solid #fff', 
    width : '95%',
    margin : '0px auto',
  },
  clear : {
    clear : 'both',
  },
  midLSection1 : {
    backgroundColor : "white", 
    textAlign : 'center',
    float :'left',
    padding : '2% 0px',
  },
  midRSection1 : {
    backgroundColor : "#ffffff", 
    textAlign : 'center',
    float :'left',
    padding : '5% 0px',
  },
  midRSection1Div : {
    width : '95%',
    margin : '0px auto',
    textAlign : 'left',
    padding : '2% 0px',
  },
  calendarContainer : {
    height : 'auto',
    padding : '10px 35px',
    margin: '0px auto',
    fontWeight : 'normal',
  },
  midBSection : {
    backgroundColor : "#ffffff", 
    textAlign : 'center',
    minHeight: '200px',
    borderBottom: '1px solid #eee',
    borderTop : '1px solid #eee',
    clear : 'both',
    padding : '70px 0px',
  },
  midBSection1 : {
    backgroundColor : "#ffffff", 
    textAlign : 'left',
    minHeight: '100px',
    borderBottom: '1px solid #eee',
    borderTop : '1px solid #eee',
    clear : 'both',
    padding : '0px 0px',
  },
  dashboardHeading1 : {
    fontSize : '22px',
    textAlign : 'left',
    lineHeight : '40px',
    colors : '#000',
    marginBottom:'15px',
    paddingTop : '10px',
    fontWeight : 'lighter',
  },
  midSectionHeading : {
    fontSize : '34px',
    textAlign : 'left',
    lineHeight : '40px',
    colors : '#000',
    margin:'15px 0px 0px 5%',
    fontWeight : 'lighter',
  },
  midSectionHeading1 : {
    fontSize : '34px',
    textAlign : 'center',
    lineHeight : '40px',
    colors : '#000',
    fontWeight : 'lighter',
    marginTop : '30px;',
  },
  midSectionHeading2 : {
    fontSize : '34px',
    textAlign : 'center',
    lineHeight : '10px',
    colors : '#000',
    fontWeight : 'lighter',
    marginTop : '30px;',
  },
  midSectionHeadingBox : {
    fontSize : '25px',
    textAlign : 'center',
    lineHeight : '40px',
    colors : '#000',
    marginBottom:'15px',
    fontWeight : 'lighter',
  },
  midSectionBoxHeading1 : {
    fontSize : '20px',
    color : '#ffc009',
    textAlign : 'center',
    lineHeight : '0px',
    marginTop:'70px',
    fontWeight : 'normal',
    textTransform : 'uppercase',
  },
  midSectionBoxHeading2 : {
    fontSize : '20px',
    color : '#dd3546',
    textAlign : 'center',
    lineHeight : '0px',
    marginTop:'70px',
    fontWeight : 'normal',
    textTransform : 'uppercase',
  },
  midSectionBoxHeading3 : {
    fontSize : '20px',
    color : '#43aac5',
    textAlign : 'center',
    lineHeight : '0px',
    marginTop:'70px',
    fontWeight : 'normal',
    textTransform : 'uppercase',
  },
  
  ChartScoreTxt : {
    fontSize : '20px',
    textAlign : 'left',
    lineHeight : '38px',
    padding : '20px 30px',
    colors : '#444',
    borderRadius : '10px',
    backgroundColor : '#f7e7e5',
  },
  ChartScoreHeadTxt : {
    fontSize : '30px',
    textAlign : 'right',
    float :'right',
    lineHeight : '28px',
    colors : '#000',
    fontWeight : 'bold',
  },
  midSectionText : {
    fontSize : '22px',
    textAlign : 'justify',
    lineHeight : '26px',
    padding : '10px 5%',
    colors : '#000',
  },
  midSectionText1 : {
    fontSize : '20px',
    textAlign : 'center',
    lineHeight : '24px',
    padding : '10px 15%',
    colors : '#fff',
  },
  midSectionBoxText : {
    fontSize : '20px',
    textAlign : 'justify',
    lineHeight : '26px',
    padding : '0px 7% 10px 7%',
    colors : '#000',
  },
  midRSectionText1 : {
    fontSize : '20px',
    fontWeight : 'lighter',
    textAlign : 'justify',
    lineHeight : '26px',
    padding : '15px 0px',
    colors : '#000',
  },
  midRGlowIconDiv : {
    backgroundColor: '#f7e7e5', 
    marginBottom: '40px',
    padding : '0px 0px', 
  },
  midRSectionGlowTitle : {
    fontSize : '15px',
    fontWeight : 'normal',
    textAlign : 'center',
    lineHeight : '26px',
    padding : '9px 0px',
    colors : '#000',
    textTransform : 'uppercase',
  },
  DashboardAddressText : {
    fontSize : '20px',
    textAlign : 'left',
    lineHeight : '24px',
    padding : '0px 10px',
    colors : '#000',
    height : '60px',
    width : '360px',
    float : 'left',
    marginTop : '15px',
  },
  DashboardText : {
    fontSize : '22px',
    textAlign : 'left',
    lineHeight : '28px',
    padding : '10px 15%',
    colors : '#000',
  },

  midSectionTexta : {
    fontSize : '22px',
    lineHeight : '28px',
    padding : '10px 15%',
    colors : '#000',
  },

  midRSectionSubHead : {
    fontSize : '20px',
    textAlign : 'center',
    lineHeight : '28px',
    padding : '10px 15% 0 15%',
    textTransform :'uppercase',
    colors : '#000',
  },
  midRSectionText : {
    fontSize : '14px',
    textAlign : 'center',
    lineHeight : '14px',
    padding : '10px 5px',
    colors : '#000',
  },
  Chart : {
    width :'40%',
    float : 'left',
    paddingTop : '10px',
  },
  ChartScore : {
    width :'60%',
    padding : '0 60px 0 0',
    float : 'right',
  },
  progressIcon : {
    width :'25%',
    float : 'left',
    textAlign : 'left',
    clear : 'both',
    padding : '5px 0px 5px 35px',
  },
  progressBar: {
    width :'70%',
    float : 'left',
  },
  button : {
    fontSize : '1rem',
    lineHeight : '1.24',
    padding : '.875rem 2.375rem',
    
    backgroundColor : '#43aac5',
    border : '1px solid #43aac5',
    textTransform : 'uppercase',
    letterSpacing : '0.5px',
    margin : '0px auto',
    color : '#ffffff',
    fontWeight : 'normal',
  },
  buttonWhite : {
    fontSize : '14px',
    lineHeight : '1',
    padding : '.775rem 2rem',
    backgroundColor : '#43aac5',
    border : '1px solid #43aac5',
    textTransform : 'uppercase',
    letterSpacing : '0.5px',
    margin : '0px auto',
    color : '#fff',
    fontWeight : 'normal',
  },

  buttonWhiteLargeN : {
    fontSize : '18px',
    lineHeight : '1.2',
    padding : '.875rem 2.4rem',
    backgroundColor : 'white',
    border : '1px solid #222',
    textTransform : 'uppercase',
    letterSpacing : '0.5px',
    color : 'black',
    fontWeight : 'lighter',
    clear : 'both',
    margin : '0px auto',
  },
}));
export default useStyles;