import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as IMAGES from "../../assets";
import { setVerifyingEmail } from "../../redux/slice/auth/authSlice";
import useResendOTPHandler from "../../utils/hooks/useResendOTPHandler";
import OtpTimer from 'otp-timer'

const EmailConfirmation = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { handleResendOTP } = useResendOTPHandler();
  const handleConfirmEmail = () => dispatch(setVerifyingEmail(true));

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
              We’ve sent an email to {user?.email} with a an OTP to confirm your
              account. Check your inbox to activate your account.
            </p>
            <button
              className='bg-isOrange text-white p-2 px-6 text-[14px] mt-6 rounded-lg'
              onClick={handleConfirmEmail}
            >
              Confirm Email
            </button>
            <p className='mt-10 text-[14px] text-isGray flex gap-1'>
              Didn’t get the mail?
              <span className='text-isOrange'>
                <span
                  className='cursor-pointer font-serif'
                  // onClick={() => handleResendOTP(user?.email)}
                >
                  <OtpTimer
                    seconds={0}
                    minutes={4}
                    resend={() => handleResendOTP(user?.email)}
                    text={" "}
                    ButtonText='Resend'
                    textColor={"#000000"}
                    buttonColor={"#b82569"}
                    background='none'
                  />
                  {/* Resend */}
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;
