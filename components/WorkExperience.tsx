import { createUseStyles } from "react-jss"
import { Experience } from "../types"

const useStyles = createUseStyles({
    container: {
        height: 300,
        display: "flex"
    },
    content: {
        display: "flex",
        width: "50%",
        height: "100%",
        alignItems: "center",
    },
    role: {
        paddingLeft: 50
    },
    institution: {
        fontSize: "18pt",
        textDecoration: "none",
        color: "inherit"
    },
    "@media screen and (max-width: 650px)": {
    // mobile
    container: {
        height: "0%",
        flexDirection: "column"
    },
    content: {
        width: "100%",
        justifyContent: "center"
    },
    role: {
        display: "flex",
        flexDirection:"column",
        textAlign: "center",
        padding: "0"
    },
    institution: {
        fontSize: ""
    }
  },
})

export default function WorkExperience({experience}: {experience: Experience}) {
    const classes = useStyles()


    return <div className={classes.container}>
        <div className={classes.content}>
            <div className={classes.role}>
                <a href="app.aomni.com" className={classes.institution}>
                        {experience.institution}
                </a>
                <i>
                    <p>{experience.title}</p>
                    <p>{experience.duration}</p>
                </i>
            </div>
        </div>
        <div className={classes.content}>
            <ul>
                {
                    experience.responsibilities.map((responsibility ) => {
                        return <li key={responsibility}>
                            {responsibility}
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
}