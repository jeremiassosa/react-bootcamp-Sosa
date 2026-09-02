import { ToggleThemeProvider } from "../lesson12/exercise1-UseToggle";
import { ToggleThemeWithContext } from "../lesson12/exercise1-UseToggleWithContext";
import { ComponenteContador } from "../lesson12/exercise2-UseCounterwithZustand";
import { ToggleLocalThemeProvider } from "../lesson12/exercise3-UseLocalStorage";
import { LocalThemeWithContext } from "../lesson12/exercise3-UseLocalStorageRender";

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
          <h3>Exercise 3</h3>
        <ToggleLocalThemeProvider>
            <LocalThemeWithContext/>
        </ToggleLocalThemeProvider>
        </>
    )
}