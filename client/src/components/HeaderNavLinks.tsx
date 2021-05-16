import { NavLink } from 'react-router-dom'
import './HeaderNavLinks.css'

const HeaderNavLinks = () => {
  
  interface Link {name: String, path: String}

  const links : Array<Link> = [
    {name: "Articles", path: "/articles"},
    {name: "Forum",    path: "/forum"},
    {name: "A propos", path: "/about"},
    {name: "Contact", path: "/contact"},
  ]

  return(
    <nav className="nav-links" data-testid="nav-links">
      {links.map((link: Link, key: number) => {
        return(
          <NavLink
            key={key}
            className="nav-link" 
            activeClassName="active-link"
            to={{pathname: `${link.path}`}}
            exact
          >{link.name}</NavLink>
        );
      })}
    </nav>
  );
}

export default HeaderNavLinks
