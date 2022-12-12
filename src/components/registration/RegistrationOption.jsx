import React, { useState } from 'react'
import { Link } from "react-router-dom";
import * as IMAGES from "../../assets";
import * as ICONS from "../../components/icons";

const RegistrationOption = ({handleSignUpOption}) => {

  return (
    <div>
        <div className='py-6 px-5 md:hidden'>
            <Link to='/' className='logo'>
              <img className='w-24' src={IMAGES.LOGO} alt='' />
            </Link>
          </div>
          <div className='mx-5 md:mx-auto md:mt-16 md:w-4/6 pt-10'>
            <div className='border py-9 px-6 md:px-12 bg-white shadow-s md:shadow-lg rounded-md'>
              <h2 className='text-2xl font-semibold'>Register your account</h2>
              <div className='mt-10'>
                <Link className="flex items-center justify-center space-x-3 border p-2 rounded-md" onClick={handleSignUpOption}>
                    <span> <ICONS.IoMdMail/> </span>
                    <span className='text-[14px] text-isGray'>Sign up with email</span>
                </Link>
                <p className='text-center my-2 text-isGray text-[14px] relative'>
                <span className='absolute top-1/2 right-0 block w-[45%] h-[.5px] content-none bg-isGray35'></span>
                    or
                    <span className='absolute top-1/2 block w-[45%] h-[.5px] content-none bg-isGray35'></span>
                </p>
                <Link className="flex items-center justify-center space-x-3 border p-2 rounded-md">
                    <span> <img src={IMAGES.GOOGLE_ICON} alt="" /> </span>
                    <span className='text-[14px] text-isGray'>Sign up with Google</span>
                </Link>
              </div>
              
              <div className='mt-2'>
                <p className='text-[14px] mt-10 text-isGray'>
                  By clicking the button above, you agree to our
                  <Link to='#' className='text-isOrange'>
                    Terms of Service </Link> and <Link to='#' className='text-isOrange'>
                    Privacy Policy
                  </Link>
                  .
                </p>

                <p className='mt-10 text-[14px] text-isGray'>
                  Already have an account? <Link to='/' className='text-isOrange'>
                    Login
                  </Link>
                </p>
              </div>
            </div>
            <div className='hidden md:grid place-content-end mt-24'>
              <div className='flex gap-2 items-center text-white bg-isOrange p-4 w-fit text-[14px] rounded-full'>
                <span className=''>Get Help</span> <ICONS.FaRegComment />
              </div>
            </div>
          </div>
    </div>
  )
}

export default RegistrationOption