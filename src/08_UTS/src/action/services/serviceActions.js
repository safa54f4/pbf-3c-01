import axios from 'axios'
import {
  FETCH_SERVICES_REQUEST,
  FETCH_SERVICES_SUCCESS,
  FETCH_SERVICES_FAILURE
} from '../products/types'

export const fetchServices = () => {
  return (dispatch) => {
    dispatch(fetchServicesRequest())
    axios
        .get('http://localhost:3000/services')
        .then(response => {
          const services = response.data
          dispatch(fetchServicesSuccess(services))
        })
        .catch(error => {
          dispatch(fetchServicesFailure(error.message))
        })
  }
}
export const fetchServicesRequest = () => {
  return {
    type: FETCH_SERVICES_REQUEST
  }
}

export const fetchServicesSuccess = services => {
  return {
    type: FETCH_SERVICES_SUCCESS,
    payload: services
  }
}

export const fetchServicesFailure = error => {
  return {
    type: FETCH_SERVICES_FAILURE,
    payload: error
  }
}



