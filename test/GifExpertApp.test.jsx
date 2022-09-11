import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en GifExpertApp', () => { 
  
  const inputValue = 'One punch';

  test('Debe de añadir categoria en el html', () => { 
    
    render(<GifExpertApp/>);
    const form = screen.getByRole('form');
    const input = screen.getByRole('textbox');
    
    fireEvent.input(input, {target:{value: inputValue}})
    fireEvent.submit(form);
    
    screen.debug();
    expect(screen.getByRole('heading',{level: 3}).innerHTML).toBe(inputValue);
  });
});