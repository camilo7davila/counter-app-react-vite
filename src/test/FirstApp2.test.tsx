import { render, screen } from '@testing-library/react';
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FistApp />', () => {
  const title = 'Hola soy camilo'
  const subTitle = 1234

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<FirstApp subtitle={subTitle} title={title} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar el mensaje "Hola soy camilo"', () => {
    render(<FirstApp subtitle={subTitle} title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
    // screen.debug() muestra el body de la screen actualizado
  });

  test('debe de mostrar el titulo de un h1', () => { 
    render(<FirstApp subtitle={subTitle} title={title} />);
    expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title)
  });

  test('debe de mostrar el subtitle Enviado por props', () => { 
    render(<FirstApp subtitle={subTitle} title={title} />);
    expect(screen.getByText(subTitle).innerHTML).toContain(`${subTitle}`)
  });
})