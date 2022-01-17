import TypingAnim from "../components/myProfile/TypingAnim";
import SkillCard from "../components/myProfile/SkillCard";
import Contact from "../components/myProfile/Contact";
import About from "../components/myProfile/About";

export const TextData = [
    {
        id: 'home',
        text: "Hi,/I'm Vishnu,/web developer",
        tag: 1,
        p: "Front End Developer / Back End Developer",
        side: <TypingAnim />,
        home: true
    },
    {
        id: 'toabout',
        text: "My self",
        tag: 2,
        p: "My passion for computers begins with video games. When I received my first computer at the age of 8 since then I knew that I wanted to work on computers for the rest of my life. Using the computer all these years make me a natural problem solver.",
        p2: "My IT career at the academic level begins with learning Hardware and Networking. Then my career switches to the world of programming. This machine never ceases to amaze me.",
        side: <About />

    },
    {
        id: 'toskill',
        text: "Skills &/Experince",
        tag: 2,
        p: `As a passionate Developer and self-thought programmer, programming has never been "just a job" for me, it's offered an engaging challenge to continually learn and improve my skills in creating high-quality web applications. What has started with a simple "Hello World" has become a full-fledged passion that only gets more exciting as the years go by.`,
        p2: `I usually tend to be most familiar with the languages that I am using most. I have experience in HTML, CSS, JavaScript, Python, Django, Nodejs, and Reactjs..`,
        side: <SkillCard />
    },
    {
        id: 'towork',
        text: "work profilo",
        tag: 2
    },
    {
        id: 'contact',
        text: "Contact me",
        tag: 2,
        p: " I'm interested in freelance opportunities  especially ambitious or large projects. However, if you have other request or question, don't hesitate to use the form.",
        div: <Contact />
    },
    {
        id: 'myblog',
        text: "COMMING SOON..",
        tag: 1,
    },

]