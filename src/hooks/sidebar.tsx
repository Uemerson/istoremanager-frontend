import React, { createContext, useState, useCallback, useContext } from 'react';

interface SidebarContextData {
  data: { open: boolean };
  handleDrawerOpen(): void;
  handleDrawerClose(): void;
}

interface SidebarState {
  open: boolean;
}

const SidebarContext = createContext<SidebarContextData>(
  {} as SidebarContextData,
);

export const SidebarProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<SidebarState>(() => {
    const sidebar = localStorage.getItem('@up-backup:sidebar');
    return { open: sidebar === 'open' };
  });

  const handleDrawerOpen = useCallback(() => {
    localStorage.setItem('@up-backup:sidebar', 'open');
    setData({ open: true });
  }, []);

  const handleDrawerClose = useCallback(() => {
    localStorage.setItem('@up-backup:sidebar', 'close');
    setData({ open: false });
  }, []);

  return (
    <SidebarContext.Provider
      value={{ data, handleDrawerOpen, handleDrawerClose }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export function useSidebar(): SidebarContextData {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error('useSidebar must be used within an SidebarProvider');
  }

  return context;
}
