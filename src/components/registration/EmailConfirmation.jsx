import { Link } from "react-router-dom";
import * as IMAGES from "../../assets";
import * as ICONS from "../../components/icons";

const EmailConfirmation = () => {
  return (
    <div>
      <div className='py-6 px-5 md:hidden'>
        <Link to='/' className='logo'>
          <img className='w-24' src={IMAGES.LOGO} alt='' />
        </Link>
      </div>
      <div className='mx-5 md:mx-auto md:mt-16 md:w-2/4 pt-10'>
        <div className='border py-9 px-6 md:px-12 bg-white shadow-s md:shadow-lg rounded-md'>
          <div className='mt-10 text-center'>
            <div className='grid place-content-center'>
              <img
                src={IMAGES.MAIL_VERIFIED_ICON}
                className='w-20 h-20'
                alt=''
              />
            </div>
            <h2 className='text-[20px] font-bold text-[#1D1D18] pt-0'>
              Check your mailbox !
            </h2>
            <p className='text-isDarkGray text-[14px] mt-2'>
              We’ve sent an email to seyi@zojatech.com with a an OTP to confirm
              your account. Check your inbox to activate your account.
            </p>
            <button className='bg-isOrange text-white p-2 px-6 text-[14px] mt-6 rounded-lg'>
              Confirm Email
            </button>
            <p className='mt-10 text-[14px] text-isGray'>
              Didn’t get the mail?
              <span className='text-isOrange'>
                <span>Resend</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;
