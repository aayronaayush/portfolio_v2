import { Experience } from "../types";

export const WorkExperience: Array<Experience> = [
	{
        institution: "Wio Bank PJSC",
        link: "https://wio.io",
        duration: "August 2022 - Present",
        title: "Frontend Developer",
        responsibilities: [
            "Developed an interface for automated WPS Salary Transfer System, and integrated maker/checker functionality using Flutter.",
            "Collaboratively defined the OpenAPI specification for WPS, fostering seamless collaboration with backend developers for enhanced integration.",
            "Revamped the invoices feature for business customers, delivering a refined user experience through graceful error handling, optimized load times via concurrent network calls, and leveraging deferred network calls for maximum efficiency.",
            "Created loan application flow and loans dashboard, enhancing the Wio Retail banking app with seamless loan management capabilities.",
            "Implemented Mixpanel analytics for WPS and Invoices features, enabling comprehensive data analysis and streamlined production debugging capabilities.",
            "Developed a plug-and-play SDK, empowering frontend developers to seamlessly integrate multi user [maker/checker] functionality with ease and efficiency.",
            "Collaborated closely with backend engineers to efficiently resolve production issues by leveraging the power of Mixpanel Analytics, Sentry, and Firebase Crashlytics.",
		]
    },
    {
        institution: "NYU Abu Dhabi Admissions Office",
        link: "#",
        duration: "May 2023 - Present",
        title: "Ambassador Resource Request System",
        responsibilities: [
            "Developed a tailored Flutter app for NYU Abu Dhabi admissions, optimizing event support requests and enhancing student ambassador management.",
            "Successfully implemented a robust server-side application using the Go Gin framework to handle API requests, streamline notifications, and efficiently manage permission updates through token claims.",
            "Leveraged Firebase Auth and Firestore to implement a comprehensive permission system with 4 distinct levels, ensuring secure access for diverse stakeholders within the application.",
            "Developed a robust notification system within the application, seamlessly integrating the Sendgrid Email API. This enabled efficient communication and timely notifications to all stakeholdersUtilized the Google Calendar API to seamlessly implement event scheduling functionality.",
            "Utilized the OpenAPI specification to define the API contract, establishing it as the authoritative source of truth for API requests and responses.",
            "Deployed the containerized server and client application on Google Cloud Run using the automated Google Cloud Build.",
            ]
    },
	{
        institution: "Mental VR",
        link: "https://mental.ae",
        duration: "August 2021 - May 2022",
        title: "Full Stack Web Developer",
        responsibilities: [
            "Utilized ReactJS to develop a powerful frontend for a training reporting dashboard.",
            "Built backend of training report dashboard using Fastify in MVC architecture, enabling efficient data processing and seamless frontend integration.",
            "Enabled automated builds in a dependent repository using GitHub Actions, streamlining the development and deployment processes for increased efficiency.",
            "Led and supervised a 3-member team in successfully configuring and deploying 45 HTC Vive Focus 3 devices. Additionally, provided comprehensive training to 45 individuals on device usage and software functionality.",
            ]
    },
	{
        institution: "Soopa",
        link: "#",
        duration: "August 2021 - May 2022",
        title: "Backend Developer",
        responsibilities: [
            "Implemented and facilitated the implementation of a payment gateway using the MasterCard Payment API.",
			"Developed the server side application using ExpressJS."
        ]
    },
    {
        institution: "New York University Abu Dhabi Undergraduate Admission Office",
        link: "#",
        duration: "August 2019 - May 2022",
        title: "Senior Student Admissions Ambassador",
        responsibilities: [
            "Designed and developed an automated system using Google Forms, Google Sheets, and GScript to streamline the process for admissions staff to request student ambassadors' support for events."
        ]
    },
    {
        institution: "Aomni",
        link: "https://app.aomni.com",
        duration: "October 2020 - February 2021",
        title: "Software Development Intern",
        responsibilities: [
            "Implemented highly testable frontend code utilizing ReactJS/NextJS. This approach ensured robust testing capabilities, enabling efficient validation and quality assurance of the frontend components and functionalities.",
            "Conducted comprehensive end-to-end testing utilizing reusable Cypress.io tests, thereby ensuring thorough coverage of the application's functionality. Additionally, addressed and resolved any discovered bugs or issues to enhance the overall quality and reliability of the system."
        ]
    },
    {
        institution: "Alnakheel Magazine",
        link: "https://alnakheel.org",
        duration: "October 2020 - May 2022",
        title: "Web Developer",
        responsibilities: [
            "Developed a public website and admin panel for Alnakheel Magazine using ReactJS/NextJS, Firebase, and Vercel.",
            "Enabled the editors to easily add and edit articles through the intuitive admin panel.",
            "Ensured seamless content management and a user-friendly experience for both visitors and administrators."
        ]
    },
    {
        institution: "Scholars Abroad Fiji",
        link: "https://scholarsabroadfiji.com",
        duration: "July 2020 - Present",
        title: "Co-founder and Web Developer",
        responsibilities: [
            "Co-founded Scholars Abroad Fiji, a mentorship network aimed at assisting Fijian high school students in applying to international universities offering full scholarships, enabling them to pursue their educational goals on a global scale.",
            "Developed a dynamic public website utilizing ExpressJS, MongoDB, and NodeJS, leveraging their powerful features to create a responsive and functional web application.",
            "Successfully implemented a contact page on the website, seamlessly integrating Nodemailer to facilitate efficient email communication between users and the mentorship team. This integration ensures a smooth and effective interaction process, enhancing user engagement and providing a reliable means of communication.",
        ]
    },
]