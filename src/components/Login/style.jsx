import styled from "styled-components";
import { theme } from "../../theme/theme";

export const _LinkXSmall = styled.a`
  font-family: ${theme.fontFamily.default};
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.black || props.$color};
  letter-spacing: 0.25px;
  margin: ${(props) => props.$margin || "0 0 0 .2rem"};
  text-decoration: none;
  cursor: pointer;
`;

export const _DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.$gap || "1.5rem"};
  width: 100%;
  margin: ${(props) => props.$margin || "0px"};

  a {
    font-family: ${theme.fontFamily.default};
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.black || props.$color};
    letter-spacing: 0.25px;
    margin: ${(props) => props.$margin || "0 0 0 .2rem"};
    text-decoration: none;
    cursor: pointer;
  }

  span {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    cursor: pointer;
    letter-spacing: inherit;
    color: ${theme.colors.black};

    &.error {
      font-size: 1.5rem;
      color: #f54949;
      display: block;
      width: 100%;
      text-align: left;
    }
  }
`;

export const _ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

export const _LinkText = ({ href, children, img }) => {
  return (
    <_LinkXSmall href={href} img={img}>
      {children}
    </_LinkXSmall>
  );
};
