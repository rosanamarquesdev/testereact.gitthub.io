import React from "react";
import { DoubleArrow } from "../../../public/DoubleArrow";
import { SidebarContext } from "../../contexts/SidebarContext";
import * as S from "./style";

export const Burger = ({
  variant = "nav-burger",
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const { isActive, isHover } = React.useContext(SidebarContext);

  return (
    <S._Burger
      $variant={variant}
      className={`${isActive && "active "} ${
        isHover ? "hover " : "hover-closed"
      } `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <DoubleArrow onClick={onClick} />
    </S._Burger>
  );
};
