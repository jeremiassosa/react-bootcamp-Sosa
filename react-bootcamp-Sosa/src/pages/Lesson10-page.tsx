import { CounterWithContext } from "../lesson10/exercise1-Counter";
import { ContadorProvider } from "../lesson10/exercise1-CounterContext";
import { ThemeWithContext } from "../lesson10/exercise2-ChangeTheme";
import { ThemeProvider } from "../lesson10/exercise2-ChangeThemeContext";

export function Page10() {
  return (
    <>
      <h2>Lesson 10</h2>
        <hr />
      <h3>Exercise 1</h3>
        <ContadorProvider>
            <CounterWithContext />
        </ContadorProvider>
      <h3>Exercise 2</h3>
        <ThemeProvider>
            <ThemeWithContext />
        </ThemeProvider>
    </>
  );
}
