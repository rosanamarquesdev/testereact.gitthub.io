import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const CompanyArea = styled.section`
  width: ${({ $width }) => $width};
  height: 24rem;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .company-texts {
    width: 80%;
    height: 100%;
    div:nth-child(1) {
      height: 40%;
      display: flex;
      text-align: center;
      width: 100%;
      gap: 20px;

      h3 {
        height: 3.6rem;
      }
      p {
        height: 3.6rem;
        display: flex;
        align-items: flex-end;
      }
    }

    div:nth-child(2) {
      height: 50%;
      width: 100%;
      display: flex;
      flex-direction: row;
    }
  }

  @media (max-width: ${theme.media.md}) {
    .company-texts {
      div:nth-child(1) {
        h3 {
          height: 6rem;
        }
        p {
          height: 6rem;
          padding-top: 5px;
          align-items: flex-start;
        }
      }
    }
  }

  .company-image {
    height: 19.2rem;
    max-width: 32.1rem;
    width: 40%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
  }
`;

export const CompanyImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;

`;

export const InfoArea = styled.ul`
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  list-style: none;
  flex-direction: column;

  p:nth-child(2),
  p:nth-child(3) {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    &::before {
      content: "";
      width: 8px;
      height: 8px;
      background-color: ${theme.colors.lightGray};
      border-radius: 50%;
    }
  }
`;

export const TablesArea = styled.section`
  display: flex;
  align-items: center;
  padding-top: 50px;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const ContactImage = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 50%;

  img {
    border-radius: 50%;
    width: 100%;
    object-fit: cover;
  }
`;
