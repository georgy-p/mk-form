import checkEmail from './checkEmail';
import checkNickname from './checkNickname';
import checkPassword from './checkPassword';

export const renderErrMessage = (text) => {
  const errorMessageEl = document.createElement('p');
  errorMessageEl.classList.add('text', 'text-danger');
  errorMessageEl.textContent = text;
  return errorMessageEl;
};

export const errors = {
  emptyErr: 'Поле обязательно для заполнения',
  passwordNick: 'Пароль не должен совпадать с Никнеймом',
  passwordEmail: 'Пароль не должен совпадать с e-mail',
  passwordNotConfirm: 'Введённые пароли не совпадают',
};

export default () => {
  checkEmail();
  checkNickname();
  checkPassword();
};
