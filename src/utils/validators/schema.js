import * as yup from "yup"

export const loginSchema = yup.object().shape({
    email: yup.string().email().required('please enter email address'),
    password: yup.string().min(6).required('please enter password')
})

export const registrationSchema = yup.object().shape({
    first_name: yup.string().required('please enter first name'),
    last_name: yup.string().required('please enter last name'),
    email: yup.string().email().required('please enter email address'),
    password: yup.string().required('please enter password')
})

export const otpSchema = yup.object().shape({
    otp: yup.string().required('please enter OTP'),
})

export const resendOTPSchema = yup.object().shape({
    email: yup.string().email().required('please enter email address'),
})