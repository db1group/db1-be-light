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
  Paper,
  Tabs,
  Tab,
} from '@material-ui/core';
import { Redirect } from 'react-router';

import Routes from '../../routes';
import { render } from 'react-dom';

const styles = () => ({
  cardHeader: {
    background: '#f1f1f1',
  },
  heightAdjust: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const Container = ({ classes }) => {
  const [value, setValue] = React.useState(0);
  const [route, setRoute] = React.useState('/');
  const routes = ['/roles'];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setRoute(routes[newValue]);
    console.log(route);

    window.location.assign(route);
  };

  return (
    <Grid className={classes.heightAdjust} item xs={12}>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab label="Papéis e Responsabilidades" />
        </Tabs>
      </Paper>

      <CardContent>
        <Routes />
      </CardContent>
    </Grid>
  );
};

export default withStyles(styles)(Container);
