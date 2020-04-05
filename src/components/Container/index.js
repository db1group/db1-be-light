import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ImageIcon from '@material-ui/icons/Image';
import {
  Grid,
  CardHeader,
  CardContent,
  Avatar,
  IconButton,
} from '@material-ui/core';

import Routes from '../../routes';

const styles = () => ({
  cardHeader: {
    background: '#f1f1f1',
  },
  heightAdjust: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Container = ({ classes }) => (
  <Grid className={classes.heightAdjust} item xs={12}>
    <CardHeader
      avatar={
        <Avatar aria-label="Recipe">
          <ImageIcon />
        </Avatar>
      }
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      title="Papéis e Reponsabilidades"
      className={classes.cardHeader}
    />
    <CardContent>
      <Routes />
    </CardContent>
  </Grid>
);

export default withStyles(styles)(Container);
