import React from 'react'

const Card = ({project}) => {
  return (
    <div className="w-[550px] h-[600px] rounded-lg bg-[#E1DDDB] shadow-2xl ">
      <div className="w-full h-[350px] overflow-hidden  rounded-t-lg">
        <img
          src={project.image}
          alt={project.id}
          className="h-[350px] w-full object-cover"
        />
      </div>
      <h1 className="font-semibold text-2xl tracking-wide pt-6 py-2 px-4">
        {project.title}
      </h1>
      <div className="flex gap-4 px-4 flex-wrap">
        {project.tags.map((item) => (
          <button className="bg-[#5222D0] text-white px-5  py-2 rounded-md text-sm font-light tracking-wide">
            {item}
          </button>
        ))}
      </div>
      <div className='px-4 pr-6 tracking-wider py-4 text-justify'>{project.description}</div>
    </div>
  );
}

export default Card
