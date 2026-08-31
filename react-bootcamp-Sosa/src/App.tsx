import './App.css'
import { CounterWithContext } from './lesson10/exercise1-Counter';
import { ContadorProvider } from './lesson10/exercise1-CounterContext';
import { ThemeWithContext } from './lesson10/exercise2-ChangeTheme';
import { ThemeProvider } from './lesson10/exercise2-ChangeThemeContext';
import CounterZustand from './lesson11/Exercise1-CounterA';
import Counter from './lesson3/exercise1-counter';
import ILike from './lesson3/exercise2-like';
import TrafficLight from './lesson4/exercise1-TrafficLight'
import AlertStock from './lesson4/exercise2-AlertStock';
import RenderList from './lesson5/exercise1-RenderList';
import ListForm from './lesson5/exercise2-ListForm';
import DinamicList from './lesson5/exercise3-DinamixList';
import LiveGreeting from './lesson6/exercise1-SaludoEnVivo';
import LimitCaracters from './lesson6/exercise2-CampoConLimite';
import CounterUseEffect from './lesson8/exercise1-ContadorClicks';
import Countdown from './lesson8/exercise3-CuentaRegresiva';
import CountdownWithMemory from './lesson9/exercise1-CountdownWithMemory';


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

    <h2>Lesson 5</h2>
    <hr />

      <h3>Exercise 1</h3>
        <RenderList/>
      <h3>Exercise 2</h3>
        <ListForm/>
      <h3>Exercise 3</h3>
        <DinamicList/>

    <h2>Lesson 6</h2>
    <hr />

      <h3>Exercise 1</h3>
        <LiveGreeting/>
      <h3>Exercise 2</h3>
        <LimitCaracters/>
    
    <h2>Lesson 8</h2>
    <hr />

      <h3>Exercise 1</h3>
       <CounterUseEffect/>
      <h3>Exercise 2</h3>
       <Countdown initialSeconds={5}/>
    
    <h2>Lesson 9</h2>
    <hr />

      <h3>Exercise 1</h3>
        <CountdownWithMemory initialSeconds={30}/>
    <h2>Lesson 10</h2>
    <hr />

      <h3>Exercise 1</h3>
        <ContadorProvider>
            <CounterWithContext/>
        </ContadorProvider>
      <h3>Exercise 2</h3>
        <ThemeProvider>
          <ThemeWithContext/>
        </ThemeProvider>
    <h2>Lesson 11</h2>
    <hr />

      <h3>Exercise 1</h3>
            <CounterZustand/>
    </>
    )
}

export default App
