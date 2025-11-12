// Crea un contexto simple que devuelve por el momento un estado de abierto y cerrado

import { createContext, FC, PropsWithChildren, useState } from "react";

interface SidebarContextProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextProps >({
  isOpen: false,
  toggleSidebar: () => {},
});

interface SidebarProviderProps extends PropsWithChildren {}

export const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
