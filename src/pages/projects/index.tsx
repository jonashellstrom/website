import React, { useRef } from "react"
import { Parallax, IParallax, ParallaxLayer } from "@react-spring/parallax"
import { useTheme } from "@emotion/react"

import { ProjectScreen } from "./Project"
import { projects } from "./data"
// import MotionSwitch from "../../components/toggle-switch"

const Projects: React.FC = () => {
  const parallaxRef = useRef<IParallax>(null!)
  // const [reducedMotion, setReducedMotion] = useState(false)

  const theme = useTheme()

  return (
    <>
      <Parallax
        ref={parallaxRef}
        pages={projects.length}
        horizontal
        style={{
          backgroundColor: theme.colors.background,
        }}
      >
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={projects.length}
          style={{
            backgroundSize: "cover",
            opacity: 0.1,
            backgroundColor: theme.colors.gray3,
          }}
        />
        {projects.map((project, index) => (
          <ProjectScreen
            key={index}
            project={project}
            parallaxRef={parallaxRef}
            index={index}
            maxIndex={projects.length - 1}
          />
        ))}
      </Parallax>
      {/* <Box
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
      </Box> */}
    </>
  )
}

export { Projects }
