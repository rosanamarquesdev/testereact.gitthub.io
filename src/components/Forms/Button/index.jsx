// Importa todos os arquivos de style.jsx com um alias "S"
import * as S from "./style.jsx";

export const Button = ({
  width,
  height,
  children,
  variant = "primary",
  fontSize,
  disabled = false,
  ...props
}) => {
  return (
    <S._Button
      $width={width}
      $height={height}
      $variant={variant}
      disabled={disabled}
      fontSize={fontSize}
      {...props}
    >
      {children}
    </S._Button>
  );
};
