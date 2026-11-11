import styled, { css } from "styled-components";
import { theme } from "../../../theme/theme";

// Variantes
const large = css`
  font-family: ${theme.fontFamily.default};
  font-size: 24px;
  font-weight: 400;
  line-height: 38px;
  letter-spacing: 0.75px;
  text-align: left;
`;

const medium = css`
  font-family: ${theme.fontFamily.default};
  font-size: 18px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: ${(props) => props.letterSpacing || "0.75px "};
  text-align: left;
`;

const small = css`
  font-family: ${theme.fontFamily.default};
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0.75px;
  text-align: left;
`;

const xSmall = css`
  font-family: ${theme.fontFamily.default};
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0.25px;
  text-align: left;
`;

const tinny = css`
  font-family: ${theme.fontFamily.default};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.5px;
  text-align: left;
`;

export const _Text = styled.p`
  ${({ $variant }) => {
    switch ($variant) {
      case "large":
        return large;
      case "medium":
        return medium;
      case "small":
        return small;
      case "x-small":
        return xSmall;
      case "tinny":
        return tinny;
    }
  }}
  font-weight: ${({ $bold }) => $bold};
  color: ${({ $color }) => $color || `${theme.colors.black}`};
  text-align: ${({ $textAlign }) => $textAlign};
  width: ${({ $width }) => $width};
`;
