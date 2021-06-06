import styled from "styled-components";

import HeaderSearch from "../uiTools/HeaderSearch";
import DropdownConnection from "../uiTools/DropdownConnection";
import HeaderNavLinks from "./HeaderNavLinks";

const NavBar = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  display: block;
  color: #fff;
  width: 100%;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 29px;
`;

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  text-align: center;
`;

const TopBar = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  display: block;
  width: 100%;
  height: 60px;
  margin: 0;
`;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
`

const Header = () => {
  return (
    <StyledHeader>
      <TopBar>
        <Wrapper>
          <HeaderSearch />
          <Title>La minute dev</Title>
          <DropdownConnection />
        </Wrapper>
      </TopBar>
      <NavBar>
        <HeaderNavLinks />
      </NavBar>
    </StyledHeader>
  );
};

export default Header;
