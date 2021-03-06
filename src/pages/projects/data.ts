import { Project } from "./Project"

export const projects: Project[] = [
  {
    title: "Serverless Pizza",
    tech: ["AWS Serverless", "Step Functions"],
    description:
      "A pizza order orchestrator built with AWS Serverless and middy. Leverages Step Functions, DynamoDB, SNS and API Gateway.",
    imageUrl:
      "https://jonashellstrom-public-website.s3.ca-central-1.amazonaws.com/images/serverless-pizza_preview.png",
    githubUrl: "https://github.com/jonashellstrom/serverless-pizza",
  },
  {
    title: "Investment Tracker",
    tech: ["Django", "Django Rest Framework"],
    description:
      "An investment tracking app with a REST API built using Django and DRF.",
    imageUrl:
      "https://jonashellstrom-public-website.s3.ca-central-1.amazonaws.com/images/investment-tracker_preview.png",
    githubUrl: "https://github.com/jonashellstrom/investment-tracker",
  },
  {
    title: "chromato",
    tech: ["ReactNative", "TypeScript"],
    description:
      "A pomodoro app for iOS built with ReactNative and Expo. chromato is a productivity timer that helps you stay focused and lets you manage your time better.",
    imageUrl:
      "https://jonashellstrom-public-website.s3.ca-central-1.amazonaws.com/images/chromato_preview.png",
    storeUrl: "https://apps.apple.com/mo/app/chromato/id1527211591?l=en",
  },
]
