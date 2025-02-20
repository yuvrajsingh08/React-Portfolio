import React from 'react'
import Card from '../components/Card';
import project1 from "../assests/project/project01.png";
import project2 from "../assests/project/project02.png";
import project3 from "../assests/project/project03.png";

const Projects = () => {
    const Project01 = {
      id: "01",
      title: "Admin Dashboard",
      tags: ["Reactjs", "Redux", "JavaScript"],
      description:
        "The Admin Dashboard is a web application built using React.js that provides administrators with an interactive and visually appealing interface to manage data efficiently. The dashboard includes various widgets, charts, and tables for data visualization and management. It is designed with a responsive and modern UI for seamless user experience.",
      image: project1,
    };
    const Project02 = {
      id: "02",
      title: "GOSHOP - An eCommerce Website",
      tags: ["Reactjs", "Redux", "NodeJs", "ExpessJs"],
      description:
        "This is a dynamic and responsive E-commerce website that allows users to explore and purchase a variety of products. The website includes functionalities such as user authentication, product browsing, shopping cart management, and order processing.",
      image: project2,
    };
    const Project03 = {
      id: "03",
      title: "Real-Time Chat Application",
      tags: ["Reactjs", "NodeJS", "ExpressJs"],
      description:
        "This is a full-stack real-time chat application built using the MERN stack (MongoDB, Express, React, Node.js) and Socket.io. The application allows users to sign in, chat in real-time with other users, and send images and videos.",
      image: project3,
    };
  return (
    <div className=" mt-20 flex gap-12 sm:flex-row flex-col justify-center items-center flex-wrap px-4">
      <Card project={Project01} />
      <Card project={Project02} />
      <Card project={Project03} />
    </div>
  );
}

export default Projects