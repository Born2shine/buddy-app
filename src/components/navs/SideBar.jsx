import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as IMAGES from "../../assets";
import * as ICONS from "../../components/icons";
import { PATH } from './../../constants/Routes';

const SideBar = ({sideNavOpen, handleMenuBtn}) => {
    const location = useLocation()

  return (
    <section
      className={`left-sidebar shadow-md bg-[#ffffff] fixed h-screen w-[55%] md:w-3/5 z-30 p-4 transition-all ease-in duration-200 ${
        sideNavOpen ? "-translate-x-0" : "-translate-x-full"
      } md:-translate-x-0 md:w-[17%]`}
    >
      <span
        className='absolute right-1 top-1 text-isOrange text-1xl md:hidden'
        onClick={handleMenuBtn}
      >
        <ICONS.MdClose />
      </span>
      <div className='logo py-2'>
        <Link to='/account/overview'>
          <img className='w-24 mx-5' src={IMAGES.LOGO} alt='' />
        </Link>
        <nav className='mt-12'>
          <ul className='px-'>
            <li className={`${location.pathname === PATH.DASHBOARD ? 'bg-white shadow-md text-isOrange' : ''} relative text-isGray`}>
              <Link to="/account/overview" className='flex items-center space-x-2 px-4 py-1 text-[15px]'>
                <span>
                  <ICONS.BiUser />
                </span>
                <span className='font-semibold'> My Portfolio</span>
                {
                    location.pathname === PATH.DASHBOARD && 
                <span className='w-1 h-7 -left-6 absolute content-none bg-isOrange rounded-r-lg'></span>
                }
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
            <li className={`${location.pathname === PATH.MESSAGES ? 'bg-white shadow-md text-isOrange' : ''} relative text-isGray mt-6 hover:bg-white hover:shadow-md hover:text-isOrange`}>
              <Link
                to='/account/messages'
                className='flex items-center space-x-2 px-4 py-1 text-[15px]'
              >
                <span>
                  <ICONS.FaRegEnvelope />
                </span>
                <span className='font-semibold'> Messages </span>
                {
                location.pathname === PATH.MESSAGES && 
                <span className='w-1 h-7 -left-6 absolute content-none bg-isOrange rounded-r-lg'></span>
                }
              </Link>
            </li>
            <li className='mt-6 text-gray-500 hover:bg-white hover:shadow-md hover:text-isOrange'>
              <Link className='flex items-center space-x-2 px-4 py-1 text-[15px]'>
                <span>
                  <ICONS.AiOutlineRise />
                </span>
                <span className='font-semibold'>Analytics</span>
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
                <span className='font-semibold'> Settings </span>
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
    </section>
  );
};

export default SideBar;
