import React from 'react'
import * as IMAGES from "../../assets";
import * as ICONS from "../../components/icons";

import StatCard from "./../../components/cards/StatCard";
import { FaUnlockAlt } from "react-icons/fa";
import MemberCard from "../../components/cards/MemberCard";
import PostCard from "../../components/cards/PostCard";
import SingleRevenue from "../../components/SingleRevenue";
import TredningNews from "../../components/TredningNews";
import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <>
        <aside className="md:w-[72%]">
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
          </aside>
    </>
  )
}

export default Overview