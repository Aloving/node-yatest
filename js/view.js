import VMasker from 'vanilla-masker';
import myForm from './MyForm';

const view = (() => {
  const form = document.getElementById('user-form');
  const fio = form.querySelector('#fio');
  const email = form.querySelector('#email');
  const phone = form.querySelector('#phone');
  const submitBtn = form.querySelector('#submitButton');
  const resultBlock = document.getElementById('resultContainer');
  const formFields = {
    fio,
    email,
    phone,
  };

  VMasker(phone).maskPattern('+9(999)999-99-99');

  form.addEventListener('submit', evt => myForm.submit(evt));

  function borderError(fields) {
    fields.forEach(field => {
      formFields[field].classList.add('error');
    });
  }

  function resetForm() {
    Object.keys(formFields).forEach(field => {
      formFields[field].classList.remove('error');
    });
  }

  function disableBtn() {
    submitBtn.setAttribute('disabled', 'disabled');
  }

  function resetResultBlock() {
    resultBlock.classList.remove('error', 'success', 'progress');
  }

  const domEls = {
    resultBlock,
    form,
    formFields,
  };

  const domActions = {
    borderError,
    resetForm,
    disableBtn,
    resetResultBlock,
  };

  return {
    domEls,
    domActions,
  };
})();

export default view;
