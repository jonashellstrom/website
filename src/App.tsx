import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ThemeProvider } from "@emotion/react"

import { NavBar } from "./components/navbar"
import { Appearance, themes } from "./theme"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Projects } from "./pages/projects"

const App: React.FC = () => {
  const [appearance, setAppearance] = useState<Appearance>("light")

  return (
    <ThemeProvider theme={themes[appearance]}>
      <Router>
        <NavBar appearance={appearance} setAppearance={setAppearance} />
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App
