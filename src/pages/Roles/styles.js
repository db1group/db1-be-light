import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const mobile = window.matchMedia('(max-width: 600px)').matches;

export const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:before': {
      display: 'none',
    },
    margin: '20px 0',
  },
  expanded: {},
})(MuiExpansionPanel);


export const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

export const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    flexDirection: 'column',
  },
}))(MuiExpansionPanelDetails);

export const Lane = withStyles({
  root: {
    background: '#f1f1f1',
    borderRadius: '10px',
    padding: 10,
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
  },
})(Grid);

export const InputFilter = withStyles({
  root: {
    width: mobile ? '100%' : '35%',
  },
})(TextField);

export const Title = withStyles({
  root: {
    width: '100%',
  },
})(Typography);
