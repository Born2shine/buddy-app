import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as IMAGES from "../../assets";
import * as ICONS from "../../components/icons";
import { registrationSchema } from "../../utils/validators/schema";
import { useDispatch, useSelector } from "react-redux";
import {
  register,
  resetStatus,
  setEmail,
} from "../../redux/slice/auth/authSlice";

const EmailRegistration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user, isError, isSuccess } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname | "/";

  // handle form submit
  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    dispatch(register(values));
    dispatch(setEmail(values.email));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false);
  };

  // initialize form inputs
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    validationSchema: registrationSchema,
    onSubmit,
  });

  // redirect if authenticated
  useEffect(() => {
    if (isSuccess) {
      dispatch(setEmail(values.email));
      if (user?.token) {
        // navigate("/account/overview", { state: { from: from }, replace: true });
      }
    }
    dispatch(resetStatus());
  }, [user, isSuccess, isError]);

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
            <form onSubmit={handleSubmit}>
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
                      name='first_name'
                      id='first_name'
                      value={values.first_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='First Name'
                      className={`border focus:outline-none ${
                        errors.first_name &&
                        touched.first_name &&
                        "border-red-600"
                      } focus:border-isOrange p-2 px-8 rounded w-full text-[14px]`}
                    />
                    {errors.first_name && touched.first_name && (
                      <span className='text-sm font-thin text-red-600'>
                        {errors.first_name}
                      </span>
                    )}
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
                      name='last_name'
                      id='last_name'
                      value={values.last_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='Last Name'
                      className={`border focus:outline-none ${
                        errors.last_name &&
                        touched.last_name &&
                        "border-red-600"
                      } focus:border-isOrange p-2 px-8 rounded w-full text-[14px]`}
                    />
                    {errors.last_name && touched.last_name && (
                      <span className='text-sm font-thin text-red-600'>
                        {errors.last_name}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className='mt-2'>
                <label
                  htmlFor='last-name'
                  className='text-isGray mb-[2px] block'
                >
                  Email
                </label>
                <div className='relative'>
                  <span className='absolute top-3 left-2 text-isGray25'>
                    <ICONS.IoMdMail />
                  </span>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='Work Email'
                    className={`border focus:outline-none ${
                      errors.email && touched.email && "border-red-600"
                    } focus:border-isOrange p-2 px-8 rounded w-full text-[14px]`}
                  />
                  {errors.email && touched.email && (
                    <span className='text-sm font-thin text-red-600'>
                      {errors.email}
                    </span>
                  )}
                  {!errors.email && touched.email && (
                    <span className='text-green-500 text-2xl absolute right-2 top-1.5'>
                      <ICONS.BiCheck />
                    </span>
                  )}
                </div>
              </div>
              <div className='mt-3'>
                <label
                  htmlFor='last-name'
                  className='text-isGray mb-[2px] block'
                >
                  Password
                </label>
                <div className='relative'>
                  <div className='relative'>
                    <span className='absolute top-3 left-2 text-isGray25'>
                      <ICONS.FaUnlockAlt />
                    </span>
                    <input
                      type={`${showPassword ? "text" : "password"}`}
                      name='password'
                      id='password'
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder='Password'
                      className={`border focus:outline-none ${
                        errors.password && touched.password && "border-red-600"
                      } focus:border-isOrange p-2 px-8 rounded w-full text-[14px]`}
                    />
                    <span className='text-xs font-thin absolute right-0 -bottom-5 text-isGray'>
                      15/15
                    </span>
                  </div>
                  {errors.password && touched.password && (
                    <span className='text-sm font-thin text-red-600'>
                      {errors.password}
                    </span>
                  )}
                  <span
                    className='absolute right-3 top-3 text-isGray25 cursor-pointer'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <ICONS.AiFillEye />
                    ) : (
                      <ICONS.AiFillEyeInvisible />
                    )}
                  </span>
                </div>
              </div>
              <div className='mt-9'>
                <button className='w-full bg-isGray30 p-3 text-isGray25 focus:outline-none hover:bg-isOrange hover:text-white rounded-md text-[14px]'>
                  Create account
                </button>
              </div>
            </form>
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
              Already have an account?{" "}
              <Link to='/' className='text-isOrange'>
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
