import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "Three JS visualizations, a spider web style graph",
    image1:
      "https://res.cloudinary.com/de67hpfac/image/upload/v1739924886/1-1_llchsu.png",
    image2:
      "https://res.cloudinary.com/de67hpfac/image/upload/v1739932762/1-2_vsawlk.png",
    description:
      "In this project, I've ventured into the realm of captivating web visualizations using a range of cutting-edge technologies and libraries. The visualizations presented here showcase my proficiency and creativity in web development and interactive design.Spider Web Style Graph: This mesmerizing visualization takes inspiration from a spider's intricate web. Through the power of Three.js and WebGL, I've crafted a dynamic and responsive graph that weaves connections between nodes, creating an engaging and visually appealing web of data.",
    tools: [
      "Three.js",
      "WebGL",
      "Next.js",
      "React.js",
      "P5.js",
      "Tailwind CSS",
    ],
    liveLink: "https://learnify-pro.vercel.app",
    fullStackLink: "",
    frontEndLink: "https://editor.p5js.org/Mzr/full/Js7L1xwoH",
    backEndLink: "",
  },
  {
    id: 2,
    title: "Brain data visualization. Three.js, React, Node.js, Puppeteer",
    image1:
      "https://res.cloudinary.com/de67hpfac/image/upload/v1739932815/21_uzbqaq.png",
    image2:
      "https://res.cloudinary.com/de67hpfac/image/upload/v1739932888/23_yy9r6u.png",
    description:
      "Developed a platform to predict brain responses to impacts and overpressure, featuring interactive 3D visualizations, tools, and charts. Used Three.js and Chart.js for high-performance frontend data visualization and built dashboards for heavy datasets. On the backend, leveraged Node.js, Puppeteer, and Three.js on AWS Lambda to generate clinical images. Also created a mouthguard configurator, acting as a sensor for the next phase of the project.",
    tools: [
      "Node.js",
      "Three.js",
      "Puppeteer",
      "Chart.js",
      "React.js",
    ],
    liveLink: "https://learnify-pro.vercel.app",
    fullStackLink: "https://github.com/Ruslan845/learnify",
    frontEndLink: "",
    backEndLink: "",
  },
  {
    id: 3,
    title: "Learnify: An Online Learning Platform",
    image1:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1692032065/Personal%20Portfolio/learnify-1_gybje8.png",
    image2:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1692032065/Personal%20Portfolio/learnify-2_oneneu.png",
    description:
      "Experience a transformative online learning journey with Learnify, The cutting-edge Next.js app! Explore a diverse range of courses, engage with interactive lessons, and embrace a seamless user experience. With Learnify, acquiring new skills and knowledge has never been easier. Join us today and unlock the full potential of your learning endeavors.",
    tools: [
      "Next.js",
      "React.js",
      "MongoDB",
      "Stripe",
      "Prisma",
      "GCP",
      "Tailwind CSS",
      "AOS",
    ],
    liveLink: "https://learnify-pro.vercel.app",
    fullStackLink: "https://github.com/Ruslan845/learnify",
    frontEndLink: "",
    backEndLink: "",
  },
  {
    id: 4,
    title: "Proxima: Project Management Web Application",
    image1:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1679669817/Personal%20Portfolio/proxima-one_rzufpn.png",
    image2:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1679669817/Personal%20Portfolio/proxima-two_zrwmos.png",
    description:
      "Proxima is a project management application built using the MERN stack. The application allows users to create, update, and delete their own projects with ease. Proxima is designed with high-level security in mind, featuring strong JWT authentication and front-end route protection to ensure the safety and privacy of user data.",
    tools: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    liveLink: "https://proxima-application.netlify.app",
    fullStackLink: "",
    frontEndLink: "https://github.com/Ruslan845/proxima-client",
    backEndLink: "https://github.com/Ruslan845/proxima-server",
  },
  {
    id: 5,
    title: "Tech Alpha: Online Electronics Accessories Store",
    image1:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1675615229/Personal%20Portfolio/tech-alpha-1_lgzxvt.png",
    image2:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1675615227/Personal%20Portfolio/tech-alpha-2_tlagyh.png",
    description:
      "Tech Alpha is an online electronic accessories store that offers the latest and greatest electronic accessories. Our website features a clean, modern design, an easy-to-use interface and a robust shopping functionality built using Redux.js. All the product data has been served via JSON server and fetched using Axios.",
    tools: ["React.js", "Tailwind CSS", "Redux.js", "Redux Toolkit", "Axios"],
    liveLink: "https://tech-alpha.netlify.app",
    fullStackLink: "",
    frontEndLink: "https://github.com/Ruslan845/tech-alpha",
    backEndLink: "https://github.com/Ruslan845/tech-alpha-server",
  },
  {
    id: 6,
    title: "Foodverse: A Recipe Finder Web Application",
    image1:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1675615230/Personal%20Portfolio/foodverse-1_mkf88w.png",
    image2:
      "https://res.cloudinary.com/drgxflcsb/image/upload/v1675615230/Personal%20Portfolio/foodvarse-2_qekgne.png",
    description:
      "Foodverse is a recipe web application, where a user can search for a variety of recipes and find the ingredients and quantities needed to make each recipe item. Also, favorite recipe items can be saved in the browser's local storage. It is easy to find different recipes for vegetarians and meat eaters, as well as those who want to lose weight.",
    tools: ["React.js", "React Router", "Tailwind CSS"],
    liveLink: "https://food-verse.netlify.app/",
    fullStackLink: "",
    frontEndLink: "https://github.com/Ruslan845/foodverse",
    backEndLink: "",
  },
  {
    id: 7,
    title: "ills and deliverables",
    image1:
      "https://res.cloudinary.com/de67hpfac/image/upload/v1739932977/3_pgbf9p.png",
    image2:
      "https://res.cloudinary.com/de67hpfac/image/upload/v1739932977/3_pgbf9p.png",
    description:
      "The 3D avatar web app is an interactive application built using React.js that allows users to create and customize their own 3D avatars. The app provides a virtual environment where users can design and personalize their avatars' appearance, including facial features, hairstyles, clothing, and accessories.Upon launching the web app, users are presented with a visually appealing interface that showcases a 3D avatar model. The avatar can be rotated and viewed from different angles using intuitive mouse or touch controls. The app provides a wide range of customization options, allowing users to select from various hairstyles, facial features like eyes, nose, and mouth, and a diverse selection of clothing items and accessories.",
    tools: ["React.js", "React Router", "Tailwind CSS","JavaScript","3D modelling" ],
    liveLink: "https://fir-chat-97c62.web.app/avatarconfig",
    fullStackLink: "",
    frontEndLink: "",
    backEndLink: "",
  },
];

const Projects = () => {
  return (
    <div className='projects container mx-auto mt-40' id='projects'>
      <SectionTitle title={"My Projects"} />
      <div className='projects-wrapper mt-40 flex flex-col gap-10'>
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
