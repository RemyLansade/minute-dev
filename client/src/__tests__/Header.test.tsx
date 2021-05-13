import { render } from '@testing-library/react';
import Header from '../components/Header';

describe('Header' , () => {
  it('render Header component', async () => {
    await render(<Header />);
  });
})
