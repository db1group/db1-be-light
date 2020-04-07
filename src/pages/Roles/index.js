import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { Grid, Typography, Divider } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import roles from './roles.json';
import BoxResponsibility from '../../components/BoxResponsibility';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
    marginBottom: '20px',
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
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

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    flexDirection: 'column',
  },
}))(MuiExpansionPanelDetails);

export default function Roles() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {roles.map((role) => (
        <ExpansionPanel
          key={role.id}
          square
          expanded={expanded === `panel_${role.id}`}
          onChange={handleChange(`panel_${role.id}`)}
        >
          <ExpansionPanelSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography>{role.role}</Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails>
            <Typography variant="h6" component="h2">
              RESPONSABILIDADES:
            </Typography>
            <br />
            {role.responsibilities.map((resp) => (
              <Grid>
                {/* <Typography variant="h6" component="h3">
                  {resp.groupName}
                </Typography> */}

                {/* {resp.descriptions.map((desc, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <BoxResponsibility key={index}>{desc}</BoxResponsibility>
                ))} */}

                <SimpleTable title={resp.groupName} rows={resp.descriptions} />
                <br />
              </Grid>
            ))}
            <br />
            <Divider />
            <br />
            <Typography variant="h6" component="h2">
              NÃO RESPONSABILIDADES:
            </Typography>

            {/* {role.notResponsibilities.map((desc, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <BoxResponsibility key={index}>{desc}</BoxResponsibility>
            ))} */}

            <SimpleTable rows={role.notResponsibilities} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </>
  );
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function SimpleTable({ title, rows }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        {title ? (
          <TableHead>
            <TableRow>
              <StyledTableCell>{title}</StyledTableCell>
            </TableRow>
          </TableHead>
        ) : (
          <></>
        )}

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row}>
              <TableCell component="th" scope="row">
                {row}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
