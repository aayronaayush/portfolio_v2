import { createUseStyles } from "react-jss";

import { Testimony } from "../types";

const useStyles = createUseStyles({
    container: {
        width: "80%",
        margin: "auto",
        textAlign: "center",
        paddingBottom: 30
    },
    credentials: {
        fontWeight: "bold"
    }
})

export default function TestimonyBlock({testimony}: {testimony: Testimony}) {
    const classes = useStyles()

    return <div className={classes.container}>
        <i>
            {testimony.statement}
        </i>
        <div className={classes.credentials}>
            <div>
                - {testimony.name} -
            </div>
            <div>
                {testimony.position}
            </div>
        </div>
    </div>
}