import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const mobile = window.matchMedia('(max-width: 600px)').matches;

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      width: mobile ? '100%' : 275,
      height: mobile ? 'auto' : 140,
      overflow: 'auto',
      margin: 5,
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
    },
    title: {
      margin: '0 auto !important',
      textAlign: 'center',
    },
  })
);

interface Properties {
  // classes: any;
  description: string;
}

const ResponsibilityCard: React.FC<Properties> = ({
  description,
}: Properties) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.title}>
        <Typography component="p">{description}</Typography>
      </CardContent>
    </Card>
  );
};

ResponsibilityCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  // classes: PropTypes.object.isRequired,
};

export default ResponsibilityCard;
