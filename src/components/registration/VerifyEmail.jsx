import { Link } from "react-router-dom";
import * as IMAGES from "../../assets";
import * as ICONS from "../../components/icons";
import OtpInput from "react-otp-input";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetStatus, verifyOTP } from "../../redux/slice/auth/authSlice";

const VerifyEmail = () => {
  const { user, isSuccess, isError } = useSelector((state) => state.auth);
  const [OTP, setOTP] = useState("");

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
            <p className='mt-10 text-[14px] text-isGray'>
              Didn’t get the mail? <span className='text-isOrange'>
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
