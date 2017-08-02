import { requestWithErr, requestWithSucc, requestWithProg } from './fetchMap';

function requestToServer() {
  const reqVariations = [requestWithErr, requestWithSucc, requestWithProg];
  const randomAction =
    reqVariations[Math.floor(Math.random() * reqVariations.length)];

  return randomAction();
}

export default requestToServer;
