import React from 'react';

import { AuthProvider } from './auth';
import { SidebarProvider } from './sidebar';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <SidebarProvider>{children}</SidebarProvider>
  </AuthProvider>
);

export default AppProvider;
