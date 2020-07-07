import React, { ChangeEvent } from 'react';
import { Typography, InputProps, ValueLabelProps } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchRounded from '@material-ui/icons/SearchRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';


import roles from './roles.json';
import Shell from '../../components/_Shell';
import ResponsibilityCard from '../../components/ResponsibilityCard';

import {
  Box,
  Content,
  Lane,
  Title
} from './styles';

import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'

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
      position: 'unset'
    },
    summary: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
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

  const handleChange = (panel: string) => (event: ChangeEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : '');
  };

  return (
    <Content>
      {/* <InputFilter
        color="secondary"
        id="standard-name"
        label="Filtrar papéis"
        value={name}
        onChange={(event) => {handleFilter(event.target.value)}}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchRounded />
            </InputAdornment>
          ),
        }}
      /> */}

{/* <Accordion className={classes.accordion}>
          <AccordionSummary
            className={classes.summary}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion> */}
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

          <AccordionDetails>
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
                  Responsabilidades de outros papéis:
                </Title>
                {role.notResponsibilities.map((desc) => (
                  <ResponsibilityCard key={Math.random()} description={desc} />
                ))}
              </Lane>
            )}
             {/* <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
              sit amet blandit leo lobortis eget.
            </Typography> */}
          </AccordionDetails>
        </Accordion>
      ))}
    </Content>
  );
}

export default Roles;
