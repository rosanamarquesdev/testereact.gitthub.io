import React from "react";
import { theme } from "../theme/theme";

// Esse contexto passa as informações do aside para os componentes de layout
export const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const [isActive, setIsActive] = React.useState(false);
  const [isHover, setIsHover] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= Number.parseInt(theme.media.md)) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <SidebarContext.Provider
      value={{ isActive, setIsActive, isHover, setIsHover }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
