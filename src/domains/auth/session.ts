const USER_KEY = 'user';

type Account = {
  firstName: string
  lastName: string
}

export type SessionUser = {
  token: string;
  account: Account;
};

export function getUser(): SessionUser | null {
  const item = localStorage.getItem(USER_KEY);
  return item ? JSON.parse(item) : null;
}

export function setUser(user: SessionUser) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function removeUser() {
  localStorage.removeItem(USER_KEY);
}


export function setToken(token: string) {
  const user = getUser();
  if (!user) return;

  setUser({ ...user, token });
}
