import { useTheme } from "@emotion/react"
import React from "react"
import { Link } from "react-router-dom"
import { Appearance } from "../../theme"
import ToggleSwitch from "../toggle-switch"

type NavBarProps = {
  appearance: Appearance
  setAppearance: (appearance: Appearance) => void
}

export const NavBar: React.FC<NavBarProps> = ({
  appearance,
  setAppearance,
}) => {
  const theme = useTheme()
  const nextAppearance = appearance === "light" ? "dark" : "light"

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <ToggleSwitch
        isOn={appearance === "dark"}
        handleToggle={() => setAppearance(nextAppearance)}
        colors={[theme.colors.indigo, theme.colors.orange]}
        labels={["☾", "☀"]}
      />
      <ToggleSwitch
        isOn={appearance === "dark"}
        handleToggle={() => setAppearance(nextAppearance)}
      />
    </nav>
  )
}
