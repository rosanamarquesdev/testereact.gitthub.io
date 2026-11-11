import { Title } from "../../Texts/Title/index";

import * as S from "./style";

export const Card = ({
  variant = "form-container",
  width,
  height,
  children,
  padding,
  title,
  backgroundColor,
}) => {
  return (
    <S._Card
      $variant={variant}
      $width={width}
      $height={height}
      $padding={padding}
      backgroundColor={backgroundColor}
    >
      <Title variant="x-small" bold="600">
        {title}
      </Title>
      {children}
    </S._Card>
  );
};
