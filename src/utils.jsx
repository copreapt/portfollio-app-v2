import { BsFacebook, BsInstagram, BsGithub, BsLinkedin, BsStripe} from "react-icons/bs";
import { AiFillHtml5, AiOutlineFieldTime } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoFirebase,
} from "react-icons/bi";
import {IoLogoJavascript} from 'react-icons/io'
import { SiAuth0, SiNetlify } from "react-icons/si";



export const links = [
  {
    id: 1,
    name: "About",
    url: "/about",
  },
  {
    id: 2,
    name: "Projects",
    url: "/projects",
  },
  {
    id: 3,
    name: "Contact",
    url: "/contact",
  },
  {
    id: 4,
    name: "Home",
    url: "/",
  },
];


export const socials = [
  {
    id: 1,
    url: "https://www.facebook.com/profile.php?id=100011434323497",
    icon: <BsFacebook />,
  },
  {
    id: 2,
    url: "https://www.instagram.com/catalinopreapt/",
    icon: <BsInstagram />,
  },
  {
    id: 3,
    url: "https://github.com/copreapt",
    icon: <BsGithub />,
  },
  // {
  //   id: 4,
  //   url: "",
  //   icon: <BsLinkedin />,
  // },
];

export const techStack = [
  {
    id: 1,
    icon: <AiFillHtml5 />,
  },
  {
    id: 2,
    icon: <BiLogoCss3 />,
  },
  {
    id: 3,
    icon: <IoLogoJavascript />,
  },
  {
    id: 4,
    icon: <BiLogoTailwindCss />,
  },
  {
    id: 5,
    icon: <BiLogoReact />,
  },
  {
    id: 6,
    icon: <BiLogoFirebase />,
  },
  {
    id: 7,
    icon: <SiNetlify />,
  },
  {
    id: 8,
    icon: <SiAuth0 />,
  },
  {
    id: 9,
    icon: <BsStripe />,
  },
];

export const profileLinks = [
  // {
  //   id: 1,
  //   url: "",
  //   icon: <BsLinkedin />,
  // },
  {
    id: 2,
    url: "https://github.com/copreapt",
    icon: <BsGithub />,
  },
  {
    id: 3,
    url: "https://wakatime.com/@copreapt",
    icon: <AiOutlineFieldTime />,
  },
];


export const projects = [
  {
    id: 1,
    img: "/assets/mess-app.png",
    doneUsing: "React Js + Firebase",
    gitHub: "https://github.com/copreapt/messenger-app",
    liveDemo: "https://cata-react-mess-app.netlify.app/",
    description:
      "Messenger App - It was a bit challenging to figure out how to store and structure the data on my database (Firebase) so two users would get to see each other's messages. But after days of research I think i nailed it. I'm really proud of this project since it was done with pure research, without following a course or anything similar. The project is still being developed and worked on. ",
    version: "Desktop Version",
  },
  {
    id: 2,
    img: "/assets/aki-app.png",
    doneUsing: "React Js + Firebase",
    gitHub: "https://github.com/copreapt/akinator-app",
    liveDemo: "https://catalin-akinator-app.netlify.app/",
    description:
      "Akinator App - Depending on what answers you select along the way, it will give you back 1 out of 3 presidents for each country.",
    version: "Desktop Version",
  },
  {
    id: 3,
    img: "/assets/nautica-app.png",
    doneUsing: "React Js",
    gitHub: "https://github.com/copreapt/nautica-replica-app",
    liveDemo: "https://nautica-app.netlify.app/",
    description:
      "Nautica Ereso App - I like their website, and tried to make a copy of the homepage, product and contact page.",
    version: "Desktop and Mobile Version",
  },
  {
    id: 4,
    img: "/assets/store.png",
    doneUsing: "React Js + Netlify Functions + Auth0 + Stripe",
    gitHub: "https://github.com/copreapt/react-comfy",
    liveDemo: "https://react-comfy-cop.netlify.app/",
    description:
      "Comfy Store - Was done following the instructions from an ongoing React course by John Smilga. The huge takeaway from this project was the Netlify Serverless Functions and Stripe payment integration.",
    version: "Desktop and Mobile Version",
  },
  {
    id: 5,
    img: "/assets/jobster.png",
    doneUsing: "React Js + Course Server + Course API + Redux",
    gitHub: "https://github.com/copreapt/my-jobster-app",
    liveDemo: "https://catalin-jobster-app.netlify.app/landing",
    description:
      "Jobster - Was done following the instructions from an ongoing React course by John Smilga. The project is mainly done with the John's server and own API. The project was done using the Redux Toolkit.",
    version: "Desktop and Mobile Version",
  },
];