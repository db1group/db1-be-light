import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';

import api from '../../services/api';

import RoleDialog from '../../components/RoleDialog';
import { getUserData } from '../../services/user-data';
import User from '../../interfaces/user';
import Role from '../../interfaces/role';
import Responsibility from '../../interfaces/responsibility';

import { Content, Box } from './styles';
import { responsiveFontSizes } from '@material-ui/core';

const MyData: React.FC = () => {
  const [openRoleDialog, setOpenRoleDialog] = useState(false);
  const [roles, setRoles] = useState<Role[]>([]);
  const [user, setUser] = useState<User>();
  const [userRole, setUserRole] = useState<Role>();

  useEffect(() => {
    const userData = getUserData();
    setUser(userData);

    if (!userData.role_id) {
      api.get<Role[]>('/roles').then((result) => {
        setRoles(result.data || []);
        setOpenRoleDialog(true);
      });

      return;
    }

    getUserRole();
  }, []);

  const handleOpenRoleDialog = (): void => {
    setOpenRoleDialog(true);
  };

  const getUserRole = async () => {
    const userData = getUserData();
    const response = await api.get<Role>(`/users/role/${userData.id}`);

    setUserRole(response.data);
  };

  return (
    <>
      {user?.role_id && (
        <Content>
          <p>Papel: {userRole?.description}</p>
          <br></br>
          <p>Responsabilidades:</p>
          <br></br>
          <div>
            {userRole?.responsibilities
              .filter((responsibility) => responsibility.category)
              .map((responsibility) => (
                <Box key={responsibility.id}>
                  <span>{responsibility.description}</span>

                  <small>{responsibility.category}</small>
                </Box>
              ))}
          </div>
          <br></br>
          <p>Não responsabilidades:</p>
          <br></br>
          <div>
            {userRole?.responsibilities
              .filter((responsibility) => !responsibility.category)
              .map((responsibility) => (
                <Box key={responsibility.id}>
                  <span>{responsibility.description}</span>
                </Box>
              ))}
          </div>
        </Content>
      )}

      {!user?.role_id && (
        <Content>
          <Button
            variant="contained"
            color="primary"
            onClick={handleOpenRoleDialog}
          >
            Informe seu papel
          </Button>
        </Content>
      )}
      <RoleDialog
        isOpen={openRoleDialog}
        userName={user?.name}
        roles={roles}
        setIsOpen={setOpenRoleDialog}
        handleAfterSave={getUserRole}
      />
    </>
  );
};

export default MyData;
