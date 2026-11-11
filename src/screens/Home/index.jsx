import React from "react";
import styled from "styled-components";
import { useTokenRefresh } from "../../hooks/useRefreshToken";

export const Home = () => {
  useTokenRefresh();
  return (
    <div>
      <h1 style={{ fontSize: "2rem" }}>Home!</h1>
    </div>
  );
};
