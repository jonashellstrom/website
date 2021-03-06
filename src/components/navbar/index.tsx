import React from "react"
import { useTheme } from "@emotion/react"
import { Box } from "rebass"

import { Appearance } from "../../theme"
import ToggleSwitch from "../toggle-switch"
import { NavBarLink } from "./NavBarLink"
import { GitHubLink } from "./GitHubLink"

const NAVBAR_ITEMS: Array<{ linkTo: string; title: string }> = [
  {
    linkTo: "/",
    title: "Home",
  },
  {
    linkTo: "/projects",
    title: "Projects",
  },
]

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
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            fontWeight: "bold",
          }}
        >
          <Box
            sx={{
              display: ["none", "flex"],
            }}
          >
            <p style={{ fontWeight: "lighter" }}>
              JONAS HELLSTROM - FULL STACK DEVELOPER
            </p>
          </Box>
          <Box
            sx={{
              display: ["flex", "none"],
            }}
          >
            <Box
              sx={{
                fontWeight: "lighter",
                fontSize: theme.fonts.sizes.bodySmall,
                whiteSpace: "pre-wrap",
                paddingY: "10px",
              }}
            >
              {`JONAS HELLSTROM\nFULL STACK DEVELOPER`}
            </Box>
          </Box>
          <GitHubLink appearance={appearance} />
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              width: ["200px"],
            }}
          >
            {NAVBAR_ITEMS.map((item) => (
              <NavBarLink linkTo={item.linkTo}>
                {item.title.toUpperCase()}
              </NavBarLink>
            ))}
          </Box>
          <ToggleSwitch
            name="appearance"
            isOn={appearance === "dark"}
            handleToggle={() => setAppearance(nextAppearance)}
            colors={[theme.colors.indigo, theme.colors.orange]}
            labels={["???", "???"]}
          />
        </Box>
      </Box>
    </nav>
  )
}
