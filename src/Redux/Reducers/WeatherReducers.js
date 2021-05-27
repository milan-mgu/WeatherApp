import { CITYLIST, TEMPRATURE } from "../Types/types";
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CITYLIST.SUCCESS:
      return { ...state, getCitySuccess: true, cityData: action.payload }
    case CITYLIST.ERROR:
      return { ...state,getCityFailed: true, cityData: action.payload }
    case TEMPRATURE.SUCCESS:
      return { ...state, getTempratureSuccess: true, TempratureData: action.payload }
    case TEMPRATURE.ERROR:
      return { ...state, getTempratureFailed: true, TempratureData: action.payload }
    default:
      return state;
  }
}

