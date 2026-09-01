import { ToggleThemeProvider } from "../lesson12/exercise1-UseToggle";
import { ToggleThemeWithContext } from "../lesson12/exercise1-UseToggleWihtContext";
import { ComponenteContador } from "../lesson12/exercise2-UseCounterwithContext";

export function Page12() {
    return(
        <>
        <h2>Lesson 12</h2>

          <h3>Exercise 1</h3>
        <ToggleThemeProvider>
            <ToggleThemeWithContext />
        </ToggleThemeProvider>
          <h3>Exercise 2</h3>
            <ComponenteContador/>
        </>
    )
}