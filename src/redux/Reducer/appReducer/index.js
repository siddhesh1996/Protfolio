import {
  IS_API_FETCHED
} from '../../ActionTypes'

const initialState = {
  isFetched: false
}

export default function appReducer(state = initialState, action) {
  switch(action.type) {
    case IS_API_FETCHED: {
      return {
        ...state,
        isFetched: true
      }
    }
    default:
      return state;
  }
}