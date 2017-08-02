import view from '../view';

function successHandler() {
  const resultBlock = view.domEls.resultBlock;

  view.domActions.resetResultBlock();
  resultBlock.classList.add('success');
  resultBlock.innerText = 'Success';
}

export default successHandler;
