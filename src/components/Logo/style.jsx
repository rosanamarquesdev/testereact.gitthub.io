import styled from "styled-components";

export const _WrappLogo = styled.div`
    margin: 0;
    display: flex;
    align-items: center;
`;

export const _StyledIconLogo = styled.img`
    margin: ${(props) => props.margin || "auto"};
`;
