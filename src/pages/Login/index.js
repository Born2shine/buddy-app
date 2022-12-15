import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as IMAGES from "../../assets";
import * as ICONS from "../../components/icons";
import { login, resetStatus } from "../../redux/slice/auth/authSlice";
import { loginSchema } from "../../utils/validators/schema";

export const Login = () => {
  const { user, isError, isSuccess } = useSelector((state) => state.auth);

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname | "/";

  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    dispatch(login(values))
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false)
  };

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
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });

  useEffect(() => {
    if (isSuccess || user) {
      if (user?.token) {
        // dispatch(getUserProfile());
        navigate("/account/overview", { state: { from: from }, replace: true });
      }
    }
    dispatch(resetStatus())
  },[user, isSuccess,isError])

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
              &copy; 2022 Revvex. All rights reserved
            </p>
          </div>
        </aside>
        <aside className='md:w-1/2'>
          <div className='py-6 px-5 md:hidden'>
            <Link to='/' className='logo'>
              <img className='w-24' src={IMAGES.LOGO} alt='' />
            </Link>
          </div>
          <div className='mx-5 md:mx-auto md:mt-12 md:w-4/6'>
            <div className='border py-9 px-6 md:px-12 bg-white shadow-s md:shadow-lg rounded-md'>
              <h2 className='text-2xl font-semibold'>Log in to your account</h2>
              <p className='text-[14px] text-isGray py-2'>
                Proceed to login to your account
              </p>
              <div className='mt-2'>
                <form onSubmit={handleSubmit}>
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
                        // type='email'
                        placeholder='Email'
                        name='email'
                        id='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`border focus:outline-none ${
                          errors.email && touched.email && "border-red-600"
                        } focus:border-isOrange p-2 px-8 rounded w-full text-[14px]`}
                      />
                      {errors.email && touched.email && (
                        <span className='text-sm font-thin text-red-600'>
                          {errors.email}
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
                      <span className='absolute top-3 left-2 text-isGray25'>
                        <ICONS.FaUnlockAlt />
                      </span>
                      <input
                        type='password'
                        name='password'
                        id='password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Password'
                        className={`border focus:outline-none ${
                          errors.password &&
                          touched.password &&
                          "border-red-600"
                        } focus:border-isOrange p-2 px-8 rounded w-full text-[14px]`}
                      />
                      {errors.password && touched.password && (
                        <span className='text-sm font-thin text-red-600'>
                          {errors.password}
                        </span>
                      )}
                      <span className='absolute right-3 top-3 text-isGray25 cursor-pointer'>
                        <ICONS.AiFillEyeInvisible />
                      </span>
                    </div>
                  </div>
                  <div className='mt-8'>
                    <button
                      type='submit'
                      className='w-full bg-isGray30 p-3 text-isGray25 hover:bg-isOrange hover:text-white rounded-md text-[14px]'
                      disabled={isSubmitting && true}
                    >
                      {isSubmitting ? "Loading..." : "Login"}
                    </button>
                  </div>
                </form>
                <p className='text-[14px] mt-10 text-isGray'>
                  By clicking the button above, you agree to our{" "}
                  <Link to='#' className='text-isOrange'>
                    Terms of Service
                  </Link>
                  and
                  <Link to='#' className='text-isOrange'>
                    Privacy Policy
                  </Link>
                  .
                </p>

                <p className='mt-10 text-[14px] text-isGray'>
                  Don't have an account?
                  <Link to='/register' className='text-isOrange'>
                    Register
                  </Link>
                </p>
              </div>
            </div>
            <div className='hidden md:grid place-content-end mt-10'>
              <div className='flex gap-2 items-center text-white bg-isOrange p-4 w-fit text-[14px] rounded-full'>
                <span className=''>Get Help</span> <ICONS.FaRegComment />
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};
