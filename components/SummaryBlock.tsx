import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    container: {
        height: "500px",
        backgroundImage: "url(\"./summaryBlockBg.jpg\")",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",

    },
    text: {
        width: "70%",
        transform: "translateY(-40%)"
    },
    p: {
        margin: 0
    },
    name: {
        margin: 0,
        fontWeight: "bold",
        color: "#E2E8CE",
        fontSize: "24pt"
    },
    summary: {
        margin: 0,
        color: "#E2E8CE",
        fontSize: "18pt"
    }
})

export default function SummaryBlock() {
    const classes = useStyles()

    return <div className={classes.container}>
        <div className={classes.text}>
            <p className={classes.name}>I am Aayush!</p>
            <p className={classes.summary}>I am full stack web and mobile app developer</p>
        </div>
    </div>
}