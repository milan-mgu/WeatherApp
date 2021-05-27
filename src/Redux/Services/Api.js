import { apiRequest, apiGetRequest, apiBodyRequest, apiBodyWithParamsRequest, apiBodyWithParamsFormdataRequest } from '../utils';
import { ListViewBase } from 'react-native';

module.exports = {
  // auth api
  getCityRequest(params) {
    return apiBodyWithParamsRequest(params, `http://api.openweathermap.org/data/2.5/find?`, {}, 'GET');
  },
  getTemperatureRequest(params) {
    return apiBodyWithParamsRequest(params, `http://api.openweathermap.org/data/2.5/weather?`, {}, 'GET');
  }
}

