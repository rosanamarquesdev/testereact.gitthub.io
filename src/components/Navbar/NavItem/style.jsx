import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledNavItem = styled.div`
  display: flex;
  width: 25rem;
  align-items: center;
  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: 1rem;
  background-color: ${({ $ativo }) =>
    $ativo ? theme.colors.primary : "transparent"};

  & img {
    filter: ${({ $ativo }) => ($ativo ? theme.colors.filter : "none")};
  }

  & span {
    color: ${({ $ativo }) =>
      $ativo ? theme.colors.white : theme.colors.lightGray2};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};

    & img {
      filter: ${({ theme }) => theme.colors.filter};
    }

    & span {
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const StyledIconeNav = styled.img`
  margin-right: 1rem;
  width: 3.2rem;
  height: 3.2rem;
`;

export const StyledSpanNav = styled.span`
  width: 100%;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.lightGray2};
`;
export const Options = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
`;

export const OptionText = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  padding: 0.5rem;
  cursor: pointer;
  color: ${({ $ativo }) =>
    $ativo ? theme.colors.black : theme.colors.lightGray2};
  text-decoration: none;

  & img {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1rem;
    filter: ${({ $ativo }) => ($ativo ? theme.colors.filterBlack : "none")};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.black};

    & img {
      filter: ${({ theme }) => theme.colors.filterBlack};
    }
  }
`;
export const SubOptions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  margin: 0.5rem;
  margin-left: 1rem;
`;

export const StyledArrowImg = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;
