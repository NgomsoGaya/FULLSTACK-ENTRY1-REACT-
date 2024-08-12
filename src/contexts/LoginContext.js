import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (username, password) => {
    // Replace this with actual authentication logic
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
      localStorage.setItem('user', JSON.stringify({ username }));
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
