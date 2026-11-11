import React from "react";
import * as S from "./style";

export const Footer = ({ variant, children }) => {
  return <S._Footer $variant={variant}>{children}</S._Footer>;
};
