import React from "react"
import { ParallaxLayer, IParallax } from "@react-spring/parallax"
import { useTheme } from "@emotion/react"
import { Box, Image } from "rebass"

import AppStoreButton from "../../assets/app_store.svg"
import GitHubMarkLight from "../../assets/GitHub-Mark-Light-64px.png"
import { Button } from "../../components/button"
import { Label } from "../../components/label"

export type Project = {
  title: string
  tech: string[]
  description: string
  imageUrl: string
  storeUrl?: string
  githubUrl?: string
}

export const ProjectScreen: React.FC<{
  parallaxRef: React.MutableRefObject<IParallax>
  project: Project
  index: number
  maxIndex: number
}> = ({ parallaxRef, project, index, maxIndex }) => {
  const theme = useTheme()

  const scroll = (to: number) => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(to)
    }
  }

  const handleOnClick = () => scroll(index === maxIndex ? 0 : index + 1)

  return (
    <>
      <ParallaxLayer
        offset={index}
        speed={0.3}
        style={{
          zIndex: 100,
        }}
        onClick={handleOnClick}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            width: "100%",
            position: "fixed",
            top: "70px",
            alignItems: "flex-start",
            justifyContent: "center",
            color: theme.colors.primary,
            marginTop: ["20px", null],
            paddingX: ["15px", null],
          }}
        >
          <Box
            sx={{
              height: "100px",
              width: "400px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  fontWeight: "bold",
                  fontSize: [
                    theme.fonts.sizes.titleMobile,
                    theme.fonts.sizes.title,
                  ],
                }}
              >
                <p style={{ textShadow: theme.boxShadow }}>{project.title}</p>
              </Box>
              <Box
                style={{
                  height: "6px",
                  width: "80px",
                  backgroundColor: theme.colors.pink,
                  marginTop: "-15px",
                  boxShadow: theme.boxShadow,
                }}
              />
            </Box>
            <Box
              style={{
                marginTop: "30px",
              }}
            >
              {project.storeUrl ? (
                <a
                  href={project.storeUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <img
                    src={AppStoreButton}
                    alt="App Store Button"
                    style={{ cursor: "pointer" }}
                  />
                </a>
              ) : (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={GitHubMarkLight}
                      alt="GitHub Mark"
                      style={{ width: "20px", paddingRight: "4px" }}
                    />
                    Code
                  </Button>
                </a>
              )}
            </Box>
          </Box>
        </Box>
      </ParallaxLayer>

      <ParallaxLayer offset={index} speed={0.5} onClick={handleOnClick}>
        <Box
          sx={{
            display: "flex",
            height: "100%",
            width: "100%",
            position: "fixed",
            top: "180px",
            alignItems: "flex-start",
            justifyContent: "center",
            color: theme.colors.primary,
            marginTop: ["20px", null],
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              width: "400px",
              paddingX: ["15px", null],
            }}
          >
            {project.tech.map((tech, idx) => (
              <Label
                key={idx}
                style={{
                  marginRight: idx === project.tech.length - 1 ? 0 : "10px",
                }}
              >
                {tech.toUpperCase()}
              </Label>
            ))}
          </Box>
        </Box>
      </ParallaxLayer>

      <ParallaxLayer offset={index} speed={0.8} onClick={handleOnClick}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            width: "100%",
            position: "fixed",
            top: "270px",
            alignItems: "flex-start",
            justifyContent: "center",
            marginTop: ["20px", null],
          }}
        >
          <Box>
            <Image
              src={project.imageUrl}
              sx={{
                maxHeight: ["230px", "300px"],
              }}
              alt="Project Preview"
            />
          </Box>
        </Box>
      </ParallaxLayer>

      <ParallaxLayer offset={index} speed={1.2} onClick={handleOnClick}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            position: "fixed",
            top: ["550px", "600px"],
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              color: theme.colors.primary,
              height: "70px",
              width: ["280px", "400px"],
              marginBottom: ["40px", "20px"],
            }}
          >
            <p>{project.description}</p>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "50px",
              width: "50px",
              backgroundColor: theme.colors.gray,
              color: "#fff",
              fontSize: theme.fonts.sizes.bodySmall,
              borderRadius: "100%",
              fontWeight: "bold",
              boxShadow: theme.boxShadow,
            }}
          >
            <p>NEXT</p>
          </Box>
        </Box>
      </ParallaxLayer>
    </>
  )
}
