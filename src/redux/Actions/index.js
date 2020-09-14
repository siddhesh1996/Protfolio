import {
  IS_API_FETCHED
} from '../ActionTypes';

export const isAPIFETCHING = (payload) => {
  return {
    type: IS_API_FETCHED,
    payload: payload
  }
}