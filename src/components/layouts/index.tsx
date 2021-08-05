import styled from "@emotion/styled"
import { space, layout, color, typography, flexbox } from "styled-system"

export const BaseScreen = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.background,
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "default",
}))

const Box = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  space,
  layout,
  color,
  typography,
  flexbox
)

export default Box

const Card = styled(Box)({
  borderRadius: "4",
  border: "1px solid #f6f6f6",
  boxShadow: "0 2px 4px rgba(0, 0, 0, .125)",
})

const SpaceChildren = styled.div`
  & > * {
    ${space}
  }
`

export { Card, SpaceChildren }
