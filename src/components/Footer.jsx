import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <div className="py-12 mb-40">
      <div className=" text-white flex justify-center items-center sm:gap-12 gap-4 py-12">
        <div className="bg-[#5222D0] sm:p-2  rounded-full text-white sm:text-3xl text-xl p-1 hover:scale-105 transition cursor-pointer ">
          <FaGithub />
        </div>
        <div className="bg-[#5222D0] sm:p-2  rounded-full text-white sm:text-3xl text-xl p-1 hover:scale-105 transition cursor-pointer">
          <SiGmail />
        </div>
        <div className="bg-[#5222D0] sm:p-2  rounded-full text-white sm:text-3xl text-xl p-1 hover:scale-105 transition cursor-pointer">
          <FaLinkedinIn />
        </div>
        <div className="bg-[#5222D0] sm:p-2  rounded-full text-white sm:text-3xl text-xl p-1 hover:scale-105 transition cursor-pointer">
          <FaInstagram />
        </div>
      </div>
      <div className="flex justify-center sm:gap-24 gap-12 ">
        <h1>Projects</h1>
        <h1>Contact</h1>
      </div>
      <h1 className="py-12 text-xl tracking-widest text-center">
        Yuvraj Singh
      </h1>
    </div>
  );
}

export default Footer
