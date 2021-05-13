import { render } from '@testing-library/react';
import App from '../containers/App';


test('render App component', async () => {
  await render(<App />);
});

test('should generate a snapshot for app component', () => {
  const { asFragment } = render(<App />)
  
  expect(asFragment()).toMatchSnapshot()
});
