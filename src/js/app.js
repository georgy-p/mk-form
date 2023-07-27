import modal from './modal/modal.js';
import form from './form/form.js';
import state from './state.js';
import formReset from './form/formReset.js';

const regBtn = document.querySelector('.content__btn');
const closeBtn = document.querySelector('.btn-close');

const initForm = {
  email: '',
  nickname: '',
  password: '',
  passwordConfirm: '',
  rulesAccept: false,
};

regBtn.addEventListener('click', () => {
  state.modalShow = true;
  return modal.open();
});

closeBtn.addEventListener('click', () => {
  state.modalShow = false;
  state.form = initForm;
  formReset();
  return modal.close();
});

form();

const formEl = document.querySelector('.form');

export default () => {
  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    state.formComplete = true;
    const result = JSON.stringify(state.form);
    console.log(result);
    formReset();
    state.modalShow = false;
    modal.close();
  });
};
