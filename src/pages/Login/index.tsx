import React from 'react';
import MicrosoftLogin from 'react-microsoft-login';
import { AuthError } from 'msal';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import { login } from '../../services/auth';
import { setUserData } from '../../services/user-data';
import User from '../../interfaces/user';

const Login: React.FC = () => {
  const history = useHistory();
  const CLIENT_ID = 'c3fe5059-0d49-4286-97d2-f8a084961cff';
  const TENANT_URL =
    'https://login.microsoftonline.com/ea47001a-3428-40f3-8ea1-86bdb1a3bc84';

  const authHandler = async (error?: AuthError, auth?: any) => {
    if (!auth) {
      return;
    }

    const { name, userName: email } = auth.authResponseWithAccessToken.account;

    if (name && email) {
      let { data: user } = await api.get<User>(`/users/email/${email}`);

      if (!user) {
        const userData = { name, email };
        const response = await api.post<User>('/users', userData);
        user = response.data;
      }

      const { data: session } = await api.post('/sessions', { email: email });

      login(session.token);
      setUserData(user);

      history.push(`home`);
    }
  };

  const openLogin = (element: HTMLParagraphElement) => {
    if (!element) {
      return;
    }
    element.click();
  };

  return (
    <MicrosoftLogin
      clientId={CLIENT_ID}
      tenantUrl={TENANT_URL}
      authCallback={authHandler}
    >
      <p ref={openLogin} />
    </MicrosoftLogin>
  );
};

export default Login;
