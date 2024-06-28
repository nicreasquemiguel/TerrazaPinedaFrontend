import axios from "axios";

const apiAuthInstance = axios.create({
    baseURL: "http://localhost:8000/auth/",
    timeout: 5000,
    headers: {
        'Content-Type':'application/json',
        Accept: 'application/json'
    }
})


export default apiAuthInstance