import { useState } from 'react';
import { useFormStore } from './Exercise3-LoginZustand.tsx';

export default function LoginWithZustand() {
  const [inputValueName, setInputValueName] = useState('');
  const [inputValuePassword, setInputValuePassword] = useState('');

  const nameStore = useFormStore((state) => state.name);
  const passwordStore = useFormStore((state) => state.password);
  const isLoginState = useFormStore((state) => state.isLoginValue);
  const changeText = useFormStore((state) => state.changeText);
  const logout = useFormStore((state) => state.logout);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    changeText(inputValueName, inputValuePassword);
  };

  return (
    <div>
        {isLoginState ? (
          <>
            <p>¡Hola, {nameStore}, tu contraseña es {passwordStore} !</p>
            <button type="button" onClick={logout}>
              Logout
            </button>
          </>      
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Write your nombre"
              value={inputValueName}
              onChange={(e) => setInputValueName(e.target.value)}
              style={{ padding: '8px' }}
            />
            <input
              type="password"
              placeholder="Write your Password"
              value={inputValuePassword}
              onChange={(e) => setInputValuePassword(e.target.value)}
              style={{ padding: '8px' }}
            />
            <button type="submit">Send</button>
      </form>
        )}
    </div>
  );
}
