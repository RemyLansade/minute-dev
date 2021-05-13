import { render } from '@testing-library/react';
import App from '../App';


test('render App component', async () => {
  await render(<App />);
});
