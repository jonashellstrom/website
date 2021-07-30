import React from "react"
import { Box } from "rebass"
import { useTheme } from "@emotion/react"
import { Link, useLocation } from "react-router-dom"

export const NavBarLink: React.FC<{ linkTo: string }> = ({
  linkTo,
  children,
}) => {
  const { colors } = useTheme()
  const { pathname } = useLocation()
  return (
    <Link to={linkTo} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          color: colors.primary,
          fontWeight: "bold",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {children}
        <Box
          sx={{
            marginTop: "5px",
            backgroundColor: pathname === linkTo ? colors.gray : "transparent",
            height: "5px",
            width: "35px",
          }}
        />
      </Box>
    </Link>
  )
}
