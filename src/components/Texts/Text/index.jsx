import * as S from "./style";
export const Text = ({
  bold,
  children,
  variant = "medium",
  color,
  style,
  align,
  width,
  ...props
}) => {
  return (
    <S._Text
      $variant={variant}
      $bold={bold}
      $color={color}
      style={style}
      $textAlign={align}
      $widht={width}
      {...props}
    >
      {children}
    </S._Text>
  );
};
