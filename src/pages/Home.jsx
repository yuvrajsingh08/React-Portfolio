import React, { useEffect } from 'react'
import dev from '../assests/myself.png'
import Skills from '../components/Skills';
import About from '../components/About';
import Education from '../components/Education';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";

const Home = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enables smooth scrolling
    });
  }, [pathname]);
  return (
    <div className="md:mt-16 sm:mt-16">
      <div className="flex md:flex-row sm:gap-2 gap-12  flex-col-reverse justify-between items-center md:px-24 py-8  sm:py-16 w-full md:h-[100vh] hidebar">
        <div
          className="flex flex-col sm:text-start items-center sm:items-start
         text-center sm:gap-6 gap-4 w-full px-4 sm:w-full md:w-[60%] lg:w-[40%]"
        >
          <h1 className="sm:text-2xl text-base font-serif tracking-wider">
            DEVELOPER
          </h1>
          <motion.h1
            transition={{ duration: 0.4 }}
            drag
            dragSnapToOrigin={true}
            dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
            dragElastic={0.5}
            whileHover={{ scale: 1.01 }}
            className="sm:text-6xl text-4xl tracking-wide text-[#5222D0] font-semibold cursor-grab active:cursor-grabbing">
                 Yuvraj Singh
          </motion.h1>
          <p className="sm:text-justify text-center text-sm">
            A passionate and aspiring web developer currently pursuing my B.Tech
            in Information Technology at Bundelkhand Institute of Engineering
            and Technology in Jhansi , Uttar Pradesh.
          </p>
          <button className="bg-[#5222D0] w-[10rem] text-white px-2 text-lg mt-4  py-2 rounded-xl ">
            Contact Me
          </button>
        </div>
        <div>
          <motion.img
            src={dev}
            alt=""
            srcset=""
            className="sm:h-96 h-64  aspect-[4/3] cursor-grabbing"
            transition={{ duration: 0.4 }}
            drag
            dragSnapToOrigin={true}
            dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
            dragElastic={0.5}
            whileHover={{ scale: 1.01 }}
          />
        </div>
      </div>
      <About />
      <Education/>
      <Skills />
    </div>
  );
}

export default Home
