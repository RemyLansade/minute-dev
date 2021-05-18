import { render } from '@testing-library/react';
import Header from '../components/header/Header';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Header />' , () => {
  it('render Header component', async () => {
    await render(<Router><Header /></Router>);
  });
})
