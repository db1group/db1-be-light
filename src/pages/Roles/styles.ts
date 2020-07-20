import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const mobile = window.matchMedia('(max-width: 600px)').matches;

export const Box = styled.div`
  background: #ffffff;
  border: 1.3px solid #eaeaea;
  height: 200px;
  width: 200px;
  border-radius: 15px;
  margin: 0 10px 20px 0;
`;

export const Content = styled.div`
  padding: 20px;
  margin-top: 60px;
`;

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

// export const ExpansionPanelDetails = withStyles((theme) => ({
//   root: {
//     flexFlow: 'row wrap'
//   },
// }))(AccordionDetails);

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
    width: mobile ? '100%' : '50%',
  },
})(TextField);

export const Title = withStyles({
  root: {
    width: '100%',
    marginBottom: 15,
  },
})(Typography);
