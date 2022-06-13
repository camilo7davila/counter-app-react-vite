import { render, screen, fireEvent } from '@testing-library/react'
import { CounterApp } from '../CounterApp'

describe('Pruebas en <CounterApp />', () => { 
  const valueProps = 100;

  test('debe de hacer match con el snapshot', () => { 
    const { container } = render(<CounterApp value={valueProps} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el valor inicial de 100', () => { 
    render(<CounterApp value={valueProps} />);
    expect(screen.getByText(valueProps)).toBeTruthy();
    expect(screen.getByRole('heading', {level: 2}).innerHTML).toContain(`${valueProps}`);
  });

  test('debe de incrementar con el boton +1', () => {
    render(<CounterApp value={valueProps} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText(`${valueProps + 1}`)).toBeTruthy();
  });

  test('debe de decrementar con el boton -1', () => {
    render(<CounterApp value={valueProps} />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText(`${valueProps - 1}`)).toBeTruthy();
  });

  test('debe de funcionar el boton de reset', () => {
    render(<CounterApp value={valueProps} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' })); // otra forma de hacer referencia arial-label
    expect(screen.getByText(`${valueProps}`)).toBeTruthy();
  })
});