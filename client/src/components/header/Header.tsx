import HeaderNavLinks from './HeaderNavLinks';
import DropdownConnection from '../uiTools/DropdownConnection';
import './Header.css';

const Header = () => {
  return(
    <header>
      <h1>La minute dev</h1>
      <div className="header__nav-bar">
        <HeaderNavLinks />
      </div>
      <DropdownConnection />
    </header>
  );
}

export default Header
