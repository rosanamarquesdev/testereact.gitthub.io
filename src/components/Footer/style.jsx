import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";

const tableFooter = css`
  width: 100%;
  height: 6.4rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 20px;

  background-color: ${theme.colors.white};

  svg {
    font-size: 3rem;
  }
`;

export const _Footer = styled.footer`
  ${({ $variant }) => {
    switch ($variant) {
      case "table":
        return tableFooter;
      default:
        return null;
    }
  }}
`;
