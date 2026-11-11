import {
  StyledArrowImg,
  StyledIconeNav,
  StyledNavItem,
  StyledSpanNav,
} from "./style";

export const NavItem = ({ img, span, ativo, onClick, arrowImg }) => {
  return (
    <StyledNavItem $ativo={ativo} onClick={onClick}>
      <StyledIconeNav src={img} alt={`${span} icon`} />
      <StyledSpanNav>{span}</StyledSpanNav>
      {arrowImg && <StyledArrowImg src={arrowImg} alt="Seta" />}
    </StyledNavItem>
  );
};
