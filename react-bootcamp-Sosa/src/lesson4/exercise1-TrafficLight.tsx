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
        background: "black",
        padding: '10px',
        borderRadius: '20px',
        marginBottom: '10px'
      }}>

      
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '100%',
        background: 'red',
        WebkitBoxShadow: '0px 0px 20px 10px rgba(216, 0, 0, 0.5)',
        opacity: currentColor === 'red' ? '1' : '0.1',
        transition: 'opacity 1s ease' 
      }} id='trafficLightRed'></div>

      <div style={{
        width: '40px', 
        height: '40px',
        borderRadius: '100%',
        background: 'yellow',
        WebkitBoxShadow: '0px 0px 20px 10px rgba(238, 255, 0, 0.5)',
        opacity: currentColor === 'yellow' ? '1' : '0.1',
        transition: 'opacity 1s ease',
        margin: '5px 0 5px 0'
      }} id='trafficLighYellow'></div>

      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '100%',
        background: 'green',
        WebkitBoxShadow: '0px 0px 20px 10px rgba(3, 194, 0, 0.5)',
        opacity: currentColor === 'green' ? '1' : '0.1', 
        transition: 'opacity 1s ease'
      }} id='trafficLightGreen'></div>
    </div>
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
