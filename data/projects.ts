import { Project } from "../types";

export const projects: Array<Project> = [
    {
        title: "NYUAD Challenges",
        link: "#",
        description: [
            "Developed a protected app for students to view, attempts challenges and use points to purchase items fromthe store usingReactJS/NextJS as the frontend framework and Firebase for Authentication, Database and Storage and hosted on Vercel",
            "Developed a protected dashboard for challenges admin to create new challenges, approve or reject submissions and add items to the store"
        ]
    },
    {
        title: "Assassin Game Portal",
        link: "#",
        description: [
            "Developed a dashboard for the annual Assassin Game at NYU Abu Dhabi using NextJS/ReactJS that was used by 155 students over a period of 5 weeks, with 0% downtime on the system",
            "Setup a daily CRON job to automate the elimination of players that did not meet a certain criteria and changing the phrase of the day"
        ]
    }
]