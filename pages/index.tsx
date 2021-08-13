import { createUseStyles } from "react-jss";

import Title from "../components/Title";
import Header from "../components/Header";
import SummaryBlock from "../components/SummaryBlock";

const useStyles = createUseStyles({
  container: {},
});

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Title />
      <SummaryBlock />
    </div>
  );
}
