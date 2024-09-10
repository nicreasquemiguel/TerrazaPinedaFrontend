export const REACT_APP_API_URL = 'http://52.90.173.244:8000'

import axios from 'axios';

import {
    VENUES_SUCCESS,
    VENUES_FAIL,
} from './types';

// export const get_paquetes = () => async dispatch => {
//     const config = {
//         headers: {
//             'Content-Type': 'application/json',
//             // 'Authorization': `JWT ${localStorage.getItem('access')}`,
//             'Accept': 'application/json'
//         }
//     };    


//     try {
//         const res = await axios.get(`${REACT_APP_API_URL}/api/paquestes/`, config);

//         console.log(res.data)

//         dispatch({
//             type: VENUES_SUCCESS,
//             payload: res.data
//         });
//     } catch (err) {
//         dispatch({
//             type: VENUES_FAIL
//         });
//     }
// } else {
//     dispatch({
//         type: VENUES_FAIL
//     });
// }
// }


export const get_venues = () => async dispatch => {

    try {
        console.log('fdsa')
        const res = await axios.get(`${REACT_APP_API_URL}/api/lugares/`);
        const data = res.data
        console.log(data)
        return data
            dispatch({
                type: VENUES_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: VENUES_FAIL,
                payload: res.data
            });
        }
    
};

export const getVenues = async () => {
    try {

        const res = await axios.get(`${REACT_APP_API_URL}/api/lugares/`);
        const data = res.data
        // console.log(data)
        return data
        } catch(err){
            console.log(err)
        }
}

export const getPaquetes = async () => {
    try {

        const res = await axios.get(`${REACT_APP_API_URL}/api/paquetes/`);
        const data = res.data
        // console.log(data)
        return data
        } catch(err){
            console.log(err)
        }
}