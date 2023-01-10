import * as yup from "yup";

// password must contain one uppercase, one lowercase and one symbol
const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])/;

export const loginSchema = yup.object().shape({
  email: yup.string().email().required("please enter email address"),
  password: yup.string().min(6).required("please enter password"),
});

export const confirmPasswordSchema = yup.object().shape({
  password: yup.string().min(6).required("please enter password"),
  confirm_password: yup.string().required("please enter password again"),
});

export const registrationSchema = yup.object().shape({
  first_name: yup
    .string()
    .min(3, "first name must be at least 3 characters")
    .required("please enter first name"),
  last_name: yup
    .string()
    .min(3, "last name must be at least 3 characters")
    .required("please enter last name"),
  email: yup.string().email().required("please enter email address"),
  password: yup
    .string()
    .min(8)
    .matches(
      passwordRules,
      "must contain one uppercase, one lowercase, and one symbol"
    )
    .required("please enter password"),
});

export const otpSchema = yup.object().shape({
  otp: yup.string().required("please enter OTP"),
});

export const resendOTPSchema = yup.object().shape({
  email: yup.string().email().required("please enter email address"),
});

export const chatSchema = yup.object().shape({
  message_to: yup.string().required("please enter message"),
});


