import {
    FETCH_GALLERY_REQUEST,
    FETCH_GALLERY_SUCCESS,
    FETCH_GALLERY_FAILURE
  } from '../action/products/types'
  
  const initialState = {
    loading: false,
    gallery: [],
    error: ''
  }
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_GALLERY_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_GALLERY_SUCCESS:
        return {
          loading: false,
          gallery: action.payload,
          error: ''
        }
      case FETCH_GALLERY_FAILURE:
        return {
          loading: false,
          gallery: [],
          error: action.payload
        }
      default: return state
    }
  }
  
  export default reducer
  