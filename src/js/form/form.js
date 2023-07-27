import state from '../state';
import controls from './check/controls';

export const formElements = {
  email: document.getElementById('email'),
  nickname: document.getElementById('nickname'),
  password: document.getElementById('password'),
  passwordConfirm: document.getElementById('passwordConfirm'),
  rulesAccept: document.getElementById('rulesAccept'),
};

const { email, nickname, password, passwordConfirm, rulesAccept } =
  formElements;

controls();

export default () => {
  email.focus();
  email.addEventListener('input', (e) => {
    const { value } = e.target;
    state.form.email = value;
  });

  nickname.addEventListener('input', (e) => {
    const { value } = e.target;
    state.form.nickname = value;
  });

  password.addEventListener('input', (e) => {
    const { value } = e.target;
    state.form.password = value;
  });

  passwordConfirm.addEventListener('input', (e) => {
    const { value } = e.target;
    state.form.passwordConfirm = value;
  });

  rulesAccept.addEventListener('input', () => {
    state.form.rulesAccept = true;
  });
};
