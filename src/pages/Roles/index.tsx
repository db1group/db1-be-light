import React, { useEffect, useState } from 'react';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchRounded from '@material-ui/icons/SearchRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';

import api from '../../services/api';
import Role from '../../interfaces/role';

import { Content, Box, AccordionDetails } from './styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    accordion: {
      width: '100%',
      marginBottom: 20,
      borderTopLeftRadius: '6px !important',
      borderTopRightRadius: '6px !important',
      borderBottomLeftRadius: '6px !important',
      borderBottomRightRadius: '6px !important',
      borderRadius: 6,
      position: 'unset',
      marginTop: 20,
    },
    summary: {
      width: '100%',
      background: '#dbe9f0',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      textTransform: 'uppercase',
      color: '#006d99',
    },
    fullWidth: {
      width: '100%',
    },
  })
);

const Roles: React.FC = () => {
  const classes = useStyles();
  const [] = React.useState('');
  const [, setName] = React.useState('');
  const [roles, setRoles] = useState<Role[]>([]);
  const [roleList, setRoleList] = useState<Role[]>([]);

  useEffect(() => {
    api.get<Role[]>('/roles').then((response) => {
      setRoles(response.data);
      setRoleList(response.data);
    });
  }, []);

  const handleFilter = (value: string) => {
    const description = (value || '').toUpperCase();
    setName(value);
    const filteredRoles = roles.filter((role) => {
      return role.description.toUpperCase().includes(description);
    });

    setRoleList(filteredRoles);
  };

  return (
    <Content>
      <FormControl fullWidth>
        <TextField
          className={classes.fullWidth}
          id="filled-basic"
          label="Filtrar papéis"
          onChange={(event) => {
            handleFilter(event.target.value);
          }}
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
        <ExpansionPanel className={classes.accordion} key={role.id}>
          <ExpansionPanelSummary
            className={classes.summary}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography className={classes.heading}>
              {role.description}
            </Typography>
          </ExpansionPanelSummary>

          <AccordionDetails>
            <Typography variant="h6" className={classes.fullWidth}>
              Responsabilidades:
            </Typography>

            {role.responsibilities
              .filter((responsibility) => responsibility.category)
              .map((responsibility) => (
                <Box key={responsibility.id}>
                  <span>{responsibility.description}</span>

                  <small>{responsibility.category}</small>
                </Box>
              ))}

            {role.responsibilities.filter(
              (responsibility) => !responsibility.category
            ).length > 0 && (
              <Typography variant="h6" className={classes.fullWidth}>
                Não responsabilidades:
              </Typography>
            )}

            {role.responsibilities
              .filter((responsibility) => !responsibility.category)
              .map((responsibility) => (
                <Box key={responsibility.id}>
                  <span>{responsibility.description}</span>

                  <small>{responsibility.category}</small>
                </Box>
              ))}
          </AccordionDetails>
        </ExpansionPanel>
      ))}
    </Content>
  );
};

export default Roles;
