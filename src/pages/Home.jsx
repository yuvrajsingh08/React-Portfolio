import React from 'react'
import dev from '../assests/myself.png'
import Skills from '../components/Skills';
import About from '../components/About';

const Home = () => {
  return (
    <div className='md:mt-16 sm:mt-16'>
      <div className="flex md:flex-row sm:gap-2 gap-12  flex-col-reverse justify-between items-center md:px-24 py-8  sm:py-16 w-full md:h-[100vh] hidebar">
        <div className="flex flex-col sm:text-start items-center sm:items-start
         text-center sm:gap-6 gap-4 w-full px-4 sm:w-full md:w-[60%] lg:w-[40%]">
          <h1 className="sm:text-2xl text-base font-serif tracking-wider">DEVELOPER</h1>
          <h1 className="sm:text-6xl text-4xl tracking-wide text-[#5222D0] font-semibold">
            Yuvraj Singh
          </h1>
          <p className="sm:text-justify text-center text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            repreheit at rem unde sint deleniti est ipsa laborum labore ea fuga
            corporis autem modi, a dolorem quia dolore, tempore facilis.
          </p>
          <button className="bg-[#5222D0] w-[10rem] text-white px-2 text-lg mt-4  py-2 rounded-xl ">
            Contact Me
          </button>
        </div>
        <div>
          <img src={dev} alt="" srcset="" className="sm:h-96 h-64  aspect-[4/3] " />
        </div>
      </div>
      <About />
      <Skills />
    </div>
  );
}

export default Home
