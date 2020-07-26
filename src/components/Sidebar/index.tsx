import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import ExitToApp from '@material-ui/icons/ExitToApp';

import { Content, Header, Inventory, Separator, AvatarImage } from './styles';
import User from '../../interfaces/user';
import { getUserData } from '../../services/user-data';
import { logout } from '../../services/auth';

const Sidebar: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<User>();
  const [avatarName, setAvatarName] = useState('');

  useEffect(() => {
    const userData = getUserData();
    const [firstName, ...rest] = (userData.name || '').split(' ');
    const lastName = rest.pop() || '';

    setUser(userData);
    setAvatarName(`${firstName.charAt(0)}${lastName.charAt(0)}`);
  }, []);

  const handleLogout = (): void => {
    logout();
    history.push('login');
  };

  return (
    <Content>
      <ExitToApp titleAccess="Sair" onClick={handleLogout} />

      <Header>
        <AvatarImage variant="rounded">{avatarName}</AvatarImage>
        <div>
          <p title={user?.email}>{user?.name}</p>
          {user?.role_id && (
            <span>
              <small>Desenvolvedor(a)</small>
            </span>
          )}
        </div>
      </Header>

      <Separator />

      <Inventory title="em breve...">
        <p>Inventário</p>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </Inventory>
    </Content>
  );
};

export default Sidebar;
