import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import * as IMAGES from "../../assets";
import * as ICONS from "../../components/icons";

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
      <section
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
                <Link className='flex items-center space-x-2 px-4 py-1 text-[15px]'>
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
      </section>
      <section className='main-content md:w-[82.5%] md:ml-auto'>
        <div className='top-navbar p-4 fixed w-full md:w-[82.5%] bg-[#F5F5F5] shadow-sm z-20'>
          <div className='flex items-center justify-between'>
            <h2 className='hidden text-gray-800 font-bold text-[20px] md:block'>My Portfolio</h2>
            <span className='text-2xl text-isDarkGray md:hidden' onClick={handleMenuBtn}>
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
                <span className="absolute w-1.5 h-1.5 rounded-full bg-red-600 top-2 right-2 content-none"></span>
              </span>
            </div>
          </div>
        </div>
        <main className='pt-20 p-4 md:flex md:gap-4'>
          <Outlet/>
          {/* <aside className="md:w-[72%]">
            <div className='stats md:grid md:grid-cols-3 md:gap-4'>
              <h2 className='mb-4 text-gray-800 font-bold text-[20px] md:hidden'>
                My Porfolio
              </h2>
              <StatCard
                total={51}
                label={"Total Channels"}
                bgColor="green-100"
              >
                <img src={IMAGES.CIRCLE_LAYER} alt='' />
              </StatCard>

              <StatCard total={125} label={"New Members"} bgColor="blue-300">
                <span className='text-blue-600'>
                  <ICONS.AiOutlineUserAdd />
                </span>
              </StatCard>

              <StatCard
                total={789}
                label={"All Impressions"}
                icon={IMAGES.CIRCLE_LAYER}
                bgColor="orange-100"
              >
                <span className='text-orange-600'>
                  <ICONS.AiOutlineRise />
                </span>
              </StatCard>
            </div>
            <div className='graph mt-4 bg-white p-4 rounded-[16px]'>
              <div className='flex justify-between items-center'>
                <h2 className="text-isDark font-semibold md:text-2xl z-10">Overview</h2>
                <ul className="flex space-x-2 z-10">
                  <li className="bg-isOrange text-white hover:bg-isOrange hover:text-white cursor-pointer p-[2px] px-[8px] rounded-full text-[8px] md:text-[12px] md:p-2 md:px-6">Robbin Hood</li>
                  <li className="bg-gray-100 text-gray-400 hover:bg-isOrange hover:text-white cursor-pointer p-[2px] px-[6px] rounded-full text-[8px] md:text-[12px] md:p-2 md:px-6">Amreitrade</li>
                  <li className="bg-gray-100 text-gray-400 hover:bg-isOrange hover:text-white cursor-pointer p-[2px] px-[6px] rounded-full text-[8px] md:text-[12px] md:p-2 md:px-6">Fidelity</li>
                  <li className="bg-gray-100 text-gray-400 hover:bg-isOrange hover:text-white cursor-pointer p-[2px] px-[6px] rounded-full text-[8px] md:text-[12px] md:p-2 md:px-6">Charles</li>
                </ul>
              </div>
              <img className='w-[100%] -mt-6' src={IMAGES.GRAPH} alt='' />
            </div>
            <div className='posts bg-white p-4 mt-6 rounded-[16px]'>
              <h2 className='mb-4 text-gray-800 font-bold text-[20px]'>
                Trending Posts
              </h2>
              <div className='flex overflow-x-auto w-full gap-3'>
                <PostCard
                  title={"8 Upcoming Influencer Marketing Trends and Benefits"}
                  discription={
                    "Marketing is evolving. It's changing from a one-way street to a two-way conversa…"
                  }
                  like={260}
                  comment={234}
                  share={123}
                />
                <PostCard
                  title={
                    "How Influencer Marketing Affects Consumer Buying Behavior"
                  }
                  discription={
                    "As influencer marketing continues to grow, consumers have been turning to their…"
                  }
                  like={260}
                  comment={234}
                  share={123}
                />
              </div>
            </div>
            <div className='members bg-white rounded-[16px] p-4 mt-4'>
              <h2 className='mb-4 text-gray-800 font-bold text-[20px]'>
                Potential Members
              </h2>
              <div className='flex overflow-x-auto space-x-4 w-full'>
                <MemberCard
                  image={IMAGES.AVATAR_2}
                  name={"Wanda Parker"}
                  username={"ashking1234"}
                  total={10.3}
                />
                <MemberCard
                  image={IMAGES.AVATAR_1}
                  name={"John Doe"}
                  username={"johndoe"}
                  total={25.3}
                />
                <MemberCard
                  image={IMAGES.AVATAR_3}
                  name={"Terry Brown"}
                  username={"terryb"}
                  total={9.3}
                />
                <MemberCard
                  image={IMAGES.AVATAR_2}
                  name={"Lucas Holmes"}
                  username={"lucasho"}
                  total={6.5}
                />
                <MemberCard
                  image={IMAGES.AVATAR_1}
                  name={"Janice Miller"}
                  username={"janicemill"}
                  total={8.6}
                />
              </div>
            </div>
          </aside>
          <aside>
            <div className="watchlist bg-white rounded-[16px] p-4 mt-4 md:mt-0">
                <div className="flex justify-between">
                    <h2 className="mb-4 text-gray-800 font-bold text-[20px]">Watchlist</h2>
                    <Link to="#" className="text-isOrange uppercase font-semibold text-[14px]">view all</Link>
                </div>
                <div className="flex justify-between bg-[#F6F6F6] rounded-[16px] p-4">
                    <div className="flex flex-col">
                        <div className="flex items-center space-x-8">
                            <h2 className="font-bold text-[20px]">AAPL</h2>
                            <span className="text-2xl text-green-600"><ICONS.AiOutlineArrowUp/></span>
                        </div>
                        <div className="mt-2">
                            <h2 className="font-medium text-[#A3A3A6] leading-5">$142.90 </h2>
                            <span className="text-green-600 text-sm">+0.47%</span>
                        </div>
                    </div>
                    <img src={IMAGES.LINE_GRAPH} alt="" />
                </div>
                
                <div className="flex justify-between bg-[#F6F6F6] rounded-[16px] p-4 mt-4">
                    <div className="flex flex-col">
                        <div className="flex items-center space-x-8">
                            <h2 className="font-bold text-[20px]">BPL</h2>
                            <span className="text-2xl text-red-600"><ICONS.AiOutlineArrowDown/></span>
                        </div>
                        <div className="mt-2">
                            <h2 className="font-medium text-[#A3A3A6] leading-5">$142.90 </h2>
                            <span className="text-red-600 text-sm">-0.78%</span>
                        </div>
                    </div>
                    <img src={IMAGES.LINE_GRAPH} alt="" />
                </div>
            </div>
            <div className="revenue bg-white rounded-[16px] p-4 mt-4">
                <h2 className="mb-4 text-isDark font-bold text-[20px]">Revenue</h2>
                <SingleRevenue total={4000} title={"Recently Added Pages"} iconBg="bg-blue-50" iconColor={"text-blue-500"} icon={<ICONS.FaFacebookF/>}/>
                <SingleRevenue total={2120} title={"Video Monetization"} icon={<ICONS.BsLinkedin/>} iconColor={"text-red-400"} iconBg="bg-red-50"/>
                <SingleRevenue total={1752} title={"Community Buildup"} iconBg="bg-blue-50" iconColor={"text-blue-500"} icon={<ICONS.BsLinkedin/>}/>
            </div>
            <div className="news bg-white rounded-[16px] mt-4 p-4">
                <h2 className="mb-4 text-gray-800 font-bold text-[20px]">Trending News</h2>
                <TredningNews avatar={IMAGES.AVATAR_1} title="Russia & Ukraine War" content="Marketing is evolving. It's chang..."/>

                <TredningNews avatar={IMAGES.AVATAR_3} title="Elon Musk bought Twitter" content="Twitter is the most useful social pl..."/>

                <TredningNews avatar={IMAGES.AVATAR_2} title="Fuel Crisis Everywhere" content="Due to covid situation in 2020 the..."/>

            </div>
          </aside> */}
        </main>
      </section>
    </main>
  );
};

export default Main;
