import { renderWithRouterAndTheme } from '../helpers/testHelpers';
import App from '../containers/App';

describe('<App />', () => {
  it('render App component', () => {
    const app = renderWithRouterAndTheme(<App />);
    expect(app).toBeTruthy();
  });
});
