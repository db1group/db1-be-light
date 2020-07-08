import React, { ChangeEvent } from 'react';
import { Typography, InputProps, ValueLabelProps } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchRounded from '@material-ui/icons/SearchRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'

import roles from './roles.json';
import Shell from '../../components/_Shell';
import ResponsibilityCard from '../../components/ResponsibilityCard';

import {
  Box,
  Content,
  Lane,
  Title,
  ExpansionPanelDetails
} from './styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordion: {
      width: '100%',
      marginBottom: 20,
      borderTopLeftRadius: '15px !important',
      borderTopRightRadius: '15px !important',
      borderBottomLeftRadius: '15px !important',
      borderBottomRightRadius: '15px !important',
      borderRadius: 15,
      position: 'unset',
      marginTop: 20
    },
    summary: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    filter: {
      width: '100%'
    }
  }),
);

const Roles: React.FC = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('');
  const [name, setName] = React.useState('');
  const [roleList, setRoleList] = React.useState(roles);

  const handleFilter = (value: string) => {

    const description = (value || '').toUpperCase();
    setName(value);
    const filteredRoles = roles.filter((role) => {
      return role.role.toUpperCase().includes(description);
    });

    setRoleList(filteredRoles);
  };

  return (
    <Content>
      <FormControl fullWidth>

        <TextField
          className={classes.filter}
          id="filled-basic"
          label="Filtrar papéis"
          onChange={(event) => {handleFilter(event.target.value)}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchRounded />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      {roleList.map((role) => (
        <Accordion
          className={classes.accordion}
          key={role.id}
        >
          <AccordionSummary
            className={classes.summary}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography className={classes.heading}>{role.role}</Typography>
          </AccordionSummary>

          <ExpansionPanelDetails>
            {role.responsibilities.map((resp) => (
              <Lane key={resp.id}>
                <Title variant="h6">
                  {resp.groupName}
                </Title>
                {resp.descriptions.map((desc: string) => (
                  <ResponsibilityCard key={Math.random()} description={desc} />
                ))}
              </Lane>
            ))}

            {role.notResponsibilities.length && (
              <Lane>
                <Title variant="h6">
                  Não Responsabilidades:
                </Title>
                {role.notResponsibilities.map((desc) => (
                  <ResponsibilityCard key={Math.random()} description={desc} />
                ))}
              </Lane>
            )}
          </ExpansionPanelDetails>
        </Accordion>
      ))}
    </Content>
  );
}

export default Roles;
