import * as React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { IMAGES_URL } from '../../../../constants/Images';
import useStyles from '../style';

interface DashboardProps {
  name: string,
};

const HealthDashboard: React.SFC<DashboardProps> = ({ name }) => {
  const classes = useStyles();

  return (
    
    <div>
      
    </div>
  )
}

export default HealthDashboard;