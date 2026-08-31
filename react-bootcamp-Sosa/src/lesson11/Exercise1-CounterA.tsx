import { useContadorStore } from './Exercise1-ContadorA'

function CounterZustand() {

  const count = useContadorStore((state) => state.count)
  const incrementar = useContadorStore((state) => state.incrementar)
  const decrementar = useContadorStore((state) => state.decrementar)

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={incrementar}
        >
          +
        </button>
        <span>Count is {count}</span>
        <button
          type="button"
          className="counter"
          onClick={decrementar}
        >
          -
        </button>
      </section>
    </>
  )
}
export default CounterZustand