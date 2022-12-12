import React from "react";
import { Link } from "react-router-dom";
import * as IMAGES from "../../assets";
import * as ICONS from "../../components/icons";

const EmailRegistration = () => {
  return (
    <div>
      <div className='py-6 px-5 md:hidden'>
        <Link to='/' className='logo'>
          <img className='w-24' src={IMAGES.LOGO} alt='' />
        </Link>
      </div>
      <div className='mx-5 md:mx-auto md:mt-12 md:w-4/6'>
        <div className='border py-9 px-6 md:px-12 bg-white shadow-s md:shadow-lg rounded-md'>
          <h2 className='text-2xl font-semibold'>Register your account</h2>
          <p className='text-[14px] text-isGray py-2'>
            Proceed to create account and setup your organization
          </p>
          <div className='mt-2'>
            <div className='flex gap-4'>
              <div>
                <label
                  htmlFor='first-name'
                  className='text-isGray mb-[2px] block'
                >
                  First Name
                </label>
                <div className='relative'>
                  <span className='absolute top-3 left-2 text-isGray25'>
                    <ICONS.FaUser />
                  </span>
                  <input
                    type='text'
                    placeholder='First Name'
                    className={`border focus:border-isOrange focus:outline-none p-2 px-8 rounded w-full text-[14px]`}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='last-name'
                  className='text-isGray mb-[2px] block'
                >
                  Last Name
                </label>
                <div className='relative'>
                  <span className='absolute top-3 left-2 text-isGray25'>
                    <ICONS.FaUser />
                  </span>
                  <input
                    type='text'
                    placeholder='Last Name'
                    className='border focus:outline-none focus:border-isOrange p-2 px-8 rounded w-full text-[14px]'
                  />
                </div>
              </div>
            </div>
            <div className='mt-2'>
              <label htmlFor='last-name' className='text-isGray mb-[2px] block'>
                Email
              </label>
              <div className='relative'>
                <span className='absolute top-3 left-2 text-isGray25'>
                  <ICONS.IoMdMail />
                </span>
                <input
                  type='email'
                  placeholder='Work Email'
                  className='border focus:outline-none focus:border-isOrange p-2 px-8 rounded w-full text-[14px]'
                />
              </div>
            </div>
            <div className='mt-3'>
              <label htmlFor='last-name' className='text-isGray mb-[2px] block'>
                Password
              </label>
              <div className='relative'>
                <span className='absolute top-3 left-2 text-isGray25'>
                  <ICONS.FaUnlockAlt />
                </span>
                <input
                  type='password'
                  placeholder='Password'
                  className='border focus:outline-none focus:border-isOrange p-2 px-8 rounded w-full text-[14px]'
                />
                <span className='absolute right-3 top-3 text-isGray25 cursor-pointer'>
                  <ICONS.AiFillEyeInvisible />
                </span>
              </div>
            </div>
            <div className='mt-8'>
              <button className='w-full bg-isGray30 p-3 text-isGray25 focus:outline-none hover:bg-isOrange hover:text-white rounded-md text-[14px]'>
                Create account
              </button>
            </div>
            <p className='text-[14px] mt-10 text-isGray'>
              By clicking the button above, you agree to our{" "}
              <Link to='#' className='text-isOrange'>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to='#' className='text-isOrange'>
                Privacy Policy
              </Link>
              .
            </p>

            <p className='mt-10 text-[14px] text-isGray'>
              Already have an account?
              <Link to='/login' className='text-isOrange'>
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className='hidden md:grid place-content-end mt-4'>
          <div className='flex gap-2 items-center text-white bg-isOrange p-4 w-fit text-[14px] rounded-full'>
            <span className=''>Get Help</span> <ICONS.FaRegComment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailRegistration;