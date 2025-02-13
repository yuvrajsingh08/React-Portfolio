import React from 'react'
import { data } from "../assests/index";

const Skills = () => {
  return (
    <div className="px-24 py-20 mt-16" >
      <h1 className="text-4xl font-semibold mx-auto px-4  mb-24">Skills</h1>
      <div className="flex gap-40 justify-start flex-wrap px-28">
        {data.map((item) => (
          <div className="flex flex-col gap-4 items-center">
            <img
              src={item.image}
              alt=""
              srcset=""
              className="h-36 hover:scale-110 transition"
            />
            <h3 className="tracking-wider opacity-75 text-lg uppercase">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills
