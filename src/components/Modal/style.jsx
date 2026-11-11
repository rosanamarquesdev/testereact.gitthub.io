import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";

export const ModalArea = styled.div``;
export const ModalItens = styled.button``;

const filterModal = css`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 5px;
  position: relative;
  transition-duration: 0.3s;

  &:hover {
    background-color: ${theme.colors.lightGray4};
  }

  svg {
    width: 100%;
    height: 100%;
    color: ${theme.colors.lightGray2};
    cursor: pointer;
  }

  ${ModalArea} {
    position: absolute;
    background-color: ${theme.colors.lightGray4};
    right: 90%;
    z-index: 1000;
    border-radius: 4px;
    top: 10px;
    width: 25rem;
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 17rem;
    padding: 10px 0;
    box-shadow: 0px 0px 5px 0px #000000;

    ${ModalItens} {
      width: 100%;
      height: 5rem;
      display: flex;
      align-items: center;
      background-color: transparent;
      border: none;
      gap: 2px;
      color: ${theme.colors.darkGray};
      cursor: pointer;
      padding: 10px;

      svg {
        width: 25%;
        color: ${theme.colors.darkGray};
      }

      &:hover {
        background-color: ${theme.colors.primary};

        p {
          color: ${theme.colors.white};
        }
        svg {
          color: ${theme.colors.white};
        }
      }

      &.disabled {
        p {
          color: ${theme.colors.lightGray2};
        }
        svg {
          color: ${theme.colors.lightGray2};
        }
      }
    }

    &.active {
      display: flex;
    }
  }
`;

export const _Modal = styled.div`
  ${({ $variant }) => {
    switch ($variant) {
      case "filter-modal":
        return filterModal;
      default:
        return null;
    }
  }}
`;
