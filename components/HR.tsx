import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    horizontalRule: {
    margin: 0,
    padding: 0,
  },
})

export default function HorizontalRule() {
    const classes = useStyles()
    return <hr className={classes.horizontalRule} />
}