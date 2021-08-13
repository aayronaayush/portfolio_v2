import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    height: "500px",
    backgroundImage: 'url("./summaryBlockBg.jpg")',
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  
});

export default function SummaryBlock({content}: {content: any}) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {content}
    </div>
  );
}
