import React from 'react'
import { data } from "../assests/index";

const Skills = () => {
  return (
    <div className="xl:px-24 lg:px-20 md:px-16 sm:px-6 px-12 py-20 mt-16" >
      <h1 className="sm:text-4xl text-2xl font-semibold mx-auto md:px-4 mb-12 sm:mb-24">Skills</h1>
      <div className="flex xl:gap-40 lg:gap-28 md:gap-24 sm:gap-12 gap-4 px-4 sm:justify-start items-center justify-between flex-wrap xl:px-28">
        {data.map((item) => (
          <div className="flex flex-col gap-4 items-center ">
            <img
              src={item.image}
              alt=""
              srcset=""
              className="sm:h-36 h-24 hover:scale-110 transition"
            />
            <h3 className="tracking-wider opacity-75 sm:text-lg text-sm uppercase">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills
