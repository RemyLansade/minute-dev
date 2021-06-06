import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouterAndTheme } from '../helpers/testHelpers'
import DropdownConnection from '../components/uiTools/DropdownConnection';

describe('<DropdownConnection />', () => {
  it('Render correctly', () => {
    const { getByTestId } = renderWithRouterAndTheme(<DropdownConnection/>);
    expect(getByTestId('dropdown')).toBeTruthy();
    expect(getByTestId('content')).toBeTruthy();
  });

  it('Display change on hover', () => {
    const { getByText } = renderWithRouterAndTheme(<DropdownConnection/>);
    const connectionHover = getByText('Connection');
    fireEvent.mouseEnter(connectionHover);
    expect(screen.getByText('Inscription')).toBeInTheDocument();
    expect(screen.getByText('Se connecter')).toBeInTheDocument();
  });
});