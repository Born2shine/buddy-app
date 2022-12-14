import React from "react";

const TredningNews = ({avatar, title, content}) => {
  return (
    <div className='flex items-center space-x-2 border p-4 rounded-[16px] mb-3'>
      <img className='w-12 h-12 rounded-[8px]' src={avatar} alt='' />
      <div>
        <h3 className='text-[15px] leading-[10px] pb-0 mb-0'>
         {title}
        </h3>
        <span className='text-isDarkGray text-[12px] font-normal'>
          {content}
        </span>
      </div>
    </div>
  );
};

export default TredningNews;
