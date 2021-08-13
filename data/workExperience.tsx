import { Experience } from "../types";

export const WorkExperience: Array<Experience> = [
    {
        institution: "Aomni",
        link: "https://app.aomni.com",
        duration: "October 2020 - February 2021",
        title: "Software Development Intern",
        responsibilities: [
            "Implemented testable frontend code with ReactJS/NextJS",
            "Conducted end to end using reusable Cypress.io tests and fixed bugs discovered during testing"
        ]
    },
    {
        institution: "Alnakheel Magazine",
        link: "https://alnakheel.org",
        duration: "October 2020 - Present",
        title: "Web Developer",
        responsibilities: [
            "Developed the public website and admin panel for theeditors of Alnakheel Magazine to add and edit articlesusingReactJS/NextJS, Firebase and hosted on vercel"
        ]
    },
    {
        institution: "New York University Abu Dhabi Undergraduate Admission Office",
        link: "#",
        duration: "August 2019 - Present",
        title: "Senior Student Admissions Ambassador",
        responsibilities: [
            "Implemented an automated system for admissions staffto request for student ambassadors to support eventsvia Google forms,Google Sheets and GScript",
            "Developed an independent event management system usingReactJS/NextJS, using Firebase as the backend foruse by 20student ambassadors, 20 staff members to facilitateabout 50 event requests per academic year",
            "Implemented a notification system for the event managementsystem using Sendgrid Email API",
            "Implemented event scheduling on Google Calendar usingGoogle Calendar API"
        ]
    }
]