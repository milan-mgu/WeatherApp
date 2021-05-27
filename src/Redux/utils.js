import { put, call } from 'redux-saga/effects';

export function asyncAction(action) {
  return {
    REQ: `${action}_request`,
    SUCCESS: `${action}_success`,
    ERROR: `${action}_error`,
  };
}

export function* asyncSaga({ params, api, constant }) {
  try {
    const response = yield call(api, params);
    yield put({
      type: constant.SUCCESS, payload: response
    });
  } catch (error) {
    yield put({
      type: constant.ERROR, payload: error
    });
  }
};

export function* asyncSagaNoParams({ api, constant }) {
  try {
    const response = yield call(api);
    yield put({
      type: constant.SUCCESS, payload: response
    });
  } catch (error) {
    yield put({
      type: constant.ERROR, payload: error
    });
  }
};

export async function apiRequest(params, apiUrl, headers, method) {
  var formBody = [];
  for (var property in params) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(params[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  url = method ? apiUrl : `${apiUrl}${formBody}`
  return fetch(url, {
    method: method ? method : 'GET',
    headers: headers,
    body: method ? formBody : null
  }).then((response) => response.json())
}

export async function apiBodyRequest(params, apiUrl, headers, method) {
  return fetch(`${apiUrl}`, {
    method: method,
    headers: headers,
    body: JSON.stringify(params),
  }).then((response) => response.json())
}

export async function apiBodyWithParamsRequest(params, apiUrl, headers, method) {

  var formBody = [];
  for (var property in params) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(params[property]);
    if (encodedKey != 'jsonData') {
      formBody.push(encodedKey + "=" + encodedValue);
    }
  }
  formBody = formBody.join("&");
  url = `${apiUrl}${formBody}`
  return fetch(`${url}`, {
    method: method,
    headers: headers,
    body: JSON.stringify(params.jsonData),
  }).then((response) => response.json())
}


export async function apiGetRequest(apiUrl, headers,method) {
  return fetch(`${apiUrl}`, {
    method: method ? method : 'GET',
    headers: headers,
  })
    .then((response) => response.json())
}

export async function apiBodyWithParamsFormdataRequest(params, apiUrl, headers, method) {
  var formBody = [];
  for (var property in params) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(params[property]);
    if (encodedKey != 'formData') {
      formBody.push(encodedKey + "=" + encodedValue);
    }
  }
  formBody = formBody.join("&");
  url = `${apiUrl}${formBody}`
  return fetch(`${url}`, {
    method: method,
    headers: headers,
    body: params.formData,
  })
    .then((response) => response.json())
}

