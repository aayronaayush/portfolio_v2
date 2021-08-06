import { useEffect, useState } from "react"
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
        fontSize: "16pt",
        textDecoration: "none",
        color: "black"
    },
    navItem: {
        paddingLeft: 15 
    },
    navContainer: {
            display: "inline"
    },
    navMobileButton: {
        display: "none"
    },
    down: {
        width: "20px",
        animation: "$turnDown 250ms linear forwards",
        transform: "translateY(-10%)"
    },
    "@keyframes turnDown": {
        "0%": {
            transform: "rotateZ(180deg)"
        },
        "100%": {
            transform: "rotateZ(360deg)"
        }
    },
    up: {
        width: "20px",
        animation: "$turnUp 250ms linear forwards",
        transform: "translateY(-10%)"
    },
    "@keyframes turnUp": {
        "0%": {
            transform: "rotateZ(0deg)"
        },
        "100%": {
            transform: "rotateZ(180deg)"
        }
    },
    '@media screen and (max-width: 549px)': { // mobile
        content: {
            width: "90%",
            padding: "15px"
        },
        name: {
            fontSize: "12pt"
        },
        navContainer: {
            display: "none"
        },
        navMobileButton: {
            display: "inline"
        }
    },
    '@media screen and (min-width: 550px) and (max-width: 768px)': { // tablet
        content: {
            width: "90%",
            padding: "15px"
        },
        name: {
            fontSize: "14pt"
        }
    }
})

const navItems = [
    {
        text: "Projects"
    },
    {
        text: "Work Experience"
    },
    {
        text: "Skills"
    },
    {
        text: "Contact"
    }
]

export default function Header() {
    const classes = useStyles()

    const [arrowDirection, setArrowDirection] = useState(1)
    const [arrowOrientation, setArrowOrientation] = useState(classes.down)


    useEffect(() => {
        if (arrowDirection == 1) {
            setArrowOrientation(classes.down)
        } else {
            setArrowOrientation(classes.up)
        }
    }, [arrowDirection])

    return <div className={classes.container}>
        <div className={classes.content}>
        <a href="/" className={classes.name}>Aayush Aayron Deo</a>

        <span onClick={() => setArrowDirection(arrowDirection * -1)} className={classes.navMobileButton}>
            <img className={arrowOrientation} src="arrow.png" alt="" />
        </span>

        <span className={classes.navContainer}>
            {
                navItems.map((navItem, index) => {
                    return <span className={classes.navItem} key={index}>{navItem.text}</span>
                })
            }
        </span>
        
        </div>
    </div>
}