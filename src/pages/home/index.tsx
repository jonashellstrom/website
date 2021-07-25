import React from "react"
import { BaseScreen } from "../../components/layouts"
import { PrimaryText } from "../../components/text"

const Home: React.FC = () => {
  return (
    <BaseScreen>
      <PrimaryText>Hello World!</PrimaryText>
    </BaseScreen>
  )
}

export { Home }
