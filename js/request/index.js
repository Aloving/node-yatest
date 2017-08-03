import view from '../view';

function requestToServer() {
  const form = view.domEls.form;
  const formAction = form.getAttribute('action');

  return fetch(formAction).then(res => res.json());
}

export default requestToServer;
