import React, { useRef, useState } from "react"
import { Parallax, IParallax, ParallaxLayer } from "@react-spring/parallax"
import { useTheme } from "@emotion/react"
import Box from "../../components/layouts"
import MotionSwitch from "../../components/toggle-switch"
import { ProjectScreen } from "./Project"
import { projects } from "./data"

const Projects: React.FC = () => {
  const parallaxRef = useRef<IParallax>(null!)
  const [reducedMotion, setReducedMotion] = useState(false)

  const theme = useTheme()

  return (
    <>
      <Parallax
        ref={parallaxRef}
        pages={projects.length}
        horizontal
        style={{
          backgroundImage: `linear-gradient(${theme.colors.gray6}, ${theme.colors.background})`,
        }}
      >
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={projects.length}
          style={{
            // backgroundImage: "url(TBD)",
            backgroundSize: "cover",
            opacity: 0.03,
            backgroundColor: theme.colors.gray3,
          }}
        />
        {projects.map((project, index) => (
          <ProjectScreen
            project={project}
            parallaxRef={parallaxRef}
            index={index}
            maxIndex={projects.length - 1}
          />
        ))}
      </Parallax>
      <Box
        style={{
          position: "fixed",
          right: "15px",
          bottom: "15px",
          height: "30px",
          width: "215px",
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#fff",
          fontSize: theme.fonts.sizes.bodySmall,
          borderRadius: "10px",
          fontWeight: "bold",
          boxShadow: theme.boxShadow,
        }}
      >
        <p>REDUCED MOTION</p>
        <MotionSwitch
          name="motion"
          isOn={reducedMotion}
          handleToggle={() => setReducedMotion(!reducedMotion)}
        />
      </Box>
    </>
  )
}

export { Projects }
