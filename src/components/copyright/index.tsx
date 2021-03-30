import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


export default function CopyRight() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://hydrafacial.com/">
        Hydrafacial
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}