import { useRef} from 'react';

export default function CounterUseRef() {
  const counterRef = useRef(0);

  function handleClick() {
    counterRef.current = counterRef.current + 1;
    alert(`Count click ${counterRef.current}`)
  }

  return (
    <>
    <button onClick={handleClick}>
        Click
    </button>
    </>
  );
}
