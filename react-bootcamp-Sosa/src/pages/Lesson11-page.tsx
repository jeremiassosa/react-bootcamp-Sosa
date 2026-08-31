import CounterWihtZustand from "../lesson11/Exercise1-CounterWihtZustand";
import FormWithZustand from "../lesson11/Exercise2-FormWithZustand";
import LoginWithZustand from "../lesson11/Exercise3-LoginWihtZustand";

export function Page11() {
  return (
    <>
      <h2>Lesson 11</h2>
      <hr />
      <h3>Exercise 1</h3>
        <CounterWihtZustand />
      <h3>Exercise 2</h3>
        <FormWithZustand/>
      <h3>Exercise 3</h3>
        <LoginWithZustand />
    </>
  );
}
