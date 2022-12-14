import React from "react";

const SingleRevenue = ({total, title, icon, iconBg, iconColor}) => {
  return (
    <div className='flex items-center justify-between border p-4 rounded-[16px] mb-3'>
      <div>
        <h2 className='text-isDark font-bold text-[18px]'>${total.toLocaleString()}</h2>
        <span className='text-isDarkGray text-sm'>{title}</span>
      </div>
      <span className={`${iconBg} p-4 rounded-full ${iconColor}`}>
        {icon}
      </span>
    </div>
  );
};

export default SingleRevenue;
