import { useRef } from 'react';

export default function UseRefInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  return (
    <>
      <input ref={inputRef} style={{marginBottom: "10px"}} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}
