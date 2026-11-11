import styled, { css } from "styled-components";
import { theme } from "../../../theme/theme";

const large = css`
  font-family: ${theme.fontFamily.default};
  font-size: 64px;
  font-weight: 400;
  line-height: 66px;
  letter-spacing: 0.9999998807907104px;
  text-align: left;
`;

const medium = css`
  font-family: ${theme.fontFamily.default};
  font-size: 48px;
  font-weight: 400;
  line-height: 50px;
  letter-spacing: 0.9999998807907104px;
  text-align: left;
`;

const small = css`
  font-family: ${theme.fontFamily.default};
  font-size: 36px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 1px;
  text-align: left;
`;

const xSmall = css`
  font-family: ${theme.fontFamily.default};
  font-size: 28px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: ${(props) => props.letterSpacing || "2px"};
  text-align: left;
`;

export const _Title = styled.h3`
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
    }
  }}
  font-weight: ${({ $bold }) => $bold};
  color: ${({ $color }) => $color || `${theme.colors.black}`};
  width: ${({ $width }) => $width};
`;
