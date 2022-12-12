import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as IMAGES from "../../assets";
import * as ICONS from "../../components/icons";
import EmailRegistration from "../../components/registration/EmailRegistration";
import RegistrationOption from "../../components/registration/RegistrationOption";

export const Register = () => {
  const [emailSignUp, setEmailSignUp] = useState(false);

  const handleSignUpOption = () => setEmailSignUp(true);

  return (
    <main className='bg-isLightGray'>
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
            {
                emailSignUp && ( <EmailRegistration/>)
            }
         {!emailSignUp && <RegistrationOption handleSignUpOption={handleSignUpOption}/>}
        </aside>
      </section>
    </main>
  );
};
