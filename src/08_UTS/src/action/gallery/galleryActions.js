import axios from 'axios'
import {
  FETCH_GALLERY_REQUEST,
  FETCH_GALLERY_SUCCESS,
  FETCH_GALLERY_FAILURE
} from '../products/types'

export const fetchGallery = () => {
  return (dispatch) => {
    dispatch(fetchGalleryRequest())
    axios
        .get('http://localhost:3000/gallery')
        .then(response => {
          const gallery = response.data
          dispatch(fetchGallerySuccess(gallery))
        })
        .catch(error => {
          dispatch(fetchGalleryFailure(error.message))
        })
  }
}
export const fetchGalleryRequest = () => {
  return {
    type: FETCH_GALLERY_REQUEST
  }
}

export const fetchGallerySuccess = gallery => {
  return {
    type: FETCH_GALLERY_SUCCESS,
    payload: gallery
  }
}

export const fetchGalleryFailure = error => {
  return {
    type: FETCH_GALLERY_FAILURE,
    payload: error
  }
}



