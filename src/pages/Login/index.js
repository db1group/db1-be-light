import React from 'react';
import MicrosoftLogin from 'react-microsoft-login';

export default () => {
  const CLIENT_ID = 'c3fe5059-0d49-4286-97d2-f8a084961cff';
  const TENANT_URL =
    'https://login.microsoftonline.com/ea47001a-3428-40f3-8ea1-86bdb1a3bc84/';

  const authHandler = (err, { authResponseWithAccessToken }) => {
    const { name, userName } = authResponseWithAccessToken.account;
    console.log({ name, userName });
  };

  return (
    <MicrosoftLogin
      clientId={CLIENT_ID}
      tenantUrl={TENANT_URL}
      authCallback={authHandler}
    />
  );
};
