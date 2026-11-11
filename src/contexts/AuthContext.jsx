import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { authApi } from "../services/instance";

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [isAuth, setAuth] = useState(false);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const singIn = async (userData) => {
    try {
      const { cnpj, password } = userData;
      const response = await authApi.post(
        "/adm/login",
        JSON.stringify({
          cnpj,
          password,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const { token, refreshToken } = response.data;

      document.cookie = `refreshToken=${refreshToken}; path=/;`; // Refresh token
      document.cookie = `accessToken=${token}; path=/;`; // Refresh token

      document.cookie = `refreshToken=${refreshToken}; path=/;`;
      document.cookie = `accessToken=${token}; path=/;`;

      setAuth(true);
      navigate("/cadastrar/cliente");
    } catch (error) {
      console.log("Erro ao realizar o login: ", error);
      window.alert("Não foi possível realizar o login");
    }
  };

  const signOut = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");

    setAuth(false);

    navigate("/");
  };

  const refresh = React.useCallback(async () => {
    try {
      const refresh = Cookies.get("refreshToken");
      const token = Cookies.get("accessToken");

      if (!refresh || !token) {
        throw new Error("Tokens ausentes");
      }

      const response = await authApi.get("/adm/refresh-token", {
        headers: {
          refresh: refresh,
          token: token,
        },
      });

      const { accessToken, refreshToken: newRefreshToken } = response.data;

      Cookies.set("accessToken", accessToken, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });

      Cookies.set("refreshToken", newRefreshToken, {
        expires: 7,
        secure: true,
        sameSite: "Strict",
      });

      setAuth(true);
    } catch (error) {
      console.error("Erro ao renovar o token:", error);
      setAuth(false);
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    const refreshToken = Cookies.get("refreshToken");
    const token = Cookies.get("accessToken");

    if (token && refreshToken) {
      setAuth(true);
      refresh();
    } else {
      setAuth(false);
    }
    setLoading(false);
  }, [refresh, navigate]);

  React.useEffect(() => {
    if (isAuth) {
      const intervalId = setInterval(() => {
        refresh();
      }, 300000);
      return () => clearInterval(intervalId);
    }
  }, [isAuth, refresh]);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setAuth,
        userData,
        setUserData,
        singIn,
        signOut,
        token: Cookies.get("accessToken"),
      }}
    >
      {!loading ? children : <p>Aguarde um momento...</p>}{" "}
    </AuthContext.Provider>
  );
}
