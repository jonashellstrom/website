import { useTheme } from "@emotion/react"
import React from "react"
import "./styles.css"

type ToggleSwitchProps = {
  name: string
  isOn: boolean
  handleToggle: () => void
  colors?: [string, string]
  labels?: [string, string]
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  name,
  isOn,
  handleToggle,
  colors,
  labels,
}) => {
  const theme = useTheme()

  const getToggleColor = () => {
    if (colors) {
      return isOn ? colors[0] : colors[1]
    } else {
      return isOn ? theme.colors.green : theme.colors.gray3
    }
  }
  return (
    <>
      <input
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
        className="switch-checkbox"
        id={name}
      />

      <label
        style={{ background: getToggleColor() }}
        className="switch-label"
        htmlFor={name}
      >
        <span className={"switch-button"} />
        {labels && (
          <>
            <p style={{ paddingLeft: "5px", fontSize: "25px" }}>{labels[0]}</p>
            <p style={{ paddingRight: "5px", fontSize: "25px" }}>{labels[1]}</p>
          </>
        )}
      </label>
    </>
  )
}

export default ToggleSwitch
