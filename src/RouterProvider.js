import React, { createContext, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

const RouterContext = createContext();

export const useRouter = () => {
  return useContext(RouterContext);
}

export const RouterProvider = ({ children }) => {
  return (
    <RouterContext.Provider value={Router}>
      {children}
    </RouterContext.Provider>
  );
}