import React from "react"
import { BaseScreen } from "../../components/layouts"
import MemojiStack from "../../assets/memoji-stack.png"
import { Box, Image } from "rebass"
import { useTheme } from "@emotion/react"

const Home: React.FC = () => {
  const theme = useTheme()
  return (
    <BaseScreen>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: ["105px", "0px"],
          width: "300px",
        }}
      >
        <Image
          src={MemojiStack}
          alt="My Memoji"
          sx={{
            width: ["230px", "280px"],
            marginTop: ["20px", null],
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          width: ["300px", "600px"],
          marginTop: "30px",
          marginBottom: "50px",
          lineHeight: "18pt",
          color: theme.colors.primary,
        }}
      >
        <Box
          sx={{
            width: ["100%", "47.5%"],
            marginRight: ["0%", "5%"],
            whiteSpace: "pre-wrap",
          }}
        >
          {
            "Hi, I'm Jonas!\n\nI'm a full stack developer based in Toronto. I love working with AWS and the Serverless Framework to build microservices, Django to build web APIs as well as with React and Redux to build nice-looking web and mobile apps. I've worked with both GraphQL and REST APIs, with SQL as well as with non-relational databases like DynamoDB.\n\nRecently, I've really enjoyed building for iOS with Swift and SwiftUI."
          }
        </Box>
        <Box
          sx={{
            width: ["100%", "47.5%"],
            marginRight: ["0%", "5%"],
            marginTop: ["20px", "0px"],
            whiteSpace: "pre-wrap",
          }}
        >
          <br />
          <br />
          {
            "I have a background in finance and discovered my passion for programming writing macros for Excel. I completed a full stack bootcamp a couple of years ago and I've been coding pretty non-stop ever since (I even built a time management app so that I wouldn't lose track of time coding – check it out under my projects page)\n\nThe code for this website can be found on the "
          }
          <a
            href="https://github.com/jonashellstrom/website"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: theme.colors.orange,
              fontWeight: "bold",
            }}
          >
            Website Repo
          </a>
        </Box>
      </Box>
    </BaseScreen>
  )
}

export { Home }
