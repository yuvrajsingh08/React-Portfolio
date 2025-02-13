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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet consectetur adipisicing elit. Nam repreheit at rem unde sint deleniti est ipsa laborum labore ea fuga corporis autem, tempore facilis.",
    image: project1,
  };
  const Project02 = {
    id: "02",
    title: "Admin Dashboard",
    tags: ["Reactjs", "Redux", "JavaScript"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ipsum dolor sit amet consectetur adipisicing elit. Nam repreheit at rem unde sint deleniti est ipsa laborum labore ea fuga corporis autem, tempore facilis.",
    image: project2,
  };
  return (
    <div className="px-24 py-6 flex flex-col gap-6">
      <h1 className="text-4xl px-4 font-semibold">About me</h1>
      <div className="flex gap-4 px-4">
        <div className="bg-[#5222D0] w-[1rem] rounded-lg  py-8"> </div>
        <p className="pr-80 text-justify tracking-wide ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos nostrum
          alias reiciendis labore placeat soluta, dolorum, quibusdam unde aut
          veniam dolor ducimus nesciunt! Perferendis porro sapiente facere
          itaque consectetur. Tempora vitae quod cupiditate hic iste vero quo ut
          placeat, magnam velit quisquam omnis sit libero id nisi, deserunt
          reiciendis explicabo!
        </p>
      </div>
      <div className="mt-20 w-full">
        <h1 className="text-4xl px-4  py-20 font-semibold tracking-wider">
          Projects
        </h1>
        <div className="flex gap-12 justify-center px-4">
          <Card project={Project01} />
          <Card project={Project02} />
        </div>
      </div>
      <button className="bg-[#5222D0] text-white px-8  py-4 mt-16 rounded-xl mx-auto flex items-center gap-2 hover:scale-105 transition">
        SEE ALL PROJECTS
        <span>
          <GrLinkNext />
        </span>
      </button>
    </div>
  );
}

export default About
