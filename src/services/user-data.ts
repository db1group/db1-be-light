export const TOKEN_KEY = '@db1BeLight:userData';

interface UserData {
  name: string;
  email: string;
}

export const getUserData = () => localStorage.getItem(TOKEN_KEY);
export const setUserData = (userData: UserData) =>
  localStorage.getItem(TOKEN_KEY);
