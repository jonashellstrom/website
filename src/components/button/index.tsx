import styled from "@emotion/styled"

export const Button = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  border: "1px solid white",
  backgroundColor: "#000",
  color: "#fff",
  height: "40px",
  paddingLeft: "10px",
  paddingRight: "10px",
  borderRadius: "7px",
  alignItems: "center",
  fontWeight: "bold",
  fontSize: theme.fonts.sizes.bodySmall,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#767672",
  },
  "&:active": {
    backgroundColor: "#4b4b49",
  },
}))
