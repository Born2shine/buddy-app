import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as IMAGES from "../../assets";
import * as ICONS from "../../components/icons";
import { login, resetStatus } from "../../redux/slice/auth/authSlice";
import { confirmPasswordSchema, loginSchema } from "../../utils/validators/schema";

export const ComfirmResetPassword = () => {
  const { user, isError, isSuccess } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname | "/";

  // handle form submit
  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    dispatch(login(values));
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
      confirm_password: "",
      password: "",
    },
    validationSchema: confirmPasswordSchema,
    onSubmit,
  });

  // redirect if authenticated
  useEffect(() => {
    if (isSuccess || user) {
      if (user?.token) {
        navigate("/account/overview", { state: { from: from }, replace: true });
      }
    }
    dispatch(resetStatus());
  }, [user, isSuccess, isError]);

  return (
    <main className='bg-isLightGray-1 w-screen h-screen'>
      <section className='w-screen h-screen flex'>
        <aside className='hidden w-1/2 bg-isMaroon md:block'>
          <div className='mx-32 pt-14 relative h-screen'>
            <div className='mt-24 w-[75%]'>
              <h3 className="text-white text-[1.8rem] leading-10 font-semibold">Welcome to <br/> Mouve’s Influencers Dashboard</h3>
            </div>
              <img src={IMAGES.LOGIN_BG} className="absolute -bottom-0" alt="" />
          </div>
        </aside>
        <aside className='w-screen mt-[30%] md:mt-20 md:w-1/2'>
          <div className='mx-5 md:mx-auto md:mt-12 md:w-4/6'>
            <div className='border py-9 px-6 md:px-12 bg-white shadow-s md:shadow-lg rounded-md'>
             <div className="text-center">
              <div className="grid place-content-center mb-4">
              <img src={IMAGES.LOGO} alt="" />
              </div>
              <h2 className='text-2xl font-semibold'>Reset Password </h2>
                <p className='text-[14px] text-isGray py-2'>
                    Please enter the new password details
                </p>
             </div>
              <div className='mt-2'>
                <form onSubmit={handleSubmit}>
                <div className='mt-3'>
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
                            errors.password &&
                            touched.password &&
                            "border-red-600"
                          } focus:border-isMaroon p-2 px-8 rounded w-full text-[14px]`}
                        />
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
                  <div className='mt-3'>
                    <div className='relative'>
                      <div className='relative'>
                        <span className='absolute top-3 left-2 text-isGray25'>
                          <ICONS.FaUnlockAlt />
                        </span>
                        <input
                          type={`${showPassword ? "text" : "password"}`}
                          name='confirm_password'
                          id='confirm_password'
                          value={values.confirm_password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder='Confirm confirm_password'
                          className={`border focus:outline-none ${
                            errors.confirm_password &&
                            touched.confirm_password &&
                            "border-red-600"
                          } focus:border-isMaroon p-2 px-8 rounded w-full text-[14px]`}
                        />
                      </div>

                      {errors.confirm_password && touched.confirm_password && (
                        <span className='text-sm font-thin text-red-600'>
                          {errors.confirm_password}
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
                  <div className='mt-8'>
                    <button
                      type='submit'
                      className='w-full bg-isMaroon p-3 text-white hover:bg-pink-900 hover:text-white rounded-md text-[14px]'
                      disabled={isSubmitting && true}
                    >
                      {isSubmitting ? "Loading..." : "Update"}
                    </button>
                  </div>
                </form>

                <p className='mt-10 text-[14px] text-isGray'>
                Already have an account? <Link to='/' className='text-isMaroon'>
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
};
