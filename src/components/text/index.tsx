import styled from "@emotion/styled"

const PrimaryText = styled.div(({ theme }) => ({
  color: theme.colors.primary,
  backgroundColor: theme.colors.background,
}))

const SecondaryText = styled.div(({ theme }) => ({
  padding: 20,
  color: theme.colors.secondary,
  backgroundColor: theme.colors.background,
}))

export { PrimaryText, SecondaryText }
