import { createContext, useState } from "react";
export const AuthContext = createContext();

//  context provider
export const AuthProvider = (props) => {
  const [user, setUser] = useState([]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};
