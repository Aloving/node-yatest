import 'whatwg-fetch';
import 'babel-polyfill';

import myForm from './MyForm';

const _myForm = myForm;
window.MyForm = _myForm;

MyForm.setData({
  fio: 'Картуши Алексе',
  phone: '712312312333',
  email: 'kek@ya.ru',
});
