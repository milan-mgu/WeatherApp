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
    // console.log('saga..', response)
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
    // console.log('saga..', response)
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
  // console.log('p-->apiurl-->', url)
  // console.log('p-->body-->', JSON.stringify(formBody))
  // console.log('p-->headers-->', headers)
  // console.log('p-->method-->', method)
  return fetch(url, {
    method: method ? method : 'GET',
    headers: headers,
    body: method ? formBody : null
  }).then((response) => response.json())
}

export async function apiBodyRequest(params, apiUrl, headers, method) {
  console.log('p-->apiurl-->', apiUrl)
  console.log('p-->body-->', JSON.stringify(params))
  console.log('p-->headers-->', headers)
  console.log('p-->method-->', method)
  return fetch(`${apiUrl}`, {
    method: method,
    headers: headers,
    body: JSON.stringify(params),
  }).then((response) => response.json())
  // .then((res) => console.log(res, 'ress'))
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
  console.log('p-->apiurl-->', url)
  console.log('p-->body-->', JSON.stringify(params.jsonData))
  console.log('p-->headers-->', headers)
  console.log('p-->method-->', method)
  return fetch(`${url}`, {
    method: method,
    headers: headers,
    body: JSON.stringify(params.jsonData),
  }).then((response) => response.json())
}


export async function apiGetRequest(apiUrl, headers,method) {
  // console.log('apiUrl-->', apiUrl)
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
  // console.log('p-->apiurl-->', url)
  // console.log('p-->body-->', params.formData)
  // console.log('p-->headers-->', headers)
  // console.log('p-->method-->', method)
  return fetch(`${url}`, {
    method: method,
    headers: headers,
    body: params.formData,
  })
    .then((response) => response.json())
}

