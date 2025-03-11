import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
// import Work5 from "../../assets/work5.jpg";

export const projectsData = [
  {
    id: 1,
    image: Work2,
    title: "WordVision",
    description:
      "ePub reading experience by integrating industry trends AI-powered image generation directly within the text.",
    category: "app",
    link: "https://github.com/WordVision/wordvision-app",
  },
  {
    id: 2,
    image: Work3,
    title: "Readme Genie",
    description:
      "An open-source Python script that generates a markdown README file using AI LLMs such as Groq and Cohere APIs.",
    category: "app",
    link: "https://test.pypi.org/project/ReadmeGenie/",
  },
  {
    id: 3,
    image: Work4,
    title: "Fragments Microservice",
    description:
      "Backend Node.js based API designed for managing data fragments by leveraging cloud-native technologies such as AWS S3, AWS DynamoDB, and AWS Cognito",
    category: "data",
    link: "https://github.com/htsagara/fragments/",
  },
  {
    id: 4,
    image: Work1,
    title: "Timesheet-app",
    description:
      "Web application that allows employees to record their work shifts",
    category: "web",
    link: "https://github.com/CoffeeCollab/Timesheet-App",
  },
];

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "app",
  },
  {
    name: "data",
  },
];
