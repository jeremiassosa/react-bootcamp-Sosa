import { useState } from 'react'

function TrafficLight() {
  const [trafficLight, setTrafficLight] = useState(0)
  const trafficLightOrder = ['red', 'yellow', 'green'];

  const changingLights = () => {
      if(trafficLight >= 2){
      setTrafficLight(0)  
      }else{
        setTrafficLight((trafficLight) => trafficLight + 1)
      }
    }
    const currentColor = trafficLightOrder[trafficLight];


  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '100%',
        background: 'red',
        border: '1px solid white',
        opacity: currentColor === 'red' ? '1' : '0.1',
        transition: 'opacity 1s ease' 
      }} id='trafficLightRed'></div>

      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '100%',
        background: 'yellow',
        border: '1px solid white',
        opacity: currentColor === 'yellow' ? '1' : '0.1',
        transition: 'opacity 1s ease'
      }} id='trafficLighYellow'></div>

      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '100%',
        background: 'green',
        border: '1px solid white',
        opacity: currentColor === 'green' ? '1' : '0.1', 
        transition: 'opacity 1s ease'
      }} id='trafficLightGreen'></div>
      <button
        type="button"
        className="counter"
        onClick={() => changingLights() }
      >
        Siguiente Color {trafficLightOrder[trafficLight]}
      </button>
    </div>
  )
}

export default TrafficLight
