import { createUseStyles } from "react-jss";

import Title from "../components/Title";
import Header from "../components/Header";
import SummaryBlock from "../components/SummaryBlock";

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
    </div>
  );
}
