import { createUseStyles } from "react-jss"
import { Experience, Project } from "../types"

const useStyles = createUseStyles({
    container: {
        padding: 30,
        display: "flex"
    },
    content: {
        display: "flex",
        width: "50%",
        height: "100%",
        alignItems: "center",
    },
    project: {
        paddingLeft: 50
    },
    title: {
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
    project: {
        display: "flex",
        flexDirection:"column",
        textAlign: "center",
        padding: "0"
    },
    title: {
        fontSize: "14pt"
    }
  },
})

export default function ProjectBlock({project}: {project: Project}) {
    const classes = useStyles()


    return <div className={classes.container}>
        <div className={classes.content}>
            <div className={classes.project}>
                <a href={project.link} className={classes.title}>
                        {project.title}
                </a>
            </div>
        </div>
        <div className={classes.content}>
            <ul>
                {
                    project.description.map(( description ) => {
                        return <li key={description}>
                            {description}
                        </li>
                    })
                }
            </ul>
        </div>
    </div>
}