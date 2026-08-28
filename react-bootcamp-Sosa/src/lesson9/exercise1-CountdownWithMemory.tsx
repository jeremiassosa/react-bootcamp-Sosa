import { useEffect, useState } from 'react'

interface Prop {
    initialSeconds: number
}

function CountdownWithMemory({ initialSeconds } : Prop) {
  const [secondsCount, setSecondsCount] = useState(initialSeconds)
  const setLocalStorage = localStorage.getItem('localSeconds')

  useEffect(() => {
    if (initialSeconds != 0){
      setSecondsCount((initialSeconds) => initialSeconds = Number(setLocalStorage))
    }
  }, [])

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
    
  useEffect(() => {
    localStorage.setItem("localSeconds", JSON.stringify(secondsCount))
  }, [secondsCount])

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
export default CountdownWithMemory