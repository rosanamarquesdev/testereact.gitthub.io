import styled, { css } from "styled-components";
import { theme } from "../../../../theme/theme";

// Input Especial (aplicado nas tabelas)
export const SearchIconContainer = styled.div``;
export const ControlContainer = styled.div``;

export const ExpandableInputContainer = styled.div`
  background-color: ${theme.colors.white};
  display: flex;
  width: 5rem;
  height: 5rem;
  gap: 1rem;
  align-items: center;
  position: relative;

  input {
    width: 0;
    height: 100%;
    padding: 0;
    font-size: 14px;
    position: absolute;
    font-size: 1.7rem;
    z-index: 1;
    transition-duration: 0.4s;
    left: 0;
    padding-left: 20px;
    border-radius: 4px;
    border: 1px solid ${theme.colors.lightGray3};
    font-size: 16px;

    // Estilo de foco
    &:focus {
      border-color: ${theme.colors.lightGray2};
      outline: none;
    }
  }

  ${ControlContainer} {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    height: 100%;
    width: 5rem;
    right: 0;
    background-color: inherit;

    ${SearchIconContainer} {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 100%;
      width: 100%;
      border-radius: 50%;
      padding: 5px;
      cursor: pointer;
      transition-duration: 0.2s;
      svg {
        width: 80%;
        height: 80%;
        color: ${theme.colors.lightGray2};
      }
      &:hover {
        background-color: ${theme.colors.lightGray4};
      }
    }
  }

  &.expand-input {
    padding-right: 10px;
    input {
      width: 30rem;
      padding-left: 20px;
      left: -600%;
    }
  }
`;

// variantes
const primary = css`
  padding-left: 20px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid ${theme.colors.lightGray3};
  font-size: 20px;

  // Estilo de foco
  &:focus {
    border-color: ${theme.colors.lightGray};
    outline: none;
  }
`;

const secondary = css`
  padding: 1.5rem;
  width: 100%;
  outline: none;
  border-radius: 4px;
  border: none;
  font-size: 14px;
`;

// Principais
export const _Input = styled.input`
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
      case "secondary":
        return secondary;
      case "expandable-input":
        return expandableInput;
      default:
        return null;
    }
  }}
  height: ${({ $height }) => $height};
`;

// Estilo para o Select
export const Select = styled.select`
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
      default:
        return null;
    }
  }}
  height: ${({ $height }) => $height};
`;

export const InputContainer = styled.div`
  width: 100%;
  label {
    width: inherit;
    height: inherit;
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    text-align: inherit;
  }
  width: ${({ $width }) => $width};
  align-self: ${({ $self }) => $self};
`;
