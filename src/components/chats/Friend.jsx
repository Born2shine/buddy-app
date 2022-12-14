import React from "react";
import * as ICONS from "../../components/icons"

const Friend = ({ avatar, name, message, time, counter, isSent, active }) => {
  return (
    <div className={`flex justify-between p-2 mb-4 cursor-pointer ${active && 'bg-white shadow-lg rounded-lg'} hover:bg-white hover:shadow-lg hover:rounded-lg`}>
      <div className='flex items-center space-x-2'>
        <img className='w-12 h-12 rounded-full' src={avatar} alt='' />
        <div>
          <h4 className='leading-3 text-isOrange'>{name}</h4>
          <span className='text-[11px] text-isGray font-light'>{message}</span>
        </div>
      </div>
      <div className='flex flex-col space-y-1 items-end'>
        <span className='text-xs text-isGray font-light'> {time}</span>

        {counter > 0 && (
          <span className='bg-isOrange grid place-content-center w-4 h-4 rounded-full text-[10px] text-white font-thin'>
            {counter}
          </span>
        )}

        {isSent && (
          <span className='bg-[#d4e0f5] grid place-content-center w-4 h-4 rounded-full text-[16px] text-isOrange font-thin'>
            <ICONS.BiCheck />
          </span>
        )}
      </div>
    </div>
  );
};

export default Friend;
