"use client";

import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface SidebarContextProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  openSidebar: () => void;
  updateSidebar: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextProps | null>(null);

interface SidebarProviderProps extends PropsWithChildren {}

export const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const updateSidebar = (value: boolean) => {
    setIsSidebarOpen(value);
  };

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpen,
        toggleSidebar,
        closeSidebar,
        openSidebar,
        updateSidebar,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] h-screen overflow-hidden">
        {children}
      </div>
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar debe usarse dentro de un SidebarProvider");
  }
  return context;
};
