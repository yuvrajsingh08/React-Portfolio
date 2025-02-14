import React from 'react'

const Card = ({project}) => {
  return (
    <div className="sm:w-[550px] sm:h-[600px] rounded-lg bg-[#E1DDDB] shadow-2xl ">
      <div className="w-full sm:h-[350px] h-[200px] overflow-hidden  rounded-t-lg">
        <img
          src={project.image}
          alt={project.id}
          className="sm:h-[350px] h-[200px] w-full object-cover"
        />
      </div>
      <h1 className="font-semibold sm:text-2xl text-lg tracking-wide sm:pt-6 pt-2 py-2 sm:px-4 px-2">
        {project.title}
      </h1>
      <div className="flex gap-4 px-4 flex-wrap">
        {project.tags.map((item) => (
          <button className="bg-[#5222D0] text-white sm:px-5 px-2  py-2 rounded-md sm:text-sm text-xs font-light tracking-wide">
            {item}
          </button>
        ))}
      </div>
      <div className="px-4 pr-6 sm:text-base text-sm sm:tracking-wider py-4 text-justify">
        {project.description}
      </div>
    </div>
  );
}

export default Card
