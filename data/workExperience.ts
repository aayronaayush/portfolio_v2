import { Experience } from "../types";

export const WorkExperience: Array<Experience> = [
	{
        institution: "Mental VR",
        link: "#",
        duration: "August 2021 - Present",
        title: "Full Stack Web Developer",
        responsibilities: [
            "Developed frontend for a training reporting dashboard from Figma Designs using ReactJS",
            "Developed backend for the training report dashboard using Fastify in the MVC architecture",
			"Automated a build in another repository using GitHub actions",
			"Led a team of 3 to configure 45 HTC Vive Focus 3 devices and trained 45 individuals to use the device and the software"
        ]
    },
	{
        institution: "Soopa",
        link: "#",
        duration: "August 2021 - May 2022",
        title: "Backend Developer",
        responsibilities: [
            "Implemented and facilitated the implementation of a payment gateway using the MasterCard Payment API",
			"Developed the server side application using ExpressJS"
        ]
    },
    {
        institution: "New York University Abu Dhabi Undergraduate Admission Office",
        link: "#",
        duration: "August 2019 - May 2022",
        title: "Senior Student Admissions Ambassador",
        responsibilities: [
            "Implemented an automated system for admissions staff to request for student ambassadors to support events via Google forms,Google Sheets and GScript",
            "Developed an independent event management system using ReactJS/NextJS, using Firebase as the backend for use by 20 student ambassadors, 20 staff members to facilitate about 50 event requests per academic year",
            "Implemented a notification system for the event management system using Sendgrid Email API",
            "Implemented event scheduling on Google Calendar using Google Calendar API"
        ]
    },
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
        duration: "October 2020 - May 2022",
        title: "Web Developer",
        responsibilities: [
            "Developed the public website and admin panel for theeditors of Alnakheel Magazine to add and edit articles using ReactJS/NextJS, Firebase and hosted on vercel"
        ]
    },
    {
        institution: "Scholars Abroad Fiji",
        link: "https://scholarsabroadfiji.com",
        duration: "July 2020 - Present",
        title: "Co-founder and Web Developer",
        responsibilities: [
            "Co-founded Scholars Abroad Fiji a mentorship network that assists current Fijian high school students to apply to international universities that offer full scholarship",
            "Developed a public website using ExpressJS, MongoDB and NodeJS",
            "Implemented contact page by using Nodemailer to send an email to mentorship team",
            "Hosted app on Google App Engine"
        ]
    },
]