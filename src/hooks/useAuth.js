import { useContext, useDebugValue } from "react";
import { AuthContext } from "../context/index.js";

export const useAuth = () => {
  const { auth } = useContext(AuthContext);

  useDebugValue(auth, (auth) =>
    auth?.user ? "user loged in" : "user loged out"
  );

  return useContext(AuthContext);
};
