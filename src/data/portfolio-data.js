import IMG1 from "../assets/portfolio1.jpg";
import IMG2 from "../assets/portfolio2.jpg";
import IMG3 from "../assets/portfolio3.jpg";

export const data = [
  {
    id: 1,
    image: IMG1,
    title: "Mars DAO",
    blurb:
      "This MVP frontend for Mars DAO showcases decentralized governance on the blockchain. Users can vote on proposals and allocate resources. A proof-of-concept using traditional data storage.",
    github: "https://github.com/wardu/Mars-DAO",
    demo: "https://mars-dao-wardu.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "LJT Carpentry",
    blurb:
      "A website for a local carpentry business. Built using React and styled with Sass. The site is fully responsive and features a contact form. Currently hosted on Vercel.",
    github: "https://github.com/wardu/ljt-carpentary",
    demo: "https://www.ljt-carpentry.co.uk/",
  },
  {
    id: 3,
    image: IMG3,
    title: "In Stock Warehouse App",
    blurb:
      "Developed collaboratively, this web app assists warehouse managers in inventory management using the Model-View-Controller (MVC) framework. Built using Node.js, Express, and MongoDB.",
    github: "https://github.com/wardu/inStock",
    demo: "#",
  },
];
