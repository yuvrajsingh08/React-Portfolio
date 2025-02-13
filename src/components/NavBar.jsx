import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex justify-between px-24 py-4 items-center bg-[#E1DDDB] text-lg font-medium tracking-wide fixed top-0 left-0 right-0">
      <div className="">
        <h1>Home</h1>
      </div>
      <div>
        <div className="flex gap-20 justify-between items-center">
          <h1>Project</h1>
          <button className="bg-[#5222D0] text-white px-4  py-2 rounded-xl">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar
