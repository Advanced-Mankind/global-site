import React, { useEffect, useState } from "react";

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
  const [user, setuser] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setuser("user");
  }, []);

  return (
    <Auth.Provider
      value={{
        user,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
