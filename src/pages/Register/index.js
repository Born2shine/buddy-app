import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as IMAGES from "../../assets";
import * as ICONS from "../../components/icons";
import EmailRegistration from "../../components/registration/EmailRegistration";
import EmailVerified from "../../components/registration/EmailVerified";
import RegistrationOption from "../../components/registration/RegistrationOption";
import VerifyEmail from "../../components/registration/VerifyEmail";
import EmailConfirmation from './../../components/registration/EmailConfirmation';
import { useSelector } from 'react-redux';

export const Register = () => {
  const [emailSignUp, setEmailSignUp] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleSignUpOption = () => setEmailSignUp(true);

  return (
    <main className='bg-isLightGray w-screen h-screen'>
      <section className='w-screen h-screen flex'>
        <aside className='hidden w-1/2 bg-white md:block'>
          <div className='mx-32 pt-14'>
            <nav>
              <Link to='/' className='logo'>
                <img className='w-24' src={IMAGES.LOGO} alt='' />
              </Link>
            </nav>
            <div className='mt-28 w-[75%]'>
              <ul>
                <li className='flex items-center gap-2'>
                  <span className='bg-isOrange rounded-full p-1 text-white'>
                    <ICONS.BsCheck2 />
                  </span>
                  <span className='text-isGray'>
                    Track real-time overview of company’s financial performance.
                  </span>
                </li>
                <li className='flex items-center space-x-2 mt-10'>
                  <span className='bg-isOrange rounded-full p-1 text-white'>
                    <ICONS.BsCheck2 />
                  </span>
                  <span className='text-isGray'>
                    Track created projects budget against actual revenue and
                    expenses.
                  </span>
                </li>
                <li className='flex items-center space-x-2 mt-10'>
                  <span className='bg-isOrange rounded-full p-1 text-white'>
                    <ICONS.BsCheck2 />
                  </span>
                  <span className='text-isGray'>
                    Highlighted reports on budget deficit and surplus,
                    accounting dimensions, balance sheets and real-time sales
                    margin estimation.
                  </span>
                </li>
              </ul>
            </div>
            <p className='mt-20 text-[14px] text-isDarkGray'>
              {" "}
              &copy; 2022 Revvex. All rights reserved
            </p>
          </div>
        </aside>
        <aside className='md:w-1/2'>
          {emailSignUp && !user?.isRegistered && !user?.isVerifying && <EmailRegistration />}
          {!emailSignUp && !user?.isRegistered && !user?.isVerifying && (
            <RegistrationOption handleSignUpOption={handleSignUpOption} />
          )}
          { user?.otp && user?.isConfirmingEmail && !user?.isVerifying && 
            <EmailConfirmation/>
          }
          {
            user?.otp && user?.isConfirmingEmail && user?.isVerifying &&
             <VerifyEmail/> 
          }
         {user?.accountVerified && <EmailVerified/>}
        </aside>
      </section>
    </main>
  );
};
