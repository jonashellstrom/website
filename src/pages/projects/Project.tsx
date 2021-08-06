import React from "react"
import { ParallaxLayer, IParallax } from "@react-spring/parallax"
import { useTheme } from "@emotion/react"

import Box from "../../components/layouts"
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            width: "100%",
            position: "fixed",
            top: "70px",
            alignItems: "flex-start",
            justifyContent: "center",
            color: theme.colors.primary,
          }}
        >
          <div
            style={{
              height: "100px",
              width: "400px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  fontWeight: "bold",
                  fontSize: theme.fonts.sizes.title,
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
            </div>
            <div
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
            </div>
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={index} speed={0.5} onClick={handleOnClick}>
        <div
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            position: "fixed",
            top: "180px",
            alignItems: "flex-start",
            justifyContent: "center",
            color: theme.colors.primary,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              width: "400px",
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
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={index} speed={0.8} onClick={handleOnClick}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            width: "100%",
            position: "fixed",
            top: "270px",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <div>
            <img
              src={project.imageUrl}
              style={{
                maxHeight: "300px",
              }}
              alt="Project Preview"
            />
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={index} speed={1.2} onClick={handleOnClick}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            position: "fixed",
            top: "600px",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: theme.colors.primary,
              height: "70px",
              width: "400px",
              marginBottom: "20px",
            }}
          >
            <span>{project.description}</span>
          </div>
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
        </div>
      </ParallaxLayer>
    </>
  )
}
