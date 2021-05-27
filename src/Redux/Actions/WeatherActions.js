import { CITYLIST, TEMPRATURE } from '../Types/types';
import Api from '../Services/Api';

export const getCityRequest = (params) => {
    return {
      type: CITYLIST.REQ,
      params,
      constant: CITYLIST,
      api: Api.getCityRequest
    }
}

export const getTemperatureRequest = (params) => {
  return {
    type: TEMPRATURE.REQ,
    params,
    constant: TEMPRATURE,
    api: Api.getTemperatureRequest
  }
}