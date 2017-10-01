

// import * as getImageClicked from '../services/getImages'

const initialState = {
    loading: false,

    price1Filter: false,
    price2Filter: false,
    price3Filter: false,
    price4Filter: false,
    price5Filter: false,

    filterPrice: false,


    
    
    brands_to_filter: [],
    filterBrands: false,
    
    ready: false,
    
    
    allProducts: false,
    all_products_brands: [],
    all_products_brands_div: [],

// light bulbs
    light_bulb: false,
    light_bulb_brands: [],
    light_bulb_brands_div: [],


    light_switch: false,
    light_switch_brands: [],
    light_switch_brands_div: [],


    outlet: false,
    outlet_brands: [],
    outlet_brands_div: [],

    thermostat: false,
    thermostat_brands: [],
    thermostat_brands_div: [],

    smart_speaker: false,
    smart_speaker_brands: [],
    smart_speaker_brands_div: [],

    left_NavBar: false,
    
    home_page: false,

}


const IS_READY = 'IS_READY';


const GET_USER_INFO = 'GET_USER_INFO';

const HOME_PAGE = 'HOME_PAGE'

const SHOP_PAGE = 'SHOP_PAGE'

const PRICE_1_FILTER = 'PRICE_1_FILTER'
const PRICE_2_FILTER = 'PRICE_2_FILTER'
const PRICE_3_FILTER = 'PRICE_3_FILTER'
const PRICE_4_FILTER = 'PRICE_4_FILTER'
const PRICE_5_FILTER = 'PRICE_5_FILTER'

const FILTER_PRICE_TF = 'FILTER_PRICE_TF'

const PRICE_TO_FILTER = 'PRICE_TO_FILTER'
const REMOVE_PRICE_TO_FILTER = 'REMOVE_PRICE_TO_FILTER'

const FILTER_BRANDS_TF = 'FILTER_BRANDS_TF'

const BRANDS_TO_FILTER = 'BRANDS_TO_FILTER'
const REMOVE_BRANDS_TO_FILTER = 'REMOVE_BRANDS_TO_FILTER'

const UPDATED_PRODUCTID = 'UPDATE_PRODUCTID';
const SHOW_ALL_PRODUCTS = 'SHOW_ALL_PRODUCTS';




// LIGHT_BULBS 
const SHOW_ALL_LIGHTS = 'SHOW_ALL_LIGHTS';
const LIGHT_BULB_BRANDS = 'GET_LIGHT_BULB_BRANDS';
const LIGHT_BULB_BRANDS_DIV = 'LIGHT_BULB_BRANDS_DIV'


const SHOW_ALL_LIGHT_SWITCH = 'SHOW_ALL_LIGHT_SWTICH';
const LIGHT_SWITCH_BRANDS = 'LIGHT_SWITCH_BRANDS';
const LIGHT_SWITCH_BRANDS_DIV = 'LIGHT_SWITCH_BRANDS_DIV'


const SHOW_ALL_OUTLETS = 'SHOW_ALL_OUTLETS';
const OUTLET_BRANDS = 'OUTLET_BRANDS';
const OUTLET_BRANDS_DIV = 'OUTLET_BRANDS_DIV'


const SHOW_ALL_THERMOSTATS = 'SHOW_ALL_THERMOSTATS';
const THERMOSTAT_BRANDS = 'THERMOSTAT_BRANDS';
const THERMOSTAT_BRANDS_DIV = 'THERMOSTAT_BRANDS_DIV'

const SHOW_ALL_SMART_SPEAKERS = 'SHOW_ALL_SMART_SPEAKERS';
const SMART_SPEAKER_BRANDS = 'SMART_SPEAKER_BRANDS';
const SMART_SPEAKER_BRANDS_DIV = 'SMART_SPEAKER_BRANDS_DIV'

function leftNavBarReducer(state = initialState, action) {
    var x = state.brands_to_filter
    var q = state.price_to_filter
    //console.log('TYPE ', action.type)
    // console.log('action.payload: ', action.payload)
    switch (action.type) {


        case IS_READY:
            return (Object.assign({}, state, {ready: action.input}))

        // LIGHT BULBS


        case SHOW_ALL_LIGHTS:
            return Object.assign({}, state, { light_bulb: action.payload });


        case LIGHT_BULB_BRANDS:
            return Object.assign({}, state, {light_bulb_brands: action.payload})

        case LIGHT_BULB_BRANDS_DIV:
            return Object.assign({}, state, {light_bulb_brands_div: action.payload})



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
            // console.log("J: fitlerted", j)
            return Object.assign({}, state, { brands_to_filter: j })

        case FILTER_BRANDS_TF:
            return Object.assign({}, state, { filterBrands: action.payload });


        case PRICE_TO_FILTER:
            return Object.assign({}, state, { price_to_filter: [...state.price_to_filter, action.payload] });

        case REMOVE_PRICE_TO_FILTER:
            var p = q.filter(price_to_filter => price_to_filter !== action.payload)
            return Object.assign({}, state, { price_to_filter: p })

        case FILTER_PRICE_TF:
            return Object.assign({}, state, { filterPrice: action.payload });


        case PRICE_1_FILTER:
            return Object.assign({}, state, { price1Filter: action.payload })

        case PRICE_2_FILTER:
            return Object.assign({}, state, { price2Filter: action.payload })

        case PRICE_3_FILTER:
            return Object.assign({}, state, { price3Filter: action.payload })

        case PRICE_4_FILTER:
            return Object.assign({}, state, { price4Filter: action.payload })

        case PRICE_5_FILTER:
            return Object.assign({}, state, { price5Filter: action.payload })

        case HOME_PAGE:
            return Object.assign({}, state, { left_NavBar: false, home_page: true })

        case SHOP_PAGE:
            return Object.assign({}, state, { left_NavBar: true, home_page: false })

        
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


export function showAllProducts(click) {
    return {
        type: SHOW_ALL_PRODUCTS,
        payload: click
    }
}


export function isReady(click){
    return {
        type: IS_READY,
        payload: click
    }
}


// LIGHT BULBS


export function showLights(click) {
    return {
        type: SHOW_ALL_LIGHTS,
        payload: click
    }
}


export function lightBulbBrands(brands){
    return {
        type: LIGHT_BULB_BRANDS,
        payload: brands
    }
}


export function lightBulbBrandsDiv(div){
    return {
        type: LIGHT_BULB_BRANDS_DIV,
        payload: div
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



export function priceToFilter(price) {
    return {
        type: PRICE_TO_FILTER,
        payload: price
    }
}

export function deletePriceToFilter(price) {
    return {
        type: REMOVE_PRICE_TO_FILTER,
        payload: price
    }
}


export function filterPriceTF(click) {
    return {
        type: FILTER_PRICE_TF,
        payload: click
    }
}


export function price1filterTF(click) {
    return {
        type: PRICE_1_FILTER,
        payload: click
    }
}

export function price2filterTF(click) {
    return {
        type: PRICE_2_FILTER,
        payload: click
    }
}

export function price3filterTF(click) {
    return {
        type: PRICE_3_FILTER,
        payload: click
    }
}
export function price4filterTF(click) {
    return {
        type: PRICE_4_FILTER,
        payload: click
    }
}
export function price5filterTF(click) {
    return {
        type: PRICE_5_FILTER,
        payload: click
    }
}



export function homeButton() {
    return {
        type: HOME_PAGE
    }
}

export function shopButton() {
    return {
        type: SHOP_PAGE
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



export default leftNavBarReducer
