import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <div className="py-12 mb-10">
      <div className=" text-white flex justify-center items-center sm:gap-12 gap-4 py-12">
        <div className="bg-[#5222D0] sm:p-2  rounded-full text-white sm:text-3xl text-xl p-1 hover:scale-105 transition cursor-pointer ">
          <a href="https://github.com/yuvrajsingh08">
            <FaGithub />
          </a>
        </div>
        <div className="bg-[#5222D0] sm:p-2  rounded-full text-white sm:text-3xl text-xl p-1 hover:scale-105 transition cursor-pointer">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=uvsingh@gmail.com">
            <SiGmail />
          </a>
        </div>
        <div className="bg-[#5222D0] sm:p-2  rounded-full text-white sm:text-3xl text-xl p-1 hover:scale-105 transition cursor-pointer">
          <a href="https://www.linkedin.com/in/yuvraj-singh-51b649284/">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="bg-[#5222D0] sm:p-2  rounded-full text-white sm:text-3xl text-xl p-1 hover:scale-105 transition cursor-pointer">
          <FaInstagram />
        </div>
      </div>
      <div className="flex justify-center sm:gap-24 gap-12 ">
        <h1>Projects</h1>
        <h1>Contact</h1>
      </div>
      <div className="w-full h-[1px] bg-[#6c656586] my-8"></div>
      <h1 className=" text-xl tracking-widest text-center">Yuvraj Singh</h1>
    </div>
  );
}

export default Footer
