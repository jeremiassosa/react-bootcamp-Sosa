import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import { Page3 } from "./pages/Lesson3-page"
import { Page4 } from "./pages/Lesson4-page"
import { Page5 } from "./pages/Lesson5-page"
import { Page6 } from "./pages/Lesson6-page"
import { Page8 } from "./pages/Lesson8-page"
import { Page9 } from "./pages/Lesson9-page"
import { Page10 } from "./pages/Lesson10-page"
import { Page11 } from "./pages/Lesson11-page"
import { Page12 } from "./pages/Lesson12-page"
import { Page13 } from "./pages/Lesson13-page"

function App() {
  return (
    <>          
      <BrowserRouter>
      <nav>
        <Link to="/pages/Lesson3-page.tsx" className="Link">Clase 3</Link>
        <Link to="/pages/Lesson4-page.tsx" className="Link">Clase 4</Link>
        <Link to="/pages/Lesson5-page.tsx" className="Link">Clase 5</Link>
        <Link to="/pages/Lesson6-page.tsx" className="Link">Clase 6</Link>
        <Link to="/pages/Lesson8-page.tsx" className="Link">Clase 8</Link>
        <Link to="/pages/Lesson9-page.tsx" className="Link">Clase 9</Link>
        <Link to="/pages/Lesson10-page.tsx" className="Link">Clase 10</Link>
        <Link to="/pages/Lesson11-page.tsx" className="Link">Clase 11</Link>
        <Link to="/pages/Lesson12-page.tsx" className="Link">Clase 12</Link>
        <Link to="/pages/Lesson13-page.tsx" className="Link">Clase 13</Link>
      </nav>

    <Routes>
      <Route path='/pages/Lesson3-page.tsx' element={ <Page3 />}/>
      <Route path='/pages/Lesson4-page.tsx' element={ <Page4 />}/>
      <Route path='/pages/Lesson5-page.tsx' element={ <Page5 />}/>
      <Route path='/pages/Lesson6-page.tsx' element={ <Page6 />}/>
      <Route path='/pages/Lesson8-page.tsx' element={ <Page8 />}/>
      <Route path='/pages/Lesson9-page.tsx' element={ <Page9 />}/>
      <Route path='/pages/Lesson10-page.tsx' element={ <Page10 />}/>
      <Route path='/pages/Lesson11-page.tsx' element={ <Page11 />}/>
      <Route path='/pages/Lesson12-page.tsx' element={ <Page12 />} />
      <Route path='/pages/Lesson13-page.tsx' element={ <Page13 />} />
    </Routes>

    </BrowserRouter>
    </>
    )
}

export default App
