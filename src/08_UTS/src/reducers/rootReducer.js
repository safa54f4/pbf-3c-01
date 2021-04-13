
import { combineReducers } from 'redux'
import productReducers from "./productReducers";
import servicesReducers from "./servicesReducers"
import galleryReducers from "./galleryReducers"

const rootReducer = combineReducers({
    products: productReducers,
    services: servicesReducers,
    gallery: galleryReducers,

})

export default rootReducer
