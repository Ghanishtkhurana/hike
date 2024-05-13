import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [authContext, setAuthContext] = useState(null);

  useEffect(() => {
    const storedAuthContext = localStorage.getItem("chat-app");
    if (storedAuthContext) {
      setAuthContext(JSON.parse(storedAuthContext));
    }
  }, []);
  return (
    <AuthContext.Provider value={{ authContext, setAuthContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
