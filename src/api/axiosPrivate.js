import axios from "./axios";
import { BASE_URL } from './constant';
import { getSessionToken } from "../utils/helpers/storage";
// const token = getSessionToken('accessToken')

const axiosPrivate = axios.create({
    baseURL: BASE_URL
})


axiosPrivate.interceptors.request.use(config => {
    const token = getSessionToken('accessToken')
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }
    config.headers['Content-Type'] = 'application/json';

    return config
})

export default axiosPrivate