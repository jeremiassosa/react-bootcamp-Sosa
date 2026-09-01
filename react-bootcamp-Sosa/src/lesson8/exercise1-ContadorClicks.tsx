import { useEffect, useState } from 'react'

function CounterUseEffect() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    document.title = `L8 - Click ${count}`
  },[count])

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
        <span>Count is {count}</span>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>
      </section>
    </>
  )
}
export default CounterUseEffect