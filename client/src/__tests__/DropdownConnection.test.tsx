import { render, screen, fireEvent } from '@testing-library/react';
import DropdownConnection from '../components/uiTools/DropdownConnection';

describe('<DropdownConnection />', () => {
  it('Render correctly', () => {
    const { getByTestId } = render(<DropdownConnection/>);
    expect(getByTestId('dropdown')).toBeTruthy();
    expect(getByTestId('content')).toBeTruthy();
  });

  it('Display change on hover', () => {
    const { getByText } = render(<DropdownConnection/>);
    const connectionHover = getByText('Connection');
    fireEvent.mouseEnter(connectionHover);
    expect(screen.getByText('Inscription')).toBeInTheDocument();
    expect(screen.getByText('Se connecter')).toBeInTheDocument();
  });
});