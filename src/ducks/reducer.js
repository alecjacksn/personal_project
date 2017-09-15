import * as getItemClicked from '../services/getItem'
// import * as getImageClicked from '../services/getImages'

const initialState = {
    productid: '',
    item: [],
    images: [],
    loading: false
}


const GET_ITEM = 'GET_ITEM';
const GET_ITEM_FULFILLED = 'GET_ITEM_FULFILLED';
const GET_IMAGE = 'GET_IMAGE'
const GET_IMAGES_FULFILLED = 'GET_IMAGES_FULFILLED';

const UPDATED_PRODUCTID = 'UPDATE_PRODUCTID';




function reducer(state = initialState, action) {
    
    switch(action.type){
        case UPDATED_PRODUCTID:
        return Object.assign({}, state, { productid: action.payload});
        
        case GET_ITEM_FULFILLED: 
        return Object.assign({}, state, {item: action.payload})

        case GET_IMAGES_FULFILLED: 
        return Object.assign({}, state, {images: action.payload})

        // case GET_ITEM:
        // return Object.assign({}, state, {item: action.payload})
        
        default: return state;
    }
    
}

export function updateProductid(productid){
    return {
        type: UPDATED_PRODUCTID,
        payload: productid
    }
}

export function getItem(productid) {
    return {
        type: GET_ITEM,
        payload: getItemClicked.getItem(productid)
    }
}


// export function getImages(productid) {
//     return {
//         type: GET_IMAGE,
//         payload: getImageClicked.getImages(productid)
//     }
// }
// export function getItemImages(productid) {
//     return {
//         type: GET_ITEM_IMAGES,
//         payload: getItemClicked.getItemImages(productid)
//     }
// }



export default reducer