import { createContext } from "react";

export const initialState = {
  creds: null,
  token: null,
  isLoaded: false,
  isAuthenticated: false,
};

export const AuthContext = createContext(initialState);
