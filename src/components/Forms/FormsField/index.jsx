import * as S from "./style";

export const FormsField = ({
  children,
  variant = "double",
  width,
  height,
  align,
}) => {
  return (
    <S._FormsField
      $variant={variant}
      $width={width}
      $height={height}
      $alignSelf={align}
    >
      {children}
    </S._FormsField>
  );
};
