import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as IMAGES from "../../assets";
import { resetStatus, verifyOTP } from "../../redux/slice/auth/authSlice";
import useResendOTPHandler from './../../utils/hooks/useResendOTPHandler';
import OtpTimer from 'otp-timer'

const VerifyEmail = () => {
  const { user, isSuccess, isError } = useSelector((state) => state.auth);
  const [OTP, setOTP] = useState("");
  const { handleResendOTP } = useResendOTPHandler()

  const dispatch = useDispatch();

  const handleChange = (otp) => {
    setOTP(otp);
  };

  const handleSubmit = () => {
    dispatch(verifyOTP(OTP))
  }

  // reset status
  useEffect(() => {
    dispatch(resetStatus())
  },[user, isSuccess, isError])

  return (
    <div>
      <div className='py-6 px-5 md:hidden'>
        <Link to='/' className='logo'>
          <img className='w-24' src={IMAGES.LOGO} alt='' />
        </Link>
      </div>
      <div className='mx-5 md:mx-auto md:mt-16 md:w-2/4 pt-10'>
        <div className='border py-9 px-6 md:px-12 bg-white shadow-s md:shadow-lg rounded-md'>
          <div className='mt-10'>
            <h2 className='text-[20px] font-bold text-[#1D1D18] pt-0'>
              Verify your email
            </h2>
            <p className='text-isDarkGray text-[14px] mt-2'>
              A four digit OTP code has been sent to your email{" "}
              <span className='text-isOrange'>{user?.email}</span>
            </p>
            <div className='mt-4'>
              <OtpInput
                value={OTP}
                onChange={handleChange}
                numInputs={4}
                separator={<span style={{ width: "8px" }}></span>}
                isInputNum={true}
                shouldAutoFocus={true}
                inputStyle={{
                  border: "1px solid orange",
                  borderRadius: "8px",
                  width: "54px",
                  height: "54px",
                  fontSize: "18px",
                  marginRight: "8px",
                  color: "#000",
                  fontWeight: "700",
                  caretColor: "blue",
                }}
                focusStyle={{
                  border: "1px solid #CFD3DB",
                  outline: "none",
                }}
              />
            </div>
            <button disabled={OTP.length < 4 && true} className={`${OTP.length < 4 ?"bg-orange-300" : "bg-isOrange"} text-white p-2 px-6 text-[14px] mt-6 rounded-md`} onClick={handleSubmit}>
              Confirm code
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

export default VerifyEmail;
