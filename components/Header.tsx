import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    container: {
        backgroundColor: "#cdd5d1",
    },
    content: {
        width: "70%",
        margin: "auto",
        padding: "15px 30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"

    },
    name: {
        fontWeight: "bold",
        fontSize: "18pt"
    },
    '@media screen and (max-width: 360px)': {
        content: {
            width: "90%",
            padding: "15px"
        },
        name: {
            fontSize: "12pt"
        }
    },
    '@media screen and (min-width: 361px) and (max-width: 768px)': {
        content: {
            width: "90%",
            padding: "15px"
        },
        name: {
            fontSize: "14pt"
        }
    }
})

export default function Header() {
    const classes = useStyles()
    return <div className={classes.container}>
        <div className={classes.content}>
        <div className={classes.name}>Aayush Aayron Deo</div>
        <div>Home</div>
        </div>
    </div>
}