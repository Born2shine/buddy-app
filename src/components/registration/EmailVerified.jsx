import { Link } from "react-router-dom";
import * as IMAGES from "../../assets";
import * as ICONS from "../../components/icons";

const EmailVerified = () => {
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
                src={IMAGES.MAIL_SENT_ICON}
                className='w-[80%]'
                alt=''
              />
            </div>
            <h2 className='text-[20px] font-medium text-[#1D1D18] pt-0 mt-6'>
                Email verified !
            </h2>
            <p className='text-isDarkGray text-[14px] mt-2'>
              The verified email address will be associated with your account.
              Click on the button below to continue
            </p>
            <button className='bg-isOrange text-white p-2 px-8 text-[14px] mt-6 rounded-lg'>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerified;
