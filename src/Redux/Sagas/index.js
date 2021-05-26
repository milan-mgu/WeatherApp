import { spawn } from 'redux-saga/effects';
import WeatherSaga from './WeatherSaga';

export default function* rootSaga() {
  yield* WeatherSaga();
}