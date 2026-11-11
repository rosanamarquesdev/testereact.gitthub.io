import styled, { css } from "styled-components";
import { theme } from "../../../../theme/theme";

const primary = css`
  width: 22.2rem;
  height: 14.1rem;
  border: 4px dashed ${theme.colors.lightGray};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  background-image: url(${(props) => (!props.$image ? "" : props.$image)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const secondary = css`
  width: 23.6rem;
  height: 15rem;
  border: 3px dashed ${theme.colors.lightGray};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  background-image: url(${(props) => (!props.$image ? "" : props.$image)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const product = css`
  width: 100%;
  height: 15rem;
  border: 3px dashed ${theme.colors.lightGray};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  background-image: url(${(props) => (!props.$image ? "" : props.$image)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FileContainer = styled.label`
  ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return primary;
      case "secondary":
        return secondary;
      case "product":
        return product;
      default:
        return null;
    }
  }}
`;
export const _File = styled.input.attrs({
  type: "file",
})`
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  position: absolute;
`;

export const CenterBlock = styled.div`
  display: ${(props) => (!props.$image ? "flex" : "none !important")};
  align-items: center !important;
  justify-content: center !important;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  display: ${(props) => (!props.$image ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  text-align: center;

  &:hover {
    background: rgba(148, 163, 184, 0.4);
    /* opacity: 0.4; */
    color: ${(props) => (!props.$image ? "#fff" : "")};
    cursor: pointer;
    p,
    svg {
      display: block;
    }
  }

  p,
  svg {
    display: none;
  }

  p {
    text-align: center;
  }
`;

export const ButtonFileChange = styled.button`
  width: 90%;

  background: transparent;
  border: 3px dashed #fff;
  color: #fff;

  label {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 0.8rem;
    font-size: 1.1rem;
    cursor: pointer;
  }
`;

export const ButtonFile = styled.button`
  width: 90%;
  padding: 0.8rem;
  background: transparent;
  border: 3px dashed #fff;
  color: #fff;
`;
