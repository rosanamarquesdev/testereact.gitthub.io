import styled, { css } from "styled-components";

const triple = css`
  display: flex;
  width: 100%;
  gap: 10px;
`;
const double = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

const sucess = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 10px;
  width: 100%;
`;

const file = css`
  display: flex;
  align-items: center;
  gap: 30px;

  div:nth-child(1) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
  }

  div:nth-child(2) {
    align-self: ${({ $alignSelf }) => $alignSelf || "flex-end"};
  }
`;

export const _FormsField = styled.div`
  ${({ $variant }) => {
    switch ($variant) {
      case "double":
        return double;
      case "triple":
        return triple;
      case "file":
        return file;
      case "sucess":
        return sucess;
      default:
        return null;
    }
  }}
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
