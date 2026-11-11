import styled, { css } from "styled-components";
import { theme } from "../../theme/theme";

// TableArea
export const TableArea = styled.div``;

// TitleTable
export const TitleTable = styled.div``;

// Container
export const Container = styled.div``;

// TableWrapper
export const TableWrapper = styled.div``;

// Table
export const Table = styled.table.attrs(({ $width }) => ({
  style: {
    width: $width || "100%", // Setting width dynamically via props
  },
}))``;

// Thead and Tbody
export const Thead = styled.thead``;
export const Tbody = styled.tbody``;

// Resizer & Order (Empty components kept for consistency)
export const Resizer = styled.div``;
export const Order = styled.div``;

// Tr
export const Tr = styled.tr``;

// ThContent
export const ThContent = styled.div``;

// Th (Table Header)
export const Th = styled.th.attrs(({ $width }) => ({
  style: {
    width: $width,
  },
}))``;

// Td (Table Data)
export const Td = styled.td.attrs(({ $width, $textAlign }) => ({
  style: {
    width: $width,
    textAlign: $textAlign,
  },
}))``;

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background: rgba(255, 255, 255, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 50%;
    height: 50%;
    color: ${theme.colors.primary};
  }

  &.hidden-load {
    display: none;
  }
`;

// IconContainer (for icons)
export const IconContainer = styled.div`
  display: flex;
  gap: 10px;
  height: 100%;
  /* justify-content: center;
  align-items: center; */

  svg {
    font-size: 3rem;
    color: ${theme.colors.lightGray};
    cursor: pointer;

    &:hover {
      color: ${theme.colors.black};
    }
  }

  .icon {
    font-size: 2.5rem;
  }
`;

// Variante Principal
const mainTable = css`
  width: 90%;
  align-self: center;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  height: 100%;
  

  ${TableArea} {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
  }
  ${TitleTable} {
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;
    font-weight: bold;

    & a {
      color: ${theme.colors.darkblue};
      font-size: 2rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        color: ${theme.colors.lightGray};
      }
    }
  }
  ${Container} {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${theme.colors.white};

    /* Aqui muda o tamanho da tabela */
    min-height: 65rem;
  }

  ${TableWrapper} {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    position: relative;
  }
  ${Table} {  
    border-collapse: collapse;
    min-width: 100%;
    
  }
  ${Thead} {
  }
  ${Tbody} {

  }
  ${Tr} {
    &:hover td {
      background-color: ${theme.colors.lightGray4};
    }
  }

  ${ThContent} {
  }

  ${Th} {
    padding: 15px;
    text-align: left;
    position: relative;
    border-top: 1px solid ${theme.colors.lightGray3};
    border-bottom: 1px solid ${theme.colors.lightGray3};

    &:hover {
      background-color: ${theme.colors.lightGray4};
    }


    ${ThContent} {
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;

      &.option {
        align-items: center;
        justify-content: center;
      }
    
    }

    ${Resizer} {
      width: 5px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
      cursor: ew-resize;
      user-select: none;
      touch-action: none;
      opacity: 0;
      border-radius: 6px;

      &:hover {
        background-color: ${theme.colors.lightGray2};
        opacity: 1;
      }

      &.isResizing {
        background-color: ${theme.colors.primary};
        opacity: 1;
      }
    }

    ${Order} {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;

      svg {
        position: absolute;
        cursor: pointer;
        font-size: 2rem;
        color: ${theme.colors.lightGray3};
        opacity: 0;
        transition-duration: 0.2s;
      }

      &:hover .default {
        color: ${theme.colors.lightGray2};
        opacity: 1;
      }

      .default {
        opacity: 1;
        transition-duration: 0.2s;
      }

      .asc,
      .desc {
        transition-duration: 0.2s;
        opacity: 1;
        color: ${theme.colors.primary};
      }
    }
  }
  ${Td} {
    font-size: 1.6rem;
    border-bottom: 1px solid ${theme.colors.lightGray3};
    color: ${theme.colors.lightGray};
    padding: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 10em;
    min-width: 10em;

    
    p {
      text-align: left;
      width: 100%;
      height: 100%;
    }
  }
`;

const contactTable = css`
  width: 90%;
  align-self: center;
  display: flex;
  flex-direction: column;
  height: 100%;

  ${TableArea} {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
  }
  ${TitleTable} {
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    font-weight: bold;

    & a {
      color: ${theme.colors.darkblue};
      font-size: 1.2rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      &:hover {
        color: ${theme.colors.lightGray};
      }
    }
  }
  ${Container} {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #f9f9f9;
    min-height: 37rem;
    border-radius: 8px;
  }

  ${TableWrapper} {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    position: relative;
  }
  ${Table} {
    border-collapse: collapse;
    white-space: nowrap;
    min-width: 100%;
  }
  ${Thead} {
    background-color: #f3f3f3;
    border-radius: 8px;
  }
  ${Tbody} {
  }
  ${Tr} {
    &:hover td {
      background-color: ${theme.colors.lightGray4};
    }
  }
  ${ThContent} {
  }
  ${Th} {
    white-space: normal;
    padding: 15px;

    text-align: left;
    position: relative;
    background-color: #f3f3f3;
    border-top: 1px solid ${theme.colors.lightGray3};

    border-bottom: 1px solid ${theme.colors.lightGray3};

    &:hover {
      background-color: ${theme.colors.lightGray4};
    }

    &:last-child {
      text-align: center;
    }

    ${ThContent} {
      font-size: 1.6rem;
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;

      /* &:first-child {
        justify-content: center;
      } */
    }

    ${Resizer} {
      width: 5px;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
      cursor: ew-resize;
      user-select: none;
      touch-action: none;
      opacity: 0;
      border-radius: 6px;

      &:hover {
        background-color: ${theme.colors.lightGray2};
        opacity: 1;
      }

      &.isResizing {
        background-color: ${theme.colors.primary};
        opacity: 1;
      }
    }
  }
  ${Td} {
    font-size: 1.6rem;
    border-bottom: 1px solid ${theme.colors.lightGray3};
    color: ${theme.colors.lightGray};
    padding: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 10em;
    min-width: 10em;

    &.w-5em {
      max-width: 5em;
      min-width: 5em;
    }
    
    p {
      text-align: left;
      width: 100%;
      height: 100%;
    }
  }
`;

export const MainTableContainer = styled.section`
  ${({ $variant }) => {
    switch ($variant) {
      case "main-table":
        return mainTable;
      case "contact-table":
        return contactTable;
      default:
        return null;
    }
  }}
  padding: ${({ $padding }) => $padding};
  width: ${({ $width }) => $width};
`;
