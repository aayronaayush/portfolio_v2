import { useEffect, useState } from "react"
import { createUseStyles } from "react-jss"
import Image from "next/image"
import Link from "next/link"
import arrow from "../public/arrow.png"

const mobileNavContainerHeight = "30px"

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
        justifyContent: "space-between",
    },
    link: {
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
    navMobileContainerOpen: {
        animation: "$open 250ms linear forwards",
        // borderTop: "1px solid black",
        color: "transparent",
        padding: 5,
        paddingLeft: 10
    },
    "@keyframes open": {
        "0%": {
            height: 0,
            borderBottom: "none",
        },
        "50%": {
            height: mobileNavContainerHeight,
            color: "transparent",
            borderBottom: "none",
        },
        "100%": {
            color: "black",
            height: mobileNavContainerHeight,
            borderBottom: "1px solid black",
        }
    },
    navMobileContainerClosed: {
        height: mobileNavContainerHeight,
        // borderTop: "1px solid black",
        // borderBottom: "1px solid black",
        animation: "$close 250ms linear forwards",
    },
    "@keyframes close": {
        "0%": {
            color: "black",
            height: mobileNavContainerHeight,
            padding: 5,
            paddingLeft: 10
        },
        "50%": {
            color: "transparent",
            height: mobileNavContainerHeight
        },
        "100%": {
            color: "transparent",
            height: 0,
            padding: 0
        }
    },
    horizontalRule: {
        margin: 0,
        padding: 0
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
            padding: "15px",
        },
        name: {
            fontSize: "14pt"
        }
    }
})

const navItems = [
    {
        text: "Projects",
        path: "#"
    },
    {
        text: "Work Experience",
        path: "#"
    },
    {
        text: "Skills",
        path: "#"
    },
    {
        text: "Contact",
        path: "#"
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
    }, [arrowDirection, classes.down, classes.up])

    return <div className={classes.container}>
        <div className={classes.content}>
        <Link href="/" passHref>
            <span className={classes.link}>
                Aayush Aayron Deo
            </span>
        </Link>

        <span onClick={() => setArrowDirection(arrowDirection * -1)} className={classes.navMobileButton}>
            <Image className={arrowOrientation} width={25} height={15} src={arrow} alt="Orientation Arrow" />
        </span>
        

        <span className={classes.navContainer}>
            {
                navItems.map((navItem, index) => {
                    return <Link key={index} href={navItem.path} passHref>
                        <span className={classes.navItem}>{navItem.text}</span>
                    </Link>
                })
            }
        </span>
        </div>
        <hr className={classes.horizontalRule} />
        <div>
            {
                navItems.map((navItem, index) => {
                    return <Link key={index} href={navItem.path} passHref>
                        <div onClick={() => setArrowDirection(1)} className={arrowDirection == -1 ? classes.navMobileContainerOpen : classes.navMobileContainerClosed}>{navItem.text}</div>
                    </Link>
                })
            }
        </div>
    </div>
}