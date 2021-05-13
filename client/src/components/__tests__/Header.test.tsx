import { render } from '@testing-library/react';
import Header from '../Header';

test('render Header component', async () => {
  await render(<Header />);
});