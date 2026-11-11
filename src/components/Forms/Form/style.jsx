import styled, { css } from "styled-components";
import { theme } from "../../../theme/theme";

const primary = css`
  width: 90%;
  height: 100%;
  padding: 15px 49px;
  background-color: ${theme.colors.lightgray4};
  display: flex;
  align-self: center;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  gap: 32px;

  // Classe para adaptação quando o menu estiver fechado
  &.closed-menu-adaptive {
    width: 80%;
    max-width: 87.8rem;
  }
  @media (max-width: ${theme.media.md}) {
    padding: 15px 20px;
    width: 80%;
    max-width: 87.8rem;
  }
`;

const secondary = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap || "2.3rem"};
`;

export const _Form = styled.form`
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
      case "secondary":
        return secondary;
    }
  }}
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
