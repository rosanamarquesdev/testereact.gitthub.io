import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 30rem;
  background-color: #EFF3E3;
  padding: 2rem;
  height: 100vh;
`;

export const AccordionItem = styled.div`
  padding: 0.6rem;
 
  a {
    margin: 0;
    padding: 2rem;
    font-size: 1.5rem;
    color: #969696
  }

  &:hover {
    cursor: pointer;
  }
`;

export const AccordionTitle = styled.div`
  border-radius: 1rem;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#BBE33D" : "#EFF3E3")};
  padding: 1.5rem;

  h3 {
    margin: 0;
    font-size: 1.8rem;
    color: ${({ isActive }) => (isActive ? "#fff" : "#969696")};
  }

  &:hover {
    background-color: #BBE33D;
    color: #FFFFFF
  }
`;

export const AccordionContent = styled.div`
  color: #BBC8D6;
  max-height: ${({ isActive }) => (isActive ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  /* padding: ${({ isActive }) => (isActive ? "15px" : "0")}; */
  /* padding-left: 1.5rem; */

`;
