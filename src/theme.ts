import { Theme } from "@emotion/react"

export type Appearance = "light" | "dark"

const breakpoints: Theme["breakpoints"] = ["40em", "52em", "64em", "80em"]

const fonts: Theme["fonts"] = {
  sizes: {
    title: "30px",
    body: "14px",
    bodySmall: "11px",
  },
}

/**
 * Colors are unique to light and dark appearances and
 * are based on Apple's Human Interface Guidelines
 * https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/
 */
export const themes: { [k in Appearance]: Theme } = {
  light: {
    breakpoints,
    colors: {
      primary: "#000",
      secondary: "#00c7bd",
      background: "#fff",
      blue: "#007bff",
      brown: "#a2855e",
      cyan: "#32ade6",
      green: "#34c759",
      indigo: "#5856d6",
      mint: "#00c7be",
      orange: "#ff9500",
      pink: "#ff2d54",
      purple: "#af52de",
      red: "#ff3a30",
      teal: "#30b0c7",
      yellow: "#ffcc00",
      gray: "#8e8e93",
      gray2: "#aeaeb2",
      gray3: "#c7c7cc",
      gray4: "#d1d1d6",
      gray5: "#e5e5ea",
      gray6: "#f2f2f7",
    },
    fonts,
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.15)",
  },
  dark: {
    breakpoints,
    colors: {
      primary: "#fff",
      secondary: "#66d4cf",
      background: "#000328",
      blue: "#0a84ff",
      brown: "#ac8f68",
      cyan: "#64d3ff",
      green: "#30d158",
      indigo: "#5e5ce6",
      mint: "#66d4cf",
      orange: "#ff9d0a",
      pink: "#ff375f",
      purple: "#bf5af2",
      red: "#ff443a",
      teal: "#40c8e0",
      yellow: "#ffd60a",
      gray: "#8e8e93",
      gray2: "#636366",
      gray3: "#48484a",
      gray4: "#3a3a3c",
      gray5: "#2c2c2e",
      gray6: "#1c1c1e",
    },
    fonts,
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.15)",
  },
}
