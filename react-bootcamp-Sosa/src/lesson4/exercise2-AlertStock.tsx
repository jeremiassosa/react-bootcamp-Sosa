import { useState } from 'react'


function AlertStock() {
  const [counterStock, setCounterStock] = useState(0)
  const alertStock = counterStock <= 0 ? 'Sin stock' :
                     counterStock <= 5 ? '¡Últimas unidades!' : 'Disponible' ;

  return (
    <>
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCounterStock((counterStock) => counterStock + 1)}
        >
          +
        </button>
        <span>The Stock is {counterStock}</span>
        <button
          type="button"
          className="counter"
          onClick={() => setCounterStock((counterStock) => counterStock - 1)}
        >
          -
        </button>
        <p>{alertStock}</p>
      </section>
    </>
  )
}

export default AlertStock
