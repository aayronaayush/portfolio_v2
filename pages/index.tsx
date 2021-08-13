import { createUseStyles } from "react-jss";

import Title from "../components/Title";
import SummaryBlock from "../components/SummaryBlock";
import WorkExperience from "../components/WorkExperience";
import HorizontalRule from "../components/HR";
import { WorkExperience as WorkExperienceData } from "../data/workExperience";

const useStyles = createUseStyles({
  text: {
    width: "70%",
    transform: "translateY(-40%)",
  },
  name: {
    margin: 0,
    fontWeight: "bold",
    color: "#E2E8CE",
    fontSize: "24pt",
    textShadow: "2px 2px 2px grey",
  },
  summary: {
    margin: 0,
    color: "#E2E8CE",
    fontSize: "18pt",
    textShadow: "2px 2px 2px grey",
  },
  title: {
    textAlign: "center",
  },
});

export default function Home() {
  const classes = useStyles();

  const summaryBlockContent = <div className={classes.text}>
        <p className={classes.name}>I am Aayush!</p>
        <p className={classes.summary}>
          I am a full stack web and mobile app developer
        </p>
      </div>

  return (
    <div>
      <Title />
      <SummaryBlock content={summaryBlockContent} />
      <h1 className={classes.title}>Work Experience</h1>
      <HorizontalRule />
      {
        WorkExperienceData.map((experience) => {
          return <div key={experience.institution}>
          <WorkExperience experience={experience}/>
          <HorizontalRule />
          </div>
        })
      }
    </div>
  );
}
