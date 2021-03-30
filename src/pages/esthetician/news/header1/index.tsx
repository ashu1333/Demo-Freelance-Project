/*
 * @FileName       : index.tsx
 * @Version        : 1.0
 * @DateOfCreation : 08/21/2020
 * @Author         : $u^^!t @ Hydrafacial
 * @Dependencies   : N/A
 * @Description    : Header Component.
 *
 * Copyright (c) 2020, Hydrafacial. All rights reserved.
 */

import Grid from '@material-ui/core/Grid';
import { IMAGES_URL } from '../../../../constants/Images';
import useStyles from './style';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';

interface HeaderProps {
  name:String,
}
const Header1: React.SFC<HeaderProps> = (props) => {

  const classes = useStyles();
  return (
    <div>
      <Grid direction={"row"} container  style={{backgroundColor:'#b7deed'}} >
          <Grid item xs={6} sm={6} md={6} >
            <Typography className={classes.midSectionHeading}>
              {props.name}
            </Typography>
          </Grid>

          <Grid item xs={6} sm={6} md={6} style={{textAlign:'center'}} >
              <img alt="logo" src={IMAGES_URL.EMAILC_BACKGROUND} style={{marginBottom:'-6px'}} />
                               </Grid>
                                                       </Grid>
    </div>
  );

}
export default Header1;