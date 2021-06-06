import { renderWithRouterAndTheme } from '../helpers/testHelpers';
import HeaderNavLinks from '../components/header/HeaderNavLinks';

describe('<HeaderNavLinks />', () => {
  it('render HeaderNavLinks components', () => {
    const links = renderWithRouterAndTheme(<HeaderNavLinks />);
    expect(links).toBeTruthy();
  });

  it('contain links container', () => {
    const { getByTestId } = renderWithRouterAndTheme(<HeaderNavLinks />);
    expect(getByTestId('nav-links')).toBeInTheDocument();
  });

  it('contain all links', () => {
    const { getByText } = renderWithRouterAndTheme(<HeaderNavLinks />);
    expect(getByText('Articles')).toBeInTheDocument();
    expect(getByText('Forum')).toBeInTheDocument();
    expect(getByText('A propos')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
  });
});