import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en el hookuseFetchGifs.js', () => { 
  
  test('Debe de regresar el estado inicial', () => { 
    
    const {result} = renderHook(() => useFetchGifs('One Punch'));
    const {images, isLoading} = result.current;
    
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('Debe de retornar u narreglo de imagenes e isLoading false', async() => { 
    
    const {result} = renderHook(() => useFetchGifs('One Punch'));
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 3000,
      }
    );

    const {images, isLoading} = result.current;

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});