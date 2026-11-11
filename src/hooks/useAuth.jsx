// import { useContext, useDebugValue } from "react";
// import { AuthContext } from "../contexts/AuthContext";

// export const useAuth = () => useContext(AuthContext);

import { useContext, useDebugValue } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);

  useDebugValue(context?.isAuth, (auth) => (auth.user ? "Entrou" : "Saiu"));

  return context;
};
