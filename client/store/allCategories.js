import axios from 'axios'

// Action Types
const GET_CATEGORIES = 'GET_CATEGORIES'

// Action Creators
export const getAllCategories = categories => {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

// Thunk Creators

export const getCategories = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/category')
      dispatch(getAllCategories(data))
    } catch (err) {
      console.error(err)
    }
  }
}

// Initial State
const initState = []

export default function(state = initState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories
    default:
      return state
  }
}
