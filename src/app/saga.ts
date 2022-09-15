import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery, takeLatest, take, all } from 'redux-saga/effects'

function* fetchData() {
  console.log("fetch data");
}

function* fetchCityData() {
  console.log("fetch city data");
}

function* log(action: PayloadAction) {
  console.log("log", action);
}

export default function* rootSaga() {
  // console.log('root saga');
  // yield all([fetchCityData(), fetchData()])
  yield takeEvery("*", log);
}
