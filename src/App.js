import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ImageIcon from '@material-ui/icons/Image';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  IconButton,
  Typography,
} from '@material-ui/core';

import Routes from './routes';

const styles = () => ({
  root: {
    padding: '130px 50px',
    zIndex: 999,
    position: 'absolute',
  },
  title: {
    color: '#fff',
  },
  card: {
    display: 'flex',
    minHeight: 'calc(100vh - 100px)',
  },
  cardHeader: {
    background: '#f1f1f1',
  },
  rightBorder: {
    borderRight: 'solid #d0D0D0 1px',
  },
  content: {
    marginTop: 0,
  },
  background: {
    position: 'absolute',
    height: 200,
    width: '100%',
    top: 0,
    // background: 'url(./header-be-light.png) no-repeat',
    background: '#00335E',
    backgroundSize: '100% 100%',
  },
  rightContainer: {
    // background:
    //   'url(https://hdwallsource.com/img/2014/8/my-neighbor-totoro-wallpaper-27981-28703-hd-wallpapers.jpg) center center',
    flex: 1,
  },
  heightAdjust: {
    display: 'flex',
    flexDirection: 'column',
  },
  paper: {
    background: '#9de1fe',
    padding: 20,
  },
  information: {
    color: '#444',
  },
});

const App = ({ classes }) => (
  <div>
    <div className={classes.background} />
    <Grid container className={classes.root}>
      <Typography className={classes.title} variant="h4" component="h3">
        #DB1 Be Light
      </Typography>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <Grid container>
            <Container classes={classes} />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  </div>
);

const Container = ({ classes }) => (
  <Grid className={classes.heightAdjust} item xs={12}>
    <CardHeader
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
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

export default withStyles(styles)(App);
