import { useState } from 'react';
import { useFormStore } from './Exercise2-FormZustand'; 

export default function FormWithZustand() {

  const [inputValue, setInputValue] = useState('');
  const textStore = useFormStore((state) => state.text);
  const changeText = useFormStore((state) => state.changeText);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    changeText(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your nombre"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} 
          style={{ padding: '8px' }}
        />
        <button type="submit">Send</button>
        
        <p>¡Hola, {textStore}!</p> 
      </form>
    </div>
  );
}
