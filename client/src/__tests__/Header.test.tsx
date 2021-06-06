import { renderWithRouterAndTheme } from '../helpers/testHelpers';
import Header from '../components/header/Header';

describe('<Header />' , () => {
  it('render Header component', () => {
    const header = renderWithRouterAndTheme(<Header />);
    expect(header).toBeTruthy();
  });
})
