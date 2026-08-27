import React, { useState } from 'react';

export default function LiveGreeting() {
  const [name, setName] = useState<string>('');

  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div>
    <form>
      <input
        type="text"
        placeholder="Write your nombre"
        value={name}
        onChange={nameChange}
        style={{ padding: '8px', fontSize: '16px' }}
        />
        <p>¡Hola, {name.trim() === '' ? 'desconocido' : name}!</p>
        </form>
    </div>
  );
}
