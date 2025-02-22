import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="flex justify-between sm:px-24 px-4 sm:py-4 p-4 items-center bg-[#e1dddb6c]  sm:text-lg text-xs font-medium tracking-wide fixed top-0 left-0 right-0">
      <div className=" sm:flex">
        <h1>Home</h1>
      </div>
      <div>
        <div className="flex sm:gap-20 gap-4 justify-between items-center ">
          <Link to='/projects'>Project</Link>
          <button  className="bg-[#5222D0] text-white sm:px-4 px-2  py-2 rounded-md sm:rounded-xl">
            Contact
          </button>
        </div>
      </div>
      {/* <div className='sm:hidden'>
        <GiHamburgerMenu />
      </div> */}
    </nav>
  );
}

export default NavBar
