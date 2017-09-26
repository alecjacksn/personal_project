import * as getItemClicked from '../services/getItem'
// import * as getImageClicked from '../services/getImages'

const initialState = {
    productid: '',
    item: [],
    images: [],
    loading: false,



    brands_to_filter: ['TP-Link'],
    filterBrands: true,

    allProducts: false,

    light_bulb: false,


    light_switch: false,


    outlet: false,


    thermostat: false,


    smart_speaker: false,


}


const GET_ITEM = 'GET_ITEM';
const GET_ITEM_FULFILLED = 'GET_ITEM_FULFILLED';
const GET_IMAGE = 'GET_IMAGE'
const GET_IMAGES_FULFILLED = 'GET_IMAGES_FULFILLED';


const FILTER_BRANDS_TF = 'FILTER_BRANDS_TF'


const BRANDS_TO_FILTER = 'BRANDS_TO_FILTER'
const REMOVE_BRANDS_TO_FILTER = 'REMOVE_BRANDS_TO_FILTER'

const UPDATED_PRODUCTID = 'UPDATE_PRODUCTID';
const SHOW_ALL_PRODUCTS = 'SHOW_ALL_PRODUCTS';
const SHOW_ALL_LIGHTS = 'SHOW_ALL_LIGHTS';
const SHOW_ALL_LIGHT_SWITCH = 'SHOW_ALL_LIGHT_SWTICH';
const SHOW_ALL_OUTLETS = 'SHOW_ALL_OUTLETS';
const SHOW_ALL_THERMOSTATS = 'SHOW_ALL_THERMOSTATS';
const SHOW_ALL_SMART_SPEAKERS = 'SHOW_ALL_SMART_SPEAKERS';


function reducer(state = initialState, action) {
    var x = state.brands_to_filter
    // console.log('TYPE ', action.type)
    switch (action.type) {
        case UPDATED_PRODUCTID:
            return Object.assign({}, state, { productid: action.payload });

        case GET_ITEM_FULFILLED:
            return Object.assign({}, state, { item: action.payload });

        case GET_IMAGES_FULFILLED:
            return Object.assign({}, state, { images: action.payload });

        case SHOW_ALL_PRODUCTS:
            return Object.assign({}, state, { allProducts: action.payload })

        case SHOW_ALL_LIGHTS:
            return Object.assign({}, state, { light_bulb: action.payload });

        case SHOW_ALL_LIGHT_SWITCH:
            return Object.assign({}, state, { light_switch: action.payload });

        case SHOW_ALL_OUTLETS:
            return Object.assign({}, state, { outlet: action.payload });

        case SHOW_ALL_THERMOSTATS:
            return Object.assign({}, state, { thermostat: action.payload });

        case SHOW_ALL_SMART_SPEAKERS:
            return Object.assign({}, state, { smart_speaker: action.payload });


        case BRANDS_TO_FILTER:
            return Object.assign({}, state, { brands_to_filter: [...state.brands_to_filter, action.payload] });

        case REMOVE_BRANDS_TO_FILTER:
            var j = x.filter(brands_to_filter => brands_to_filter !== action.payload)
            console.log("J: fitlerted", j)
            return Object.assign({}, state, { brands_to_filter: j })

        case FILTER_BRANDS_TF:
            return Object.assign({}, state, { filterBrands: action.payload });

        // return Object.assign({}, state, {brands_to_filter: [...state.brands_to_filter].filter(brands_to_filter => brands_to_filter !== action.payload)})


        // case GET_ITEM:
        // return Object.assign({}, state, {item: action.payload})

        default: return state;
    }

}

export function updateProductid(productid) {
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

export function showAllProducts(click) {
    return {
        type: SHOW_ALL_PRODUCTS,
        payload: click
    }
}


export function showLights(click) {
    return {
        type: SHOW_ALL_LIGHTS,
        payload: click
    }
}



export function showLightSwitches(click) {
    return {
        type: SHOW_ALL_LIGHT_SWITCH,
        payload: click
    }
}

export function showOutlets(click) {
    return {
        type: SHOW_ALL_OUTLETS,
        payload: click
    }
}

export function showThermostats(click) {
    return {
        type: SHOW_ALL_THERMOSTATS,
        payload: click
    }
}

export function showSmartSpeakers(click) {
    return {
        type: SHOW_ALL_SMART_SPEAKERS,
        payload: click
    }
}

export function brandsToFilter(brands) {
    return {
        type: BRANDS_TO_FILTER,
        payload: brands
    }
}

export function deleteBrandsToFilter(brands) {
    return {
        type: REMOVE_BRANDS_TO_FILTER,
        payload: brands
    }
}


export function filterBrandsTF(click) {
    return {
        type: FILTER_BRANDS_TF,
        payload: click
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