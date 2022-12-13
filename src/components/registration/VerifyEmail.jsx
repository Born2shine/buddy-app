import { Link } from "react-router-dom";
import * as IMAGES from "../../assets";
import * as ICONS from "../../components/icons";
import OtpInput from "react-otp-input";
import { useState } from "react";

const VerifyEmail = () => {
  const [OTP, setOTP] = useState("");

  const handleChange = (otp) => {
    setOTP(otp);
  };

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
              <span className='text-isOrange'>seyi@zojatech.com</span>
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
            <button className='bg-isOrange text-white p-2 px-6 text-[14px] mt-6 rounded-md'>
              Confirm code
            </button>
            <p className='mt-10 text-[14px] text-isGray'>
              Didn’t get the mail?{" "}
              <span className='text-isOrange'>
                <span className='cursor-pointer'>Resend</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
