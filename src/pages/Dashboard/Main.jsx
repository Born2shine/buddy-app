import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import * as ICONS from "../../components/icons";
import SideBar from "../../components/navs/SideBar";

const Main = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const handleMenuBtn = () => setSideNavOpen(!sideNavOpen);
  
  return (
    <main className='w-screen h-screen overflow-scroll bg-[#F5F5F5] md:flex'>
      {sideNavOpen && (
        <div
          className='overlay bg-black opacity-5 content-none absolute top-0 left-0 w-full  h-full z-20'
          onClick={handleMenuBtn}
        ></div>
      )}
      <SideBar sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} handleMenuBtn={handleMenuBtn}/>
      <section className='main-content md:w-[82.5%] md:ml-auto'>
        <div className='top-navbar p-4 fixed w-full md:w-[82.5%] bg-[#F5F5F5] shadow-sm z-20'>
          <div className='flex items-center justify-between'>
            <h2 className='hidden text-gray-800 font-bold text-[20px] md:block'>
              My Portfolio
            </h2>
            <span
              className='text-2xl text-isDarkGray md:hidden'
              onClick={handleMenuBtn}
            >
              <ICONS.MdMenu />
            </span>
            <div className='flex items-center gap-3'>
              <div className='relative'>
                <span className='absolute top-2.5 left-2 text-isDarkGray'>
                  <ICONS.BiSearch />
                </span>
                <input
                  type='text'
                  className='p-2 rounded-lg text-sm shadow-sm w-[250px] pl-7 focus:outline-none bg-white text-isDarkGray font-thin md:w-[300px]'
                  placeholder='Search'
                />
              </div>
              <span className='hidden md:block shadow-sm bg-white p-2 rounded-full cursor-pointer hover:bg-isOrange hover:text-white'>
                <ICONS.AiOutlinePlus />
              </span>
              <span className='text-isGra25 text-1xl shadow-sm bg-white p-2 rounded-full relative cursor-pointer hover:bg-isOrange hover:text-white'>
                <ICONS.FiBell />
                <span className='absolute w-1.5 h-1.5 rounded-full bg-red-600 top-2 right-2 content-none'></span>
              </span>
            </div>
          </div>
        </div>
        <main className='pt-20 p-4 md:flex md:gap-4'>
          <Outlet />
        </main>
      </section>
    </main>
  );
};

export default Main;
