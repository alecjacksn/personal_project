import * as getItemClicked from '../services/getItem'
// import * as getImageClicked from '../services/getImages'

const initialState = {
    productid: '',
    item: [],
    images: [],
    loading: false,

    price1Filter: false,
    price2Filter: false,
    price3Filter: false,
    price4Filter: false,
    price5Filter: false,

    filterPrice: false,

    brands_to_filter: [],
    filterBrands: false,

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
const SHOW_ALL_LIGHTS = 'SHOW_ALL_LIGHTS';
const SHOW_ALL_LIGHT_SWITCH = 'SHOW_ALL_LIGHT_SWTICH';
const SHOW_ALL_OUTLETS = 'SHOW_ALL_OUTLETS';
const SHOW_ALL_THERMOSTATS = 'SHOW_ALL_THERMOSTATS';
const SHOW_ALL_SMART_SPEAKERS = 'SHOW_ALL_SMART_SPEAKERS';


function reducer(state = initialState, action) {
    var x = state.brands_to_filter
    var q = state.price_to_filter
    //console.log('TYPE ', action.type)
    // console.log('action.payload: ', action.payload)
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
// componentDidMount() {
//     axios.get('http://localhost:3232/api/products/lights/images').then(res => {
//       this.setState({
//         images: res.data
//       })
//     })
//     if (this.props.price1Filter) {
//       axios.get('http://localhost:3232/api/filterbyprice?producttype=light_bulb').then(res => {
//         this.setState({
//           items: res.data,

//         })
//       })
//     } else {
//       axios.get('http://localhost:3232/api/products/lights').then(res => {
//         this.setState({
//           items: res.data,

//         })
//       })
//     }
//   }