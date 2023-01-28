import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import Image from "next/image";
import Link from "next/link";

import youtubeIcon from "../public/youtube.png";
import instagramIcon from "../public/instagram.png";
import linkedInIcon from "../public/linkedin.png";
import mailIcon from "../public/email.png"
import arrow from "../public/arrow.png";

const mobileNavContainerHeight = "30px";

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
    color: "black",
  },
  navItem: {
    paddingLeft: 15,
  },
  a: {
    textDecoration: "none",
    color: "inherit",
  },
  navContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  navMobileButton: {
    display: "none",
  },
  down: {
    width: "20px",
    animation: "$turnDown 250ms linear forwards",
    transform: "translateY(-10%)",
  },
  "@keyframes turnDown": {
    "0%": {
      transform: "rotateZ(180deg)",
    },
    "100%": {
      transform: "rotateZ(360deg)",
    },
  },
  up: {
    width: "20px",
    animation: "$turnUp 250ms linear forwards",
    transform: "translateY(-10%)",
  },
  "@keyframes turnUp": {
    "0%": {
      transform: "rotateZ(0deg)",
    },
    "100%": {
      transform: "rotateZ(180deg)",
    },
  },
  navMobileContainerOpen: {
    animation: "$open 250ms linear forwards",
    // borderTop: "1px solid black",
    color: "transparent",
    padding: 5,
    paddingLeft: 10,
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
    },
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
      paddingLeft: 10,
    },
    "50%": {
      color: "transparent",
      height: mobileNavContainerHeight,
    },
    "100%": {
      color: "transparent",
      height: 0,
      padding: 0,
    },
  },
  horizontalRule: {
    margin: 0,
    padding: 0,
  },
  "@media screen and (max-width: 549px)": {
    // mobile
    content: {
      width: "90%",
      padding: "15px",
    },
    name: {
      fontSize: "12pt",
    },
    navContainer: {
      display: "none",
    },
    navMobileButton: {
      display: "inline",
    },
  },
  "@media screen and (min-width: 550px) and (max-width: 768px)": {
    // tablet
    content: {
      width: "90%",
      padding: "15px",
    },
    name: {
      fontSize: "14pt",
    },
  },
});

const navItems = [
  {
    text: "CV",
    path: "cv.pdf",
  },
  // {
  //   text: "Projects",
  //   path: "#",
  // },
  // {
  //     text: "Work Experience",
  //     path: "#"
  // },
  // {
  //     text: "Skills",
  //     path: "#"
  // },
  {
    text: "Contact",
    path: "/contact",
  },
];

const socials = [
//   {
//     icon: instagramIcon,
//     link: "https://www.instagram.com/aayronaayu.sh/",
//     alt: "Instagram Logo",
//     width: 25,
//     height: 25
//   },
//   {
//     icon: youtubeIcon,
//     link: "https://www.youtube.com/channel/UCx4493cWyLnWBNCz7pjeKNA",
//     alt: "Youtube Logo",
//     width: 35,
//     height: 25
//   },
  {
    icon: linkedInIcon,
    link: "https://www.linkedin.com/in/aayush-deo/",
    alt: "LinkedIn Logo",
    width: 25,
    height: 25
  },
  {
    icon: mailIcon,
    link: "mailto:aayushaayron@gmail.com",
    alt: "Email Logo",
    width: 25,
    height: 25
  },
];

export default function Header() {
  const classes = useStyles();

  const [arrowDirection, setArrowDirection] = useState(1);
  const [arrowOrientation, setArrowOrientation] = useState(classes.down);

  useEffect(() => {
    if (arrowDirection == 1) {
      setArrowOrientation(classes.down);
    } else {
      setArrowOrientation(classes.up);
    }
  }, [arrowDirection, classes.down, classes.up]);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Link href="/" passHref>
          <span className={classes.link}>Aayush Aayron Deo</span>
        </Link>

        <span
          onClick={() => setArrowDirection(arrowDirection * -1)}
          className={classes.navMobileButton}
        >
          <Image
            className={arrowOrientation}
            width={25}
            height={15}
            src={arrow}
            alt="Orientation Arrow"
          />
        </span>

        <span className={classes.navContainer}>
          {navItems.map((navItem, index) => {
            return navItem.text == "CV" ? (
              <a
                className={classes.a}
                key={index}
                href={navItem.path}
                rel="noreferrer"
                target="_blank"
              >
                <span className={classes.navItem}>{navItem.text}</span>
              </a>
            ) : (
              <Link key={index} href={navItem.path} passHref>
                <span className={classes.navItem}>{navItem.text}</span>
              </Link>
            );
          })}
          &nbsp;&nbsp;
          {socials.map((social, index) => {
            return (
              <a key={index} className={classes.a} href={social.link} rel="noreferrer" target="_blank">
                <span>
                  <Image
                    width={social.width}
                    height={social.height}
                    src={social.icon}
                    alt={social.alt}
                  />
                  &nbsp;&nbsp;
                </span>
              </a>
            );
          })}
        </span>
      </div>
      {/* <HorizontalRule /> */}
      <div>
        {navItems.map((navItem, index) => {
          return navItem.text == "CV" ? (
            <a
              className={classes.a}
              href={navItem.path}
              rel="noreferrer"
              target="_blank"
            >
              <div
                onClick={() => setArrowDirection(1)}
                className={
                  arrowDirection == -1
                    ? classes.navMobileContainerOpen
                    : classes.navMobileContainerClosed
                }
              >
                {navItem.text}
              </div>
            </a>
          ) : (
            <Link key={index} href={navItem.path} passHref>
              <div
                onClick={() => setArrowDirection(1)}
                className={
                  arrowDirection == -1
                    ? classes.navMobileContainerOpen
                    : classes.navMobileContainerClosed
                }
              >
                {navItem.text}
              </div>
            </Link>
          );
        })}
          <div
            onClick={() => setArrowDirection(1)}
            className={
              arrowDirection == -1
                ? classes.navMobileContainerOpen
                : classes.navMobileContainerClosed
            }
          >
        {socials.map((social, index) => {
          return (
            <Link key={index} href={social.link} passHref>
              <span>
                {arrowDirection == -1 ? (
                  <Image
                    src={social.icon}
                    width={social.width}
                    height={social.height}
                    alt={social.alt}
                  />
                ) : (
                  <div key={1}></div> 
                )}
                &nbsp;&nbsp;
              </span>
            </Link>
          );
        })}
        </div>
      </div>
    </div>
  );
}
