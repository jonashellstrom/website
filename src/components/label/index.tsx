import styled from "@emotion/styled"

export const Label = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: theme.colors.primary,
  color: theme.colors.gray6,
  height: "40px",
  paddingLeft: "10px",
  paddingRight: "10px",
  borderRadius: "7px",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: theme.fonts.sizes.bodySmall,
  cursor: "default",
}))
