import "@emotion/react"

declare module "@emotion/react" {
  export interface Theme {
    breakpoints: string[]
    colors: {
      primary: string
      secondary: string
      background: string
      blue: string
      brown: string
      cyan: string
      green: string
      indigo: string
      mint: string
      orange: string
      pink: string
      purple: string
      red: string
      teal: string
      yellow: string
      gray: string
      gray2: string
      gray3: string
      gray4: string
      gray5: string
      gray6: string
    }
    fonts: {
      sizes: {
        title: string
        titleMobile: string
        body: string
        bodySmall: string
      }
    }
    boxShadow: string
  }
}
