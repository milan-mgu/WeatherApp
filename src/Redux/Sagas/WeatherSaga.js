import { put, call, takeEvery } from 'redux-saga/effects';
import { CITYLIST } from '../Types/types';
import { asyncSaga } from '../utils';

export function* WeatherSaga() {
    yield takeEvery(CITYLIST.REQ, asyncSaga);
}
  
export default WeatherSaga;