import { put, call, takeEvery } from 'redux-saga/effects';
import { CITYLIST, TEMPRATURE } from '../Types/types';
import { asyncSaga } from '../utils';

export function* WeatherSaga() {
    yield takeEvery(CITYLIST.REQ, asyncSaga);
    yield takeEvery(TEMPRATURE.REQ, asyncSaga);
}
  
export default WeatherSaga;