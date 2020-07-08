import React, { useEffect, useState } from 'react';

import ExitToApp from '@material-ui/icons/ExitToApp';

import { Content, Header, Inventory, Separator } from './styles';

interface User {
  name: string;
  userName: string;
}

const Sidebar: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const localUser = localStorage.getItem('userData');
    const storagedUser = localUser ? JSON.parse(localUser) : null;
    console.log(localStorage.getItem('userData'));
    setUser(storagedUser);
  }, []);

  return (
    <Content>
      <ExitToApp titleAccess="Sair" />

      <Header>
        <img
          src="https://avatars2.githubusercontent.com/u/8760873?v=4"
          alt="Profile img"
        />

        <div>
          <p>{user?.name}</p>
          {/* <small>larissa.pissurno@db1.com.br</small> */}
          <span>
            <small>Desenvolvedor(a)</small>
          </span>
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
}

export default Sidebar;
