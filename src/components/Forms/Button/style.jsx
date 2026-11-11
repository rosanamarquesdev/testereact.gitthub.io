import styled, { css } from "styled-components";
import { theme } from "../../../theme/theme";

const primary = css`
  border: none;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  border-radius: 4px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
`;

// Não vou excluir :D
const secondary = css`
  border: none;
  //Recomendo não utilizar dessa forma, é melhor deixar o prŕoprio elemento pai definir o taamanho do button
  width: 20rem;
  height: 3.5rem;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  border-radius: 0.4rem;
  color: ${theme.colors.white};
  background-color: ${theme.colors.darkGray2};
`;

const icon = css`
  background-color: transparent;
  border: none;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

const disabled = css`
  border: none;
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.secondary};
`;

export const _Button = styled.button`
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
      case "secondary":
        return secondary;
      case "icon":
        return icon;
      case "disabled":
        return disabled;
      default:
        return null;
    }
  }}
  // Caso queira passar props que sejam modificadas passe elas diretamente aqui, assim todas as variants terão acesso a elas
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  font-size: ${({ $fontSize }) => $fontSize};
`;
