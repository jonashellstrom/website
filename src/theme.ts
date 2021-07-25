import { Theme } from "@emotion/react"

export type Appearance = "light" | "dark"

/**
 * Named colors are based on Apple's Human Interface Guidelines
 * https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/color/
 */
export const themes: { [k in Appearance]: Theme } = {
  light: {
    breakpoints: ["40em", "52em", "64em", "80em"],
    colors: {
      primary: "black",
      secondary: "#00c7bd",
      background: "white",
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
    },
  },
  dark: {
    breakpoints: ["40em", "52em", "64em", "80em"],
    colors: {
      primary: "white",
      secondary: "#66d4cf",
      background: "#000000",
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
    },
  },
}
