import React, { createContext, useState } from 'react';

export const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
   const [roleValue, setRoleValue] = useState();

   return <RoleContext.Provider value={{ roleValue, setRoleValue }}>{children}</RoleContext.Provider>;
};
