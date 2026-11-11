import * as S from "./style.jsx";

export const Header = ({ children, variant }) => {
  return <S._Header $variant={variant}>{children}</S._Header>;
};
