import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
    container: {
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    content: {
        transform: "translateY(-20%)",
        textAlign: "center"
    }, 
    headshot: {
        width: 400,
        maxWidth: "90%",
    },
    a: {
        textDecoration: "none",
        color: "inherit"
    }
})

export default function Contact() {
    const classes = useStyles()
    return <div className={classes.container}>
        <div className={classes.content}>
            <img className={classes.headshot} src="/headshot.png" alt="" />
            <h1>Get in touch!</h1>
            <h2>Email: <i><a className={classes.a} href="mailto:aad598@nyu.edu">aad598@nyu.edu</a></i>  </h2> 
        </div>
    </div>
}