import { NavLinkStyled, NavWrapper } from './MainNavigation.styled';

export const MainNavigation = () => {
    return (
      <NavWrapper>
        <NavLinkStyled to={"/"}>Home</NavLinkStyled>
        <NavLinkStyled to={"/tweets"}>Tweets</NavLinkStyled>
      </NavWrapper>
    );
}