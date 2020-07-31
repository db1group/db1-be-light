import User from '../interfaces/user';
export const TOKEN_KEY = '@db1BeLight:userData';

export const getUserData = (): User => {
  const userStoraged = localStorage.getItem(TOKEN_KEY) || '{}';

  return userStoraged && JSON.parse(userStoraged);
};

export const setUserData = (userData: User) =>
  localStorage.setItem(TOKEN_KEY, JSON.stringify(userData));
