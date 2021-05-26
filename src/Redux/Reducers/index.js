import { combineReducers } from 'redux';

import WeatherReducers from './WeatherReducers';

let rootReducer = combineReducers({
  Weather: WeatherReducers,
});

export default rootReducer;