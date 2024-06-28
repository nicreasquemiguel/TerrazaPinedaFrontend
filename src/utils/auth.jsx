import { useAuthStore } from "../store/auth";
import axios from "./axiosAuth";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie"


// Importing Swal (SweetAlert2) for displaying toast notifications
import Swal from 'sweetalert2';

// Configuring global toast notifications using Swal.mixin
const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
});

// Function to handle user login
export const login = async (email, password) => {
    try {
        // Making a POST request to obtain user tokens
        const { data, status }  =  await axios.post("jwt/create/", {
            email,
            password,
        });

        // If the request is successful (status code 200), set authentication user and display success toast
        if (status === 200) {
            setAuthUser(data.access, data.refresh);

            // Displaying a success toast notification
            Toast.fire({
                icon: 'success',
                title: 'Iniciaste session correctamente!'
            });
        }

        // Returning data and error information
        return { data, error: null };
    } catch (error) {
        // Handling errors and returning data and error information
                    // Displaying a success toast notification
                    Toast.fire({
                        icon: 'error',
                        title: 'Error iniciando sesion!',
                    })
        // console.log(error)
                
        return {
            data: null,
            error: error || 'Something went wrong',
        }
    }
};

// Function to handle user registration
export const register = async (first_name, last_name, email, phone, password, re_password) => {
    try {
        // Making a POST request to register a new user
        const { data } = await axios.post('users/', {
            first_name,
            last_name,
            email,
            phone,
            password,
            re_password
        })

        // Logging in the newly registered user and displaying success toast
        await login(email, password);

        // Displaying a success toast notification
        Toast.fire({
            icon: 'success',
            title: 'Registro completo!'
        });

        // Returning data and error information
        return { data, error: null };

    } catch (error) {
        // Handling errors and returning data and error information
        Toast.fire({
            icon: 'error',
            title: error.response.data[Object.keys(error.response.data)[0]]
        });

        // console.log(error)
        return {
            data: null,
            error: error.response.data[Object.keys(error.response.data)[0]] || 'Something went wrong',
        };
    }
};

// Function to handle user logout
export const logout = () => {
    // Removing access and refresh tokens from cookies, resetting user state, and displaying success toast
    Cookies.remove('access_token');
    Cookies.remove('refresh_token');
    useAuthStore.getState().setUser(null);

    // Displaying a success toast notification
    Toast.fire({
        icon: 'success',
        title: 'Cerraste sesión exitosamente!'
    });
};

// Function to set the authenticated user on page load
export const setUser = async () => {
    // Retrieving access and refresh tokens from cookies
    const accessToken = Cookies.get('access_token');
    const refreshToken = Cookies.get('refresh_token');

    // Checking if tokens are present
    if (!accessToken || !refreshToken) {
        return;
    }

    // If access token is expired, refresh it; otherwise, set the authenticated user
    if (isAccessTokenExpired(accessToken)) {
        const response = await getRefreshToken(refreshToken);
        setAuthUser(response.access, response.refresh);
    } else {
        setAuthUser(accessToken, refreshToken);
    }
};

// Function to set the authenticated user and update user state
export const setAuthUser = (access_token, refresh_token) => {
    // Setting access and refresh tokens in cookies with expiration dates
    Cookies.set('access_token', access_token, {
        expires: 1,  // Access token expires in 1 day
        secure: true,
    });

    Cookies.set('refresh_token', refresh_token, {
        expires: 7,  // Refresh token expires in 7 days
        secure: true,
    });

    // Decoding access token to get user information
    const user = jwtDecode(access_token) ?? null;
    console.log(user)
    // If user information is present, update user state; otherwise, set loading state to false
    if (user) {
        useAuthStore.getState().setUser(user);
    }
    useAuthStore.getState().setLoading(false);
};

// Function to refresh the access token using the refresh token
export const getRefreshToken = async () => {
    // Retrieving refresh token from cookies and making a POST request to refresh the access token
    const refresh_token = Cookies.get('refresh_token');
    const response = await axios.post("jwt/refresh/", {
        refresh: refresh_token,
    });

    // Returning the refreshed access token
    return response.data;
};

// Function to check if the access token is expired
export const isAccessTokenExpired = (accessToken) => {
    try {
        // Decoding the access token and checking if it has expired
        const decodedToken = jwtDecode(accessToken);
        return decodedToken.exp < Date.now() / 1000;
    } catch (err) {
        // Returning true if the token is invalid or expired
        return true;
    }
};


export const reset_password = async ( email ) => {

    try {
        // Making a POST request to obtain user tokens
        const reset = await axios.post("users/reset_password/", {
            email
        });
        Toast.fire({
            icon: 'success',
            title: 'Correo de reseteo enviado!',
        });

        // Returning data and error information
        return reset
    } catch (error) {
        // Handling errors and returning data and error information
                    // Displaying a success toast notification
                    Toast.fire({
                        icon: 'success',
                        title: error,
                    });
                
        return {
            data: null,
            error: error.response.data?.detail || 'Something went wrong',
        };
    }
}



export const reset_password_confirm = async (uid, token, new_password, re_new_password) => {

    try {
        // Making a POST request to obtain user tokens
        const reset = await axios.post("users/reset_password_confirm/", {
            uid, 
            token, 
            new_password, 
            re_new_password
        });


        Toast.fire({
            icon: 'success',
            title: 'Correo de reseteo enviado!',
        });


    } catch (error) {
        // Handling errors and returning data and error information
                    // Displaying a success toast notification
                    Toast.fire({
                        icon: 'success',
                        title: error,
                    });
                
        return {
            data: null,
            error: error.response.data?.detail || 'Something went wrong',
        };
    }
}
