import { useTheme } from "@emotion/react"
import React from "react"
import { Link } from "react-router-dom"
import { Appearance } from "../../theme"
import Box from "../layouts"
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
  const nextAppearance: Appearance = appearance === "light" ? "dark" : "light"

  return (
    <nav
      style={{
        overflow: "hidden",
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: theme.colors.gray6,
        color: theme.colors.primary,
        zIndex: 100_000,
        paddingBottom: "10px",
      }}
    >
      <div
        style={{
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <Box fontWeight="bold">
          <p>JONAS HELLSTROM - FULLSTACK DEVELOPER</p>
          <p>GITHUB</p>
        </Box>
        <Box>
          <Box
            flexDirection={"row"}
            justifyContent="space-between"
            width={["400px"]}
          >
            <Link to="/">
              <Box style={{ color: theme.colors.primary, fontWeight: "bold" }}>
                HOME
              </Box>
            </Link>
            <Link to="/projects">
              <Box style={{ color: theme.colors.primary, fontWeight: "bold" }}>
                PROJECTS
              </Box>
            </Link>
            <Link to="/about">
              <Box style={{ color: theme.colors.primary, fontWeight: "bold" }}>
                ABOUT
              </Box>
            </Link>
          </Box>
          <ToggleSwitch
            name="appearance"
            isOn={appearance === "dark"}
            handleToggle={() => setAppearance(nextAppearance)}
            colors={[theme.colors.indigo, theme.colors.orange]}
            labels={["☾", "☀"]}
          />
        </Box>
      </div>
    </nav>
  )
}
