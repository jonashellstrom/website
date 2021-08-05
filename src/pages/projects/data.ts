import { Project } from "./Project"

export const projects: Project[] = [
  {
    title: "Serverless Pizza",
    tech: ["AWS Serverless", "TypeScript"],
    description:
      "A pizza order orchestrator using Step Functions and DynamoDB.",
    imageUrl:
      "https://is2-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/ba/c5/8b/bac58be4-082a-ea33-3c32-0ea12cc3b00d/9a15758f-07dd-4948-ab50-53e61607a9c1_image3_2.png/460x0w.webp",
    githubUrl: "https://github.com/jonashellstrom/serverless-pizza",
  },
  {
    title: "Investment Tracker",
    tech: ["Django", "Django Rest Framework"],
    description: "An investment tracking app built with Django and DRF.",
    imageUrl:
      "https://is2-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/ba/c5/8b/bac58be4-082a-ea33-3c32-0ea12cc3b00d/9a15758f-07dd-4948-ab50-53e61607a9c1_image3_2.png/460x0w.webp",
    githubUrl: "https://github.com/jonashellstrom/investment-tracker",
  },
  {
    title: "chromato",
    tech: ["ReactNative", "TypeScript"],
    description:
      "A pomodoro app for iOS. chromato is a productivity timer that helps you stay focused and lets you manage your time better.",
    imageUrl:
      "https://is3-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/5c/b1/c4/5cb1c4d7-fe91-7726-7364-89823aec4a96/f4d4e7ed-a390-482b-bb9a-544bc60a78ee_image2_2.png/460x0w.webp",
    storeUrl: "https://apps.apple.com/mo/app/chromato/id1527211591?l=en",
  },
]
