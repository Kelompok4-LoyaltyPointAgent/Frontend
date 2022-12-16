import { useEffect, useReducer } from "react";
import { axios } from "../configs/axios";
import { AuthContext, initialState } from "../contexts";

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      const { creds, token } = action.payload;

      localStorage.setItem("token", token);

      return { ...state, creds, token, isLoaded: true, isAuthenticated: true };
    case "LOGOUT":
      localStorage.removeItem("token");
      return { ...initialState, isLoaded: true, isAuthenticated: false };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const refresh = async (token) => {
      try {
        const res = await axios.get("/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const { data } = res.data;
        dispatch({ type: "LOGIN", payload: { token, creds: data.name } });
      } catch (error) {
        dispatch({ type: "LOGOUT" });
      }
    };
    const token = localStorage.getItem("token");

    if (token) refresh(token);
    else dispatch({ type: "LOGOUT" });
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
