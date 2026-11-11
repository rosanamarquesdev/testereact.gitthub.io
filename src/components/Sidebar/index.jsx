import React from "react";
import ImgLogo from "/assets/logo.svg";
import { DoubleArrow } from "../../../public/DoubleArrow";
import { SidebarContext } from "../../contexts/SidebarContext";
import { theme } from "../../theme/theme";
import { Burger } from "../Burger";
import { Logo } from "../LogoSidebar";
import { Navbar } from "../Navbar";
import {
  ArrowContainer,
  StyledResponsiveSidebar,
  StyledSidebar,
  StyledSidebarContainer,
} from "./style";

// Não está perfeito porém foi o que saiu, boa sorte
export const Sidebar = () => {
  const { isActive, setIsActive, isHover, setIsHover } =
    React.useContext(SidebarContext);

  function openSidebar() {
    console.log(window.innerWidth);

    if (window.innerWidth <= Number.parseInt(theme.media.md)) {
      setIsHover(!isHover);
    } else {
      setIsActive(false);
      setIsHover(false);
    }
  }

  //Aqui os valores estão "invertidos", a sidebar está aparecendo quando o estado isActive for false

  return (
    <>
      <Burger
        variant="nav-burger"
        onClick={openSidebar}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
      <StyledSidebarContainer className={`${isActive && "closed"}`}>
        <StyledSidebar
          className={`${isHover && "open-hover"}  ${isActive && "transform"}`}
          onMouseEnter={isActive ? () => setIsHover(true) : () => {}}
          onMouseLeave={() => setIsHover(false)}
        >
          <Logo img={ImgLogo} alt="Imagem logo da empresa AFK" />
          <Navbar />
        </StyledSidebar>
        <ArrowContainer>
          <DoubleArrow onClick={() => setIsActive(true)} />
        </ArrowContainer>
      </StyledSidebarContainer>

      {/* Sidebar responsiva */}
      <StyledResponsiveSidebar
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`${isHover && "open-hover"} ${!isActive && "transform"}`}
      >
        <Logo img={ImgLogo} alt="Imagem logo da empresa AFK" />
        <Navbar />
      </StyledResponsiveSidebar>
    </>
  );
};
