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
import Header from './components/Header';

const styles = () => ({
  root: {
    padding: '130px 50px',
    zIndex: 999,
    position: 'absolute',
  },
  title: {
    color: '#fff',
    padding: '50px',
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
    <Header>
      <Typography className={classes.title} variant="h4" component="h3">
        #DB1 Be Light
      </Typography>
    </Header>
    <Grid container className={classes.root}>
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
