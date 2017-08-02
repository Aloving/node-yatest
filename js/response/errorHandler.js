import view from '../view';

function errorHandler(response) {
  const resultBlock = view.domEls.resultBlock;

  view.domActions.resetResultBlock();
  resultBlock.classList.add('error');
  resultBlock.innerText = response.reason;
}

export default errorHandler;
