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
      {/* <section
        className={`left-sidebar shadow-md bg-[#ffffff] fixed h-screen w-[55%] md:w-3/5 z-30 p-4 transition-all ease-in duration-200 ${
          sideNavOpen ? "-translate-x-0" : "-translate-x-full"
        } md:-translate-x-0 md:w-[17%]`}
      >
        <span className='absolute right-1 top-1 text-isOrange text-1xl md:hidden' onClick={handleMenuBtn}>
          <ICONS.MdClose />
        </span>
        <div className='logo py-2'>
            <Link to='/account/overview'> 
                <img className='w-24 mx-5' src={IMAGES.LOGO} alt='' />
            </Link>
          <nav className='mt-12'>
            <ul className='px-'>
              <li className='bg-white shadow-md relative text-isOrange'>
                <Link className='flex items-center space-x-2 px-4 py-1 text-[15px]'>
                  <span>
                    <ICONS.BiUser />
                  </span>
                  <span className='font-semibold'> My Portfolio</span>
                  <span className='w-1 h-7 -left-6 absolute content-none bg-isOrange rounded-r-lg'></span>
                </Link>
              </li>
              <li className='mt-6 text-gray-500 hover:bg-white hover:shadow-md hover:text-isOrange'>
                <Link className='flex items-center space-x-2 px-4 py-1 text-[15px]'>
                  <span>
                    <ICONS.FiUsers />
                  </span>
                  <span className='font-semibold'> My Group</span>
                </Link>
              </li>
              <li className='mt-6 text-gray-500 hover:bg-white hover:shadow-md hover:text-isOrange'>
                <Link to="/account/messages" className='flex items-center space-x-2 px-4 py-1 text-[15px]'>
                  <span>
                    <ICONS.FaRegEnvelope />
                  </span>
                  <span className='font-semibold'> Messages </span>
                </Link>
              </li>
              <li className='mt-6 text-gray-500 hover:bg-white hover:shadow-md hover:text-isOrange'>
                <Link className='flex items-center space-x-2 px-4 py-1 text-[15px]'>
                  <span>
                    <ICONS.AiOutlineRise />
                  </span>
                  <span className='font-semibold'>
                    Analytics
                  </span>
                </Link>
              </li>
              <li className='mt-6 text-gray-500 hover:bg-white hover:shadow-md hover:text-isOrange'>
                <Link className='flex items-center space-x-2 px-4 py-1 text-[15px]'>
                  <span>
                    <ICONS.BiDollarCircle />
                  </span>
                  <span className='font-semibold'> Pack </span>
                </Link>
              </li>
              <li className='mt-6 text-gray-500 hover:bg-white hover:shadow-md hover:text-isOrange'>
                <Link className='flex items-center space-x-2 px-4 py-1 text-[15px]'>
                  <span>
                    <ICONS.FiSettings />
                  </span>
                  <span className='font-semibold'>
                    {" "}
                    Settings{" "}
                  </span>
                </Link>
              </li>
            </ul>
            <div className='user-info absolute bottom-10 shadow-lg w-[80%] p-5 text-center rounded-lg'>
              <img
                className='w-10 h-10 rounded-full right-0 left-0 m-auto -mt-10'
                src={IMAGES.AVATAR_2}
                alt=''
              />
              <h4 className='font-semibold'>Theresa milly</h4>
              <span className='text-[14px] text-isDarkGray'>Influencer</span>
              <button className='flex items-center justify-center space-x-1 bg-[rgba(255,134,0,0.16)] p-1 text-isOrange rounded-lg w-full text-center mt-3 text-[14px]'>
                <span>
                  <ICONS.FaSignOutAlt />
                </span>
                <span className='font-semibold'>Logout</span>
              </button>
            </div>
          </nav>
        </div>
      </section> */}
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
