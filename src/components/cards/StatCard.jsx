import React from "react";

const StatCard = ({total, label, bgColor, children}) => {
  return (
    <div className='flex justify-between p-6 rounded-[12px] bg-white mb-2 shadow-sm'>
      <div>
        <h1 className='text-2xl font-bold'>{total}</h1>
        <span className='text-isDarkGray text-[14px] text-semibold'>
          {label}
        </span>
      </div>
      <span className={`w-10 h-10 p-2 bg-${bgColor} rounded-full grid place-content-center`}>
        {children}
        {/* <img src={icon} /> */}
      </span>
    </div>
  );
};

export default StatCard;
