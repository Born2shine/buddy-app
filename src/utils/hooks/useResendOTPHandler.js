
import { useDispatch } from 'react-redux';
import { resendOTP } from '../../redux/slice/auth/authSlice';

const useResendOTPHandler = (email) => {
    const dispatch = useDispatch()

    const handleResendOTP = () => dispatch(resendOTP(email))

    return { handleResendOTP }
}

export default useResendOTPHandler