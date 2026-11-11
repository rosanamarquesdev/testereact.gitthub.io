import { Route, Routes } from "react-router-dom";

import { UserLogin } from "../screens/Login";
import { PasswordReset } from "../screens/PasswordReset";

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<UserLogin />} />
        <Route path="/resetar/senha/email" element={<PasswordReset />} />
        <Route path="/resetar/senha/codigo" element={<PasswordReset />} />
        <Route path="/resetar/senha/novasenha" element={<PasswordReset />} />
        <Route path="/resetar/senha/sucesso" element={<PasswordReset />} />
      </Route>
    </Routes>
  );
};
