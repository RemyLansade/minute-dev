import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderNavLinks from '../components/HeaderNavLinks';

describe('HeaderNavLinks', () => {
  it('render HeaderNavLinks components', () => {
    const links = render(<Router><HeaderNavLinks /></Router>);    
    expect(links).toBeTruthy();
  });

  it('contains unordered list', () => {
    const { getByTestId } = render(<Router><HeaderNavLinks /></Router>);
    expect(getByTestId('nav-links')).toBeInTheDocument();
  });

  it('contains specific "A propos" links', () => {
    const { getByText } = render(<Router><HeaderNavLinks /></Router>);
    expect(getByText('A propos')).toBeInTheDocument();
  });
});