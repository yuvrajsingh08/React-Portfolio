import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <div>
      <div className=" text-white flex justify-center items-center gap-12 py-12 mt-12">
        <div className="bg-[#5222D0] p-2  rounded-full text-white text-3xl hover:scale-105 transition cursor-pointer ">
          <FaGithub />
        </div>
        <div className="bg-[#5222D0] p-2  rounded-full text-white text-3xl hover:scale-105 transition cursor-pointer">
          <SiGmail />
        </div>
        <div className="bg-[#5222D0] p-2  rounded-full text-white text-3xl hover:scale-105 transition cursor-pointer">
          <FaLinkedinIn />
        </div>
        <div className="bg-[#5222D0] p-2  rounded-full text-white text-3xl hover:scale-105 transition cursor-pointer">
          <FaInstagram />
        </div>
      </div>
      <div className='flex justify-center gap-24 '>
        <h1>Projects</h1>
        <h1>Contact</h1>
      </div>
      <h1 className='py-12 text-xl tracking-widest text-center'>Yuvraj Singh</h1>
    </div>
  );
}

export default Footer
