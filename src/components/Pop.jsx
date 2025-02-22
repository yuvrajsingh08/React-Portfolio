import React from 'react'
import { IoMdClose } from "react-icons/io";
const Pop = ({ project, onClose }) => {
  return (
    <div className="fixed w-full h-full bg-slate-200 bg-opacity-30 top-0 left-0 right-0 bottom-0 z-10 flex justify-center items-center ">
      <div
        className="relative w-[95vh] h-[90vh] overflow-y-scroll hidebar bg-purple-200 px-4 py-4 rounded-lg z-20"
        onClick={(e) => e.stopPropagation()} // Prevents click propagation
      >
        <div
          className="fixed z-10 right-0 top-0 my-2 mx-2 font-bold scale-150"
          onClick={onClose} // Now works properly
        >
          <IoMdClose className="shadow-xl" />
        </div>
        <div className="w-full sm:h-[300px] h-[200px] overflow-hidden rounded-t-lg">
          <img
            src={project.image}
            alt={project.id}
            className="sm:h-[300px] h-[200px] w-full object-cover p-[2px] rounded-lg"
          />
        </div>
        <h1 className="font-semibold sm:text-2xl text-lg tracking-wide sm:pt-6 pt-2 py-2 sm:px-4 px-2">
          {project.title}
        </h1>
        <div className="flex gap-4 px-4 flex-wrap">
          {project.tags.map((item, index) => (
            <button
              key={index}
              className="bg-[#5222D0] text-white sm:px-5 px-2 py-2 rounded-md sm:text-sm text-xs font-light tracking-wide"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="px-4 pr-6 sm:text-base text-sm sm:tracking-wider py-4 text-justify">
          {project.description}
        </div>
        <div className="px-4 pb-2">
          <span>GitHub Link - </span>{" "}
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            {project.github}
          </a>
        </div>
        <div className="px-4 pb-2">
          <span>Live Link - </span>{" "}
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            {project.live}
          </a>
        </div>
      </div>
    </div>
  );
};


export default Pop