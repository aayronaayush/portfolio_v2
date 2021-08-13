import { createUseStyles } from "react-jss"
import { Experience } from "../types"

const useStyles = createUseStyles({
    container: {
        height: 500,
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
    }
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