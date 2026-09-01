import React, { useEffect } from 'react';
import { useContadorStore as useCounterStore } from './exercise2-UseCounter';

export const ComponenteContador: React.FC = () => {
  const { counter, increment, decrement, reset, startCounter } = useCounterStore();

  useEffect(() => {
    startCounter(40); 
  }, [startCounter]);

  return (
    <>
      <button onClick={increment}
              style={{
                margin: '10px'
              }}>+</button>

      <p>Count: {counter}</p>
      
      <button onClick={decrement}
              style={{
                margin: '10px'
              }}>-</button>

      <button onClick={reset}>Reiniciar al original (40)</button>
    </>
  );
};
