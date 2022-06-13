import { render } from '@testing-library/react';
import { FirstApp } from '../FirstApp';

describe('Pruebas en <FistApp />', () => {
  // test('Debe de hacer match con el snapshot', () => {
  //   const title = 'Hola soy camilo'
  //   const { container } = render(<FirstApp subtitle={1234} title={title} />);
  //   expect(container).toMatchSnapshot();
  // });

  test('Debe de mostrar el titulo en un h1', () => {
    const title = 'Hola soy camilo'
    const { container, getByText, getByTestId } = render(<FirstApp subtitle={1234} title={title} />);
    expect(getByText(title)).toBeTruthy();

    // Se puede usar pero no es lo recomendable
    // const h1 = container.querySelector('h1');
    // expect(h1?.innerHTML).toContain(title);
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('Debe de mostrar el subtitulo enviado por pros', () => { 
    const title = 'Hola soy camilo';
    const subtitle = 123
    const { getByText } = render(<FirstApp subtitle={subtitle} title={title} />);
    expect(getByText(subtitle)).toBeTruthy();
  })


})