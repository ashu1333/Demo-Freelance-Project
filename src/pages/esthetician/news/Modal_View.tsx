import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { IMAGES_URL } from '../../../constants/Images';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IconButton from '@material-ui/core/IconButton';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import EcoIcon from '@material-ui/icons/Eco';
import NativeSelect from '@material-ui/core/NativeSelect';
import PhotoIcon from '@material-ui/icons/Photo';
import CloseIcon from '@material-ui/icons/Close';
import Modal from '@material-ui/core/Modal';
import { NewsPostRequest } from '../../../redux/news/model'
import { NewsActions } from '../../../redux/common/actions';
import { useDispatch } from 'react-redux';

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

const Modal_View = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  let [image, setImage] = useState<Array<any>>([]);
  const [values, setValues] = React.useState<NewsPostRequest>({})


  const handleChange = (event: any) => {
    setValues({
      ...values,
      [event?.target.name]: event?.target.value,

    })
  }

  const handleSubmit = () => {
    let value = { ...values }
    dispatch(NewsActions.news_post(value));
    console.log(value);
  }


  React.useEffect(() => {
    setOpen(props.open);
  }, []);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const uploadImage = (e) => {
    let files = e.target.files[0];
    const image_src = files.name;
    setImage(prevstate => [...prevstate, files.name]);
  }


  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{ width: '150%', margin: '20px 0px 0px 400px', outline: '0' }}
      >

        <Grid xs={3}>

          <Typography variant="h6" style={{ backgroundColor: '#41F5DF ' }}>
            ADD POST
  <IconButton onClick={handleClose} style={{ margin: '0px 0px 0px 300px' }}>
              <CloseIcon />
            </IconButton>
          </Typography>


          <Grid container xs={12} direction="row" style={{ backgroundColor: 'white ' }}>
            <Grid item xs={2} >
              <img src="/images/user_logo.png" style={{ width: "60%", height: "60%", margin: '20px 0px 0px 10px' }} />
            </Grid>

            <Grid item xs={10} style={{ margin: '20px 0px 0px 0px' }}  >
              <form className={classes.root} noValidate autoComplete="off">

                <TextField
                  id="title"
                  name="title"
                  placeholder="Whats in YOUR MIND"
                  style={{ width: '400px' }}
                  onChange={(input) => handleChange(input)}
                />
              </form>
            </Grid>
            <hr />

            <Grid xs={12}>
              <TextField
                id="description"
                name="description"
                multiline
                rows={4}
                placeholder="description"
                onChange={(input) => handleChange(input)}

                style={{ width: '95%', margin: '0px 0px 20px 13px', backgroundColor: '	#DCDCDC' }}
              />
            </Grid>


            <Grid container xs={12} direction="row" style={{ backgroundColor: 'white ' }}>
              <GridList cellHeight={35} cols={5} spacing={30}  >

                {image.map((tile) => (
                  <GridListTile key={tile} >
                    <img src={'/images/' + tile} style={{ height: '100%' }} />
                  </GridListTile>
                ))}
              </GridList>
            </Grid>
            <Grid container xs={12} direction="row" style={{ backgroundColor: 'white ' }}>
              <Grid item xs={6} style={{ backgroundColor: '', margin: '0px 0px 0px 23px' }}>
                <Button style={{ padding: '0px 0px 0px 10px' }}>
                  <label htmlFor="upload-photo" >
                    <input
                      style={{ display: 'none' }}
                      id="upload-photo"
                      name="upload-photo"
                      type="file"
                      onChange={(input) => { uploadImage(input); handleChange(input) }}

                    />

                    <Button style={{ backgroundColor: '#41F5DF' }} variant="contained" component="span">
                      <PhotoIcon />
    Photos
  </Button>
                  </label>
                </Button>
              </Grid>

              <Grid item xs={5} style={{ margin: '0px 0px 0px 15px' }}>
                <Button style={{ backgroundColor: '#41F5DF ' }} variant="contained" component="span">
                  <EcoIcon />
                  <FormControl >

                    <NativeSelect
                      // value={state.age}
                      name="category"
                      inputProps={{ 'aria-label': 'age' }}
                      onChange={(input) => handleChange(input)}
                    >

                      <option value="">Select Category</option>
                      <option value={"skin care"}>Skin Care</option>
                      <option value={"hair care"}>Hair Care</option>
                      <option value={"beauty care"}>Beauty</option>
                    </NativeSelect>
                  </FormControl>
                </Button>
              </Grid>
            </Grid>

            <Grid item xs={12}>

              <Button variant="contained" style={{ width: "100%", backgroundColor: 'black', color: 'white' }} onClick={() => handleSubmit()}>
                <Typography>
                  POST
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </div>
  )
}

export default Modal_View;