import axios from "axios";
import { isAccessTokenExpired, setAuthUser, getRefreshToken } from "./auth";
import { API_BASE_URL } from './constants.jsx'
import Cookies from "js-cookie";

const useToken = () => {
    const access_token = Cookies.get("access_token")
    const refresh_token = Cookies.get("refresh_token")

    const axiosToken = axios.create({
        baseURL: API_BASE_URL,
        headers: { 
            Authorization: `Bearer ${access_token}`
        }
    })

    axiosToken.interceptors.request.use(async (req) => {
        if (!isAccessTokenExpired(access_token)){
            return req
        }

        const response = await getRefreshToken(refresh_token)
        setAuthUser(response.access_token, response.refresh_token)

        req.headers.Authorization = `Bearer ${response.data.access}`
        return req
    })

    return axiosToken; // Return the custom Axios instance
}

export default useToken; // Export the custom Axios instance creator function
