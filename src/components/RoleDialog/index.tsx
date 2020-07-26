import React, { useState, useEffect } from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import Role from '../../interfaces/role';
import { getUserData, setUserData } from '../../services/user-data';
import api from '../../services/api';

interface RoleDialogProps {
  userName?: string;
  isOpen: boolean;
  setIsOpen: Function;
  handleAfterSave: Function;
  roles: Role[];
}

const RoleDialog: React.FC<RoleDialogProps> = ({
  isOpen,
  userName,
  setIsOpen,
  roles,
  handleAfterSave,
}: RoleDialogProps) => {
  const [open, setOpen] = useState(false);
  const [role, setRole] = useState<number>(0);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setOpen(false);
    setIsOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRole(event.target.value as number);
  };

  const handleSave = () => {
    const user = getUserData();

    if (!user) {
      return;
    }

    user.role_id = role;

    api.put(`/users/${user.id}`, user).then((result) => {
      setUserData(user);
      handleClose();
      handleAfterSave();
    });
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Olá {userName}!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            É a sua primeira vez aqui? Informe seu papel e clique em 'ENVIAR'
          </DialogContentText>
          <FormControl fullWidth>
            <InputLabel id="select-label">Papel</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={role}
              onChange={handleChange}
              fullWidth
              autoFocus
            >
              {roles.map((role) => (
                <MenuItem key={role.id} value={role.id}>
                  {role.description}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Fechar
          </Button>
          <Button onClick={handleSave} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RoleDialog;
