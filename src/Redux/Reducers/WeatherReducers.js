import { CITYLIST } from "../Types/types";
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CITYLIST.SUCCESS:
      return { ...state, getCitySuccess: true, cityData: action.payload }
    case CITYLIST.ERROR:
      return { ...state,getCityFailed: true, cityData: action.payload }
    // case SIGNUP.SUCCESS:
    //   return { ...state, signupSuccess: true, signupData: action.payload }
    // case SIGNUP.ERROR:
    //   return { ...state, signupFailed: true, signupData: action.payload }
    default:
      return state;
  }
}

