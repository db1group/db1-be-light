import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, CardContent, Paper, Tabs, Tab } from '@material-ui/core';

import Routes from '../../routes';

const styles = () => ({
  cardHeader: {
    background: '#f1f1f1',
  },
  heightAdjust: {
    display: 'flex',
    flexDirection: 'column',
  },
  heightTabs: {
    height: '70px',
  },
});

const Container = ({ classes }) => {
  const [value, setValue] = React.useState(0);
  const [route, setRoute] = React.useState('/');
  const routes = ['/roles'];

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setRoute(routes[newValue]);

    window.location.assign(route);
  };

  return (
    <Grid className={classes.heightAdjust} item xs={12}>
      <Paper square>
        <Tabs
          color="secondary"
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab
            color="secondary"
            className={classes.heightTabs}
            label="Papéis e Responsabilidades"
          />
        </Tabs>
      </Paper>

      <CardContent>
        <Routes />
      </CardContent>
    </Grid>
  );
};

export default withStyles(styles)(Container);
