import CounterUseEffect from "../lesson8/exercise1-ContadorClicks";
import Countdown from "../lesson8/exercise3-CuentaRegresiva";

export function Page8() {
  return (
    <>
      <h2>Lesson 8</h2>
        <hr />
      <h3>Exercise 1</h3>
        <CounterUseEffect />
      <h3>Exercise 2</h3>
        <Countdown initialSeconds={5} />
    </>
  );
}
