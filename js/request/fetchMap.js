function requestWithErr() {
  return fetch('/js/mock_res/error.json').then(res => res.json());
}

function requestWithProg() {
  return fetch('/js/mock_res/progress.json').then(res => res.json());
}

function requestWithSucc() {
  return fetch('/js/mock_res/success.json').then(res => res.json());
}

export { requestWithErr, requestWithProg, requestWithSucc };
