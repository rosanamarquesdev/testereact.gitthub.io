import React from "react";
import { ThemeProvider } from "styled-components";
import { AuthContext } from "./contexts/AuthContext";
import { PrivateRoutes } from "./routes/private.routes";
import { PublicRoutes } from "./routes/public.routes";

import { theme } from "./theme/theme";

export function App() {
  const { isAuth } = React.useContext(AuthContext);

  return (
    <>
      <ThemeProvider theme={theme}>
        {isAuth ? <PrivateRoutes /> : <PublicRoutes />}
      </ThemeProvider>
    </>
  );
}
