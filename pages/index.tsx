import { createUseStyles } from "react-jss"
import Title from "../components/Title"

const useStyles = createUseStyles({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
})

export default function Home() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Title />
      <h1>Aayush Aayron Deo</h1>
      <h3>
        Portfolio Website Coming Soon 
      </h3>
    </div>
  )
}
