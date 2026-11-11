import React from "react";
import { _LinkXSmall } from "../Login/style";
import * as S from "./style";

export const LogoLogin = ({ href, src, alt, margin }) => {
  return (
    <S._WrappLogo>
      <_LinkXSmall href={href}>
        <S._StyledIconLogo src={src} alt={alt} $margin={margin} />
      </_LinkXSmall>
    </S._WrappLogo>
  );
};
