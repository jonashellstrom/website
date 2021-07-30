import React from "react"
import { Box } from "rebass"
import { useTheme } from "@emotion/react"

import { Appearance } from "../../theme"
import GitHubMark from "../../assets/GitHub-Mark-64px.png"
import GitHubMarkLight from "../../assets/GitHub-Mark-Light-64px.png"

const GITHUB_URL = "https://github.com/jonashellstrom"

export const GitHubLink: React.FC<{ appearance: Appearance }> = ({
  appearance,
}) => {
  const { colors, fonts } = useTheme()

  return (
    <a
      href={GITHUB_URL}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none" }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          height: "25px",
        }}
      >
        <img
          src={appearance === "dark" ? GitHubMarkLight : GitHubMark}
          alt="GitHub Mark"
          style={{ width: "20px", height: "20px", marginRight: "5px" }}
        />
        <p
          style={{
            color: colors.primary,
            fontWeight: "bold",
            fontSize: fonts.sizes.bodySmall,
          }}
        >
          GITHUB
        </p>
      </Box>
    </a>
  )
}
