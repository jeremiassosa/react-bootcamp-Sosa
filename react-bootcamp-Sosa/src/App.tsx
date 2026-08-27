import './App.css'
import Counter from './lesson3/exercise1-counter';
import ILike from './lesson3/exercise2-like';
import TrafficLight from './lesson4/exercise1-TrafficLight'
import AlertStock from './lesson4/exercise2-AlertStock';

function App() {
  return (
    <>      
    <h2>Lesson 3</h2>
      
    <hr />
      
    <h3>Exercise 1</h3>
      <Counter />
    <h3>Exercise 2</h3>
      <ILike />
      
    <h2>Lesson 4</h2>
    
    <hr />
      
      <h3>Exercise 1</h3>
        <TrafficLight /> 
      <h3>Exercise 2</h3>
        <AlertStock />
    </>
    )
}

export default App
