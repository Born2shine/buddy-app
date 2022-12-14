import React from "react";
import * as ICONS from "../../components/icons";

const MemberCard = ({image, name, username, total }) => {
  return (
    <div className='border rounded-lg p-3 px-5 text-center'>
      <img
        className='w-10 h-10 rounded-full mx-auto'
        src={image}
        alt=''
      />
      <h2 className='mb-0 mt-2 leading-4 pt-1 text-gray-800 font-semibold text-[15px]'>
        {name}
      </h2>
      <span className='text-[14px] text-isGray'>@{username}</span>
      <div className='flex items-center justify-center space-x-2 mt-2'>
        <span className='text-green-600 text-2xl'>
          <ICONS.AiOutlineRise />
        </span>
        <h2 className='text-gray-800 font-bold text-[18px]'>{total}%</h2>
      </div>
    </div>
  );
};

export default MemberCard;
