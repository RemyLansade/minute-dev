import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderNavLinks from '../components/HeaderNavLinks';

describe('<HeaderNavLinks />', () => {
  it('render HeaderNavLinks components', () => {
    const links = render(<Router><HeaderNavLinks /></Router>);    
    expect(links).toBeTruthy();
  });

  it('contain links container', () => {
    const { getByTestId } = render(<Router><HeaderNavLinks /></Router>);
    expect(getByTestId('nav-links')).toBeInTheDocument();
  });

  it('contain all links', () => {
    const { getByText } = render(<Router><HeaderNavLinks /></Router>);
    expect(getByText('Articles')).toBeInTheDocument();
    expect(getByText('Forum')).toBeInTheDocument();
    expect(getByText('A propos')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
  });
});