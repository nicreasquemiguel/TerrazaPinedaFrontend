import axios from "axios";
import { BASE_URL, SERVER_URL } from "./constants";

const apiAuthInstance = axios.create({
    baseURL: `${SERVER_URL}auth/`,
    timeout: 20000,
    headers: {
        'Content-Type':'application/json',
        Accept: 'application/json',
        withCredentials: true,
    }
})


export default apiAuthInstance