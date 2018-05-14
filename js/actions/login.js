export const LOGIN = "LOGIN";
export function login(phoneNumber, password) {
  return {
    type: LOGIN,
    phoneNumber,
    password
  };
}

export const LOGOUT = "LOGOUT";
export function logout() {
  return {
    type: LOGOUT
  };
}
