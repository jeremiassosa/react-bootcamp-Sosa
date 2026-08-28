import { useEffect, useState } from 'react'

interface Prop {
    initialSeconds: number
}

function Countdown({ initialSeconds } : Prop) {
  const [secondsCount, setSecondsCount] = useState(initialSeconds)
  
  useEffect(() => {
    const time = setInterval(() => {
    setSecondsCount((actual: number) => {
        if (actual <= 1) {
          clearInterval(time)
          return 0
        }
        return actual - 1
    })
}, 1000)

        return () => clearInterval(time)
    }, [])

  return (
    <>
      <section id="center">
        <span>Count is {secondsCount}</span>
        <button
          type="button"
          className="counter"
          onClick={() => setSecondsCount((initialSeconds) => initialSeconds = 30)}
        >
          reset
        </button>
      </section>
    </>
  )
}
export default Countdown