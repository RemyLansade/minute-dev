import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '../containers/App';

describe('App', () => {
  it('render App component', () => {
    render(<Router><App /></Router>);
  });
});
