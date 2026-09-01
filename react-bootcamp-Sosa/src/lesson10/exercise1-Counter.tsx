import { useContador } from "./exercise1-CounterContext"


export function CounterWithContext() {

    const {contador, incrementar, decrementar} = useContador();
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
        <span>Count is {contador}</span>
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