import React from 'react';

import Shell from '../../components/Shell';

import { Header } from './styles';

const Main: React.FC = () => {
  return (
    <Shell activeRoute="main">
      <Header>
        <img
          src="https://avatars2.githubusercontent.com/u/8760873?v=4"
          alt="Profile img"
        />
        <div>
          <p>Larissa Pissurno</p>
          <small>larissa.pissurno@db1.com.br</small>
          <span>
            <small>Desenvolvedor(a)</small>
          </span>
        </div>
      </Header>
    </Shell>
  );
}

export default Main;
