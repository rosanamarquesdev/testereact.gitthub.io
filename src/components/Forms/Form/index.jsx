import React from "react";
import { SidebarContext } from "../../../contexts/SidebarContext";
import { Title } from "../../Texts/Title";
import * as S from "./style";

export const Form = ({
  variant = "primary",
  children,
  title,
  width,
  height,
  onSubmit,
}) => {
  const { isActive } = React.useContext(SidebarContext);

  return (
    <S._Form
      onSubmit={onSubmit}
      $variant={variant}
      $width={width}
      $height={height}
      className={`${isActive && "closed-menu-adaptive"}`}
    >
      <Title variant="small" bold="600">
        {title}
      </Title>
      {children}
    </S._Form>
  );
};
