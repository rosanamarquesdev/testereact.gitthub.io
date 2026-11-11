import styled, { css, keyframes } from "styled-components";
import { theme } from "../../theme/theme";

const LoginHeader = css`
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
`;

const TableHeader = css`
  display: flex;
  background-color: ${theme.colors.white};
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  width: 100%;
  height: 6.6rem;
  border-radius: 4px;
  padding: 0 10px;
`;

export const _Header = styled.header`
  ${({ $variant }) => {
    switch ($variant) {
      case "login":
        return LoginHeader;
      case "table":
        return TableHeader;
      default:
        return "";
    }
  }}
`;
