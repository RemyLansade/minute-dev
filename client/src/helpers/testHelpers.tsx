import { Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory, MemoryHistory } from 'history';

import { ThemeProvider } from 'styled-components';
import light from "../styles/themes/light";

interface RenderWithRouterProps {
  route?: string;
  history?: MemoryHistory;
}

export const renderWithRouterAndTheme = (
  ui: React.ReactNode,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) }: RenderWithRouterProps = {},
) => {
  return {
    ...render(
      <Router history={history}>
        <ThemeProvider theme={light}>
          {ui}
        </ThemeProvider>
      </Router>),
    history,
  };
};
