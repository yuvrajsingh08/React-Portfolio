import React from 'react'
import project1 from '../assests/project/project01.png'
import project2 from "../assests/project/project02.png";
import Card from './Card';
import { GrLinkNext } from "react-icons/gr";

const About = () => {
  const Project01 = {
    id: "01",
    title: "Admin Dashboard",
    tags: ["Reactjs", "Redux", "JavaScript"],
    description:
      "The Admin Dashboard is a web application built using React.js that provides administrators with an interactive and visually appealing interface to manage data efficiently. The dashboard includes various widgets, charts, and tables for data visualization and management. It is designed with a responsive and modern UI for seamless user experience.",
    image: project1,
    github: "https://github.com/yuvrajsingh08/ADMIN-DASHBOARD",
    live: "https://admin-dashboard-flax-two.vercel.app",
  };
  const Project02 = {
    id: "02",
    title: "GOSHOP - An eCommerce Website",
    tags: ["Reactjs", "Redux", "NodeJs", "ExpessJs"],
    description:
      "This is a dynamic and responsive E-commerce website that allows users to explore and purchase a variety of products. The website includes functionalities such as user authentication, product browsing, shopping cart management, and order processing.",
    image: project2,
    github: "https://github.com/yuvrajsingh08/Ecommerce-APP",
    live: "https://ecommerce-app-frontend-er1w.onrender.com/",
  };
  return (
    <div className="md:px-24 sm:px-2 px-8 py-12 flex flex-col gap-6">
      <h1 className="sm:text-4xl text-2xl px-4 font-semibold">About me</h1>
      <div className="flex gap-4 px-4">
        <div className="bg-[#5222D0] sm:w-[1rem] w-[2rem] rounded-lg  py-8"> </div>
        <p className="xl:pr-80 lg:pr-40 sm:text-base text-sm text-justify tracking-wide ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum
          alias reiciendis labore placeat soluta, dolorum, quibusdam unde aut
          veniam dolor ducimus nesciunt! Perferendis porro sapiente facere
          itaque consectetur. Tempora vitae quod cupiditate hic iste vero quo ut
          placeat, magnam velit quisquam omnis sit libero id nisi, deserunt
          reiciendis explicabo!
        </p>
      </div>
      <div className="sm:mt-20 mt-12 w-full">
        <h1 className="sm:text-4xl text-2xl px-4  sm:py-20 py-8 font-semibold tracking-wider">
          Projects
        </h1>
        <div className="flex gap-12 sm:flex-row flex-col justify-center items-center flex-wrap px-4">
          <Card project={Project01} />
          <Card project={Project02} />
        </div>
      </div>
      <button className="bg-[#5222D0] text-white px-8  text-sm sm:text-base py-4 mt-16 rounded-xl mx-auto flex items-center gap-2 hover:scale-105 transition">
        SEE ALL PROJECTS
        <span>
          <GrLinkNext />
        </span>
      </button>
    </div>
  );
}

export default About
