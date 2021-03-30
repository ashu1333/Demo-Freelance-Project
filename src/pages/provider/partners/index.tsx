import * as React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { IMAGES_URL } from '../../../constants/Images';
import useStyles from './style';
import Header from '../../common/header'
import Footer from '../../common/footer'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { ProviderAction } from '../../../redux/common/actions';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import CloseIcon from '@material-ui/icons/Close';
import Modal from '@material-ui/core/Modal';
import { ModalValidation } from "../../../constants/validation"
import ReadMoreAndLess from 'react-read-more-less';

interface PartnersProps {
  name: string,
  Provider: any,
  Feed: any
};

interface error {
  [key: string]: any
}

const Partners: React.SFC<PartnersProps> = ({ name }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState<any>({})
  const [formValidate, setSubmitting] = React.useState({ isSubmitting: true, error: undefined })
  const [errors, setErrors] = React.useState<error>({ selected: undefined });
  const partnerList = useSelector((state: PartnersProps) => state.Provider.partnersList ? state.Provider.partnersList : []);
  const partner = useSelector((state: PartnersProps) => state.Provider.partners ? state.Provider.partners : {});
  console.log(partner);
  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event?.target.name]: event?.target.value
    })
    setErrors({ ...errors, selected: event?.target.name })
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    const validationErrors = ModalValidation(values)
    let noErrors = Object.keys(validationErrors).length == 0
    let currentError = validationErrors[errors.selected];
    setSubmitting({ isSubmitting: noErrors, error: currentError })
  }, [errors]);

  React.useEffect(() => {
    dispatch(ProviderAction.partnersList({}));
    dispatch(ProviderAction.partners_msg());
  }, []);
  return (
    <div className={classes.root}>
      <Header />

      <div id="welcome_section">

        <div id="container">

          <Grid xs={6} className={classes.midLSection}>
            <p className={classes.PrDashboardtitle}>
              {partner?.[0]?.title}
            </p>

            <div className={classes.PrDashboardtext}
              dangerouslySetInnerHTML={{ __html: partner?.[0]?.content }}>
            </div>
          </Grid>
          <Grid xs={6} className={classes.midLSection}>
            <Grid xs={12} component={Paper} variant="outlined" container id="vabox" direction={"row"} >
              <Grid xs={4} direction="row" justify="flex-start" style={{ padding: '2%', textAlign: 'center' }}  >
                <div id="vaicon">
                  <img src={IMAGES_URL.INCREASE} />
                </div>
                <Typography variant="h6" className={classes.vaText1}>Increase <br></br>Profitability</Typography>
              </Grid>

              <Grid xs={3} direction="row" justify="flex-start" style={{ backgroundColor: "white", padding: '2%', textAlign: 'center' }}  >
                <div id="vaicon">
                  <img src={IMAGES_URL.RELOADED} /></div>
                <Typography variant="h6" className={classes.vaText2}>Deliver Brand Consistency</Typography></Grid>

              <Grid xs={3} direction="row" justify="flex-start" style={{ backgroundColor: "white", padding: '2%', textAlign: 'center' }}  >
                <div id="vaicon">
                  <img src={IMAGES_URL.TIME} /></div>
                <Typography variant="h6" className={classes.vaText3}>Impact Productivity</Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div id="img_one">
          <img alt="" src={IMAGES_URL.DASHBG1_BACKGROUND} />
        </div>

        <div id="img_two">
          <img alt="" src={IMAGES_URL.DASHBG2_BACKGROUND} />
        </div>
        <div style={{ clear: 'both', }}></div>
      </div>
      <Grid direction={"row"} container>
        <Grid xs={12} direction={"row"} container className={classes.midBSection} justify={"center"} style={{ backgroundColor: "black" }} >
          <Grid xs={12} direction={"row"} container justify={"center"} >
            <Typography className={classes.partnerTitle} style={{ color: '#fff' }}>
              {"LEARN MORE ABOUT OUR PARTNERS"}
            </Typography>

            <Typography className={classes.partnerText} style={{ color: '#fff' }}>
              {"Did you know that 30 million consumers visited aesthetic centers last year? More importantly, what did you do with those conumers to help drive higher ROI and increase the # of treatments being completed at your center?"}
            </Typography>
          </Grid>
          <GridList cellHeight={2000} spacing={20} cols={4} className={classes.gridList} >
            {partnerList.map((data) => (
              <GridListTile cols={1} key={data} style={{ height: 'auto' }} >

                <Grid xs item style={{ backgroundColor: "#fff", borderRadius: 5, marginTop: 20,paddingBottom:20 }} >
                  <img src={"https://linq.hydrafacial.com/uploads/partners/" + data.logo} style={{ margin: '10px auto 0px auto' }} />
                  <Grid xs={10}  >
                    <Typography style={{ marginLeft: 35 }} >
                      <ReadMoreAndLess

                        className="read-more-content"
                        charLimit={100}
                        readMoreText="Read more"
                        readLessText="Read less"
                      >
                        {data.description}
                      </ReadMoreAndLess>
                    </Typography>
                    <Link style={{ marginLeft: 40,marginTop: 30, color: '#43aac5', cursor: 'pointer', fontWeight: 'normal' }} onClick={handleOpen}>{"CONNECT NOW"} </Link>
                  </Grid>
                </Grid>
              </GridListTile>
            ))}
          </GridList>
        </Grid>
        <Grid xs item  >
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{ width: '150%', margin: '20px 0px 0px 400px', outline: '0' }}
          >
            <Grid xs={3}>

              <Typography variant="h4" className={classes.modelTitle} style={{ backgroundColor: '#8ec6d7 ' }}>
                CONNECT NOW
                  <IconButton onClick={handleClose} style={{ margin: '-45px 0px 0px 90%' }}>
                  <CloseIcon />
                </IconButton>
              </Typography>
              <Grid container xs={12} direction="row" style={{ backgroundColor: 'white ' }}>
                <FormControl style={{ width: "90%", marginLeft: 25, paddingBottom: '30px' }}>
                  <div style={{ width: '100%', }}>
                    <div style={{ width: '48%', float: 'left', border: 'none' }}>
                      <TextField
                        id="outlined-number"
                        label="First Name"
                        type="text"
                        name="name"
                        style={{ marginTop: 15, }}
                        variant="outlined"
                        onChange={handleChange}
                        helperText={errors?.selected == "name" ? formValidate?.error : ""}
                        error={errors?.selected == "name" && formValidate?.error}
                        autoFocus
                      />
                    </div>

                    <div style={{ width: '48%', marginLeft: '15px', float: 'left', border: 'none' }}>
                      <TextField
                        id="outlined-number"
                        label="Last Name"
                        name="last_name"
                        type="text"
                        style={{ marginTop: 15, }}
                        variant="outlined"
                        onChange={handleChange}
                        helperText={errors?.selected == "last_name" ? formValidate?.error : ""}
                        error={errors?.selected == "last_name" && formValidate?.error}
                        autoFocus
                      />
                    </div>
                  </div>

                  <TextField
                    id="outlined-number"
                    label="Bussiness name"
                    name="bussiness_name"
                    type="text"
                    style={{ marginTop: 20, width: '97%', }}
                    variant="outlined"
                    onChange={handleChange}
                    helperText={errors?.selected == "bussiness_name" ? formValidate?.error : ""}
                    error={errors?.selected == "bussiness_name" && formValidate?.error}
                    autoFocus
                  />

                  <div style={{ width: '100%', }}>
                    <div style={{ width: '47%', float: 'left', border: 'none' }}>
                      <TextField
                        id="outlined-number"
                        label="Email"
                        name="email"
                        type="text"
                        style={{ marginTop: 15, }}
                        variant="outlined"
                        onChange={handleChange}
                        helperText={errors?.selected == "email" ? formValidate?.error : ""}
                        error={errors?.selected == "email" && formValidate?.error}
                        autoFocus
                      />
                    </div>

                    <div style={{ width: '47%', marginLeft: '15px', float: 'left', border: 'none' }}>
                      <TextField
                        id="outlined-number"
                        label="Phone"
                        name="mobile_no"
                        type="text"
                        style={{ marginTop: 15, }}
                        variant="outlined"
                        onChange={handleChange}
                        helperText={errors?.selected == "mobile_no" ? formValidate?.error : ""}
                        error={errors?.selected == "mobile_no" && formValidate?.error}
                        autoFocus
                      />
                    </div>
                  </div>
                  <TextField
                    id="outlined-number"
                    label="Tier level"
                    name="tier_level"
                    type="text"
                    style={{ marginTop: 20, width: '97%', }}
                    variant="outlined"
                    onChange={handleChange}
                    helperText={errors?.selected == "tier_level" ? formValidate?.error : ""}
                    error={errors?.selected == "tier_level" && formValidate?.error}
                    autoFocus
                  />
                  <TextField
                    id="outlined-number"
                    label="Why are you interested in this partnership?"
                    name="message"
                    type="text"
                    style={{ marginTop: 20, width: '97%', }}
                    variant="outlined"
                    onChange={handleChange}
                    helperText={errors?.selected == "message" ? formValidate?.error : ""}
                    error={errors?.selected == "message" && formValidate?.error}
                    autoFocus
                  />
                  <Grid xs={9} direction={"row"} style={{ marginTop: 20 }}>
                    <Button
                      style={{ backgroundColor: 'black', width: "80px", marginRight: 20 }}
                      disabled={!formValidate.isSubmitting}
                    > <Typography style={{ color: "white" }}>Submit </Typography></Button>
                    <Button
                      onClick={() => { handleClose() }}
                      style={{ backgroundColor: 'black', width: "90px" }}>
                      <Typography style={{ color: "white" }}>Cancel </Typography></Button>
                  </Grid>
                </FormControl>
              </Grid>
            </Grid>
          </Modal>
        </Grid>

      </Grid>
      <Grid xs={12} container direction="column" justify={"center"} style={{ textAlign: "center", padding: '50px 0px', backgroundColor: "#d9eef4" }}>
        <Grid>
          <img alt="logo" className={classes.logo} src={IMAGES_URL.LOGO} />
        </Grid>
        <br />

        <Typography className={classes.partnerqTitle}>
          Have questions?</Typography><br />
        <Typography className={classes.partnerqText}>
          E-mail us at  <Link href="mailto:loyalty@hydrafacial.com" variant="h6">{"loyalty@hydrafacial.com"}</Link></Typography>
        <br /><Typography className={classes.partnerqText}>
          Want more information on our Partner Discounts? Click Here.
      </Typography><br />
        <div >
          <Link href="https://linq.hydrafacial.com/images/OurPartners.pdf">
            <Button style={{ backgroundColor: 'black', width: "200px", borderRadius: '0px', padding: '10px 0px' }}>
              <Typography style={{ color: "white" }}>Our Partners </Typography>
            </Button></Link>
        </div>
        <br />
        <br />
      </Grid>
      <Footer />
    </div>
  )
}

export default Partners;



