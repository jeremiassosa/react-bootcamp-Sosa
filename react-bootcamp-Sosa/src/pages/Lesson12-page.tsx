import { ToggleThemeProvider } from "../lesson12/exercise1-UseToggle";
import { ToggleThemeWithContext } from "../lesson12/exercise1-UseToggleWihtContext";

export function Page12() {
    return(
        <>
        <h2>Lesson 12</h2>

          <h3>Exercise 1</h3>
        <ToggleThemeProvider>
            <ToggleThemeWithContext />
        </ToggleThemeProvider>
        </>

    )
}