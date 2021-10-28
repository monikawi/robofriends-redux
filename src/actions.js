import { apiCall } from './api/api'

import { 
  CHANGE_SEARCH_FIELD, 
  REQUEST_ROBOTS_PENDING,  
  REQUEST_ROBOTS_RESOLVED,
  REQUEST_ROBOTS_REJECTED
} from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestRobots = () => (dispatch) => {
  dispatch({type: REQUEST_ROBOTS_PENDING});
  apiCall('https://jsonplaceholder.typicode.com/users')
    .then(data => dispatch({type: REQUEST_ROBOTS_RESOLVED, payload: data}))
    .catch(error => dispatch({type: REQUEST_ROBOTS_REJECTED, payload: error}))
}