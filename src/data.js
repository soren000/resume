export const courses = [
    {
        name: "React",
        hours: 39,
        link: "https://www.udemy.com/react-2nd-edition/",
        description: "Learning the fundamentals of React, Redux, Context API, and Hooks"
    },
    {
        name: "Express",
        hours: 12,
        link: "https://www.udemy.com/just-express-with-a-bunch-of-node-and-http-in-detail/",
        description: "Thorough rundown of Express, background on web servers and networking, as well as some info on Mongoose and Passport"
    },
    {
        name: "NodeJS",
        hours: 34,
        link: "https://www.udemy.com/the-complete-nodejs-developer-course-2",
        description: "General rundown on Node, along with all the major frameworks, and some minor ones too"
    },
]

export const projects = [
    {
        name: "My Resume",
        stack: "React, react-pdf",
        githubLink: "",
        description: [
            "While the react-pdf is still under development, I really enjoy the customizability in creating a resume how I want it, and I can use React and CSS, which I'm more comfortable with than something like Latex."
        ]
    },
    {
        name: "Idle Architect",
        stack: "React",
        githubLink: "",
        description: [
            "An in-browser incremental/idle game based around building a team of architects and constructing great buildings. Work in progress."
        ]
    },
    {
        name: "Password Generator",
        stack: "React",
        githubLink: "",
        description: [
            "A random string/password generator, with customizability options."
        ]
    },
];

export const sideSectionCategories = [
    {
        title: "INFO",
        items: [
            { description: "EMAIL", value: "me@soren.dev", link: false },
            { description: "NATIONALITY", value: "United States", link: false }
        ]
    },
    {
        title: "LINKS",
        items: [
            { description: false, value: "github.com/soren000", link: "https://github.com/soren000" },
            { description: false, value: "soren.dev", link: "https://soren.dev" }
        ]
    },
    {
        title: "SKILLS",
        items: [
            { description: false, value: "ES6+ JS (strong)", link: false },
            { description: false, value: "SCSS/CSS (mid/strong)", link: false },
            { description: false, value: "MERN Stack", link: false },
            { description: false, value: "Mongo (weak/mid)", link: false },
            { description: false, value: "Express (mid)", link: false },
            { description: false, value: "React (mid)", link: false },
            { description: false, value: "Node (mid/strong)", link: false },
            { description: false, value: "Git/GitHub (mid)", link: false },
            { description: false, value: "Firebase (mid)", link: false },
            { description: false, value: "UI/UX Design (mid)", link: false },
        ]
    },
    {
        title: "HOBBIES",
        items: [
            { description: false, value: "Film, Weightlifting, Reading Wikipedia, Gaming", link: false }
        ]
    }
]