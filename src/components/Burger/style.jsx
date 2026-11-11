import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";

const navBurger = css`
  border: none;
  background-color: transparent;
  position: relative;
  position: fixed;
  width: 6rem;
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 10px;

  svg {
    width: 5rem;
    height: 5rem;
    background-color: inherit;
    color: ${theme.colors.lightGray};
    transition: transform 0.2s, opacity 0.2s;
    cursor: pointer;
  }

  &:hover {
    svg {
      transform: scale(1.1);
      color: ${theme.colors.primary}; 
    }
  }

  &.active {
    display: flex;
  }

  &.hover {
    width: 27rem;
    svg {
      transform: scale(1.2);
    }
  }

  @media (max-width: ${theme.media.md}) {
    display: flex;
    svg {

      display: none;
      
    }
  }
`;

export const _Burger = styled.button`
  ${({ $variant }) => {
    switch ($variant) {
      case "nav-burger":
        return navBurger;
      default:
        return null;
    }
  }}
`;
