import { CITYLIST } from '../Types/types';
import Api from '../Services/Api';

export const getCityRequest = (params) => {
    return {
      type: CITYLIST.REQ,
      params,
      constant: CITYLIST,
      api: Api.getCityRequest
    }
}