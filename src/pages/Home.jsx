import React from 'react'
import dev from '../assests/myself.png'

const Home = () => {
  return (
    <div className="flex justify-between px-24 items-center h-[calc(100vh-5rem)] hidebar">
      <div className="flex flex-col gap-6  w-[40%]">
        <h1 className="text-2xl font-serif tracking-wider">DEVELOPER</h1>
        <h1 className="text-6xl text-[#5222D0] font-semibold">Yuvraj Singh</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repreheit
          at rem unde sint deleniti est ipsa laborum labore ea fuga corporis
          autem modi, a dolorem quia dolore, tempore facilis.
        </p>
        <button className="bg-[#5222D0] w-[10rem] text-white px-2 text-lg mt-4  py-2 rounded-xl ">
          Contact Me
        </button>
      </div>
      <div>
        <img src={dev} alt="" srcset="" className="h-96 aspect-[4/3]" />
      </div>
    </div>
  );
}

export default Home
