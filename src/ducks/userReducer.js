import * as getItemClicked from '../services/getItem'
import axios from 'axios';

// import * as getImageClicked from '../services/getImages'

const initialState = {
    user: {}
}


const GET_USER_INFO = 'GET_USER_INFO';


function userReducer(state = initialState, action) {
    // var x = state.brands_to_filter
    // var q = state.price_to_filter
    //console.log('TYPE ', action.type)
    // console.log('action.payload: ', action.payload)
    switch (action.type) {

        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });

        default: return state;
    }
}

export function getUserInfo() {
    const userInfo = axios.get('/auth/me').then(res => {
        console.log("USER REDUCER LOG: ", res.data)
        return res.data;
    })
    return {
        type: GET_USER_INFO,
        payload: userInfo
    }
}



export default userReducer
