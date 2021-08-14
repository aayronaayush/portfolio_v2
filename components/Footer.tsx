import { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import Image from "next/image";
import Link from "next/link";

import youtubeIcon from "../public/youtube.png";
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
    padding: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  a: {
    textDecoration: "none",
    color: "inherit"
  }
});

const socials = [
  {
    icon: youtubeIcon,
    link: "https://www.youtube.com/channel/UCx4493cWyLnWBNCz7pjeKNA",
    alt: "Youtube Logo",
    width: 35,
    height: 25
  },
  {
    icon: linkedInIcon,
    link: "https://www.linkedin.com/in/aayush-deo/",
    alt: "LinkedIn Logo",
    width: 25,
    height: 25
  },
  {
    icon: mailIcon,
    link: "mailto:aad598@nyu.edu",
    alt: "Email Logo",
    width: 25,
    height: 25
  },
];



export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.content}>
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
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
              </a>
            );
          })}
      </div>
    </div>
  );
}
