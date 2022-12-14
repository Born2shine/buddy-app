import React from "react";
import * as ICONS from "../../components/icons";

const PostCard = ({title, discription, like, comment, share}) => {
  return (
    <div className='post border p-4 rounded-md'>
      <h3 className='font-bold text-1xl leading-5 text-[#3B3B45] cursor-pointer'>
        {title}
      </h3>
      <p className='text-isDarkGray text-[14px] mt-2 leading-5'>
        {discription}
      </p>
      <div className='flex items-center justify-between space-x-5 mt-6 md:w-1/2'>
        <span className='flex items-center gap-1 bg-isGray30 px-4 p-1 rounded-full md:px-2  md:text-sm cursor-pointer'>
          <span className='text-red-600'>
            <ICONS.AiTwotoneHeart />
          </span>
          <span className='text-[15px] font-semibold md:text-sm'>{like}</span>
        </span>

        <span className='flex items-center gap-1 bg-isGray30 px-4 p-1 rounded-full md:px-2  md:text-sm cursor-pointer'>
          <span className='text-isOrange'>
            <ICONS.MdMessage />
          </span>
          <span className='text-[15px] font-semibold md:text-sm'>{comment}</span>
        </span>

        <span className='flex items-center gap-1 bg-isGray30 px-4 p-1 rounded-full md:px-2 md:text-sm cursor-pointer'>
          <span className='text-red-600'>
            <ICONS.TiArrowForward />
          </span>
          <span className='text-[15px] font-semibold md:text-sm'>{share}</span>
        </span>
      </div>
    </div>
  );
};

export default PostCard;
