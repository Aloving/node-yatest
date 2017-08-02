import requestToServer from '../request';
import view from '../view';
import responseHandler from './';

function progressHandler(response) {
  const resultBlock = view.domEls.resultBlock;

  view.domActions.resetResultBlock();
  resultBlock.classList.add('progress');
  setTimeout(() => {
    requestToServer().then(responseHandler);
  }, response.timeout);

  return 'kek';
}

export default progressHandler;
