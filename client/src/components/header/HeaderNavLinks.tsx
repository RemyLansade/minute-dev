import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 660px;
  margin: 16px auto;
`;

const activeClassName = "active-link";

const StyledLink = styled(NavLink).attrs({ activeClassName })`
  display: block;
  position: relative;
  transition: 0.3s;
  opacity: 70%;
  &::before {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 4px;
    background-color: #5477ad;
    border-radius: 4px 4px 0 0;
    opacity: 0%;
    transition: 0.3s;
  }
  &:hover {
    &::before {
      opacity: 100%;
    }
  }
  &.${activeClassName} {
    opacity: 100%;
    &::before {
      opacity: 100%;
    }
  }
`;

const HeaderNavLinks = () => {
  interface Link {
    name: String;
    path: String;
  }

  const links: Array<Link> = [
    { name: "Articles", path: "/articles" },
    { name: "Forum", path: "/forum" },
    { name: "A propos", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Container className="nav-links" data-testid="nav-links">
      {links.map((link: Link, key: number) => {
        return (
          <StyledLink key={key} to={{pathname: `${link.path}`}} exact>
            {link.name}
          </StyledLink>
        );
      })}
    </Container>
  );
};

export default HeaderNavLinks;
