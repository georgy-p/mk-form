import state from '../../state';
import { formElements } from '../form';
import { addRedBorder, removeRedBorder } from '../render/renderBorder';
import renderErrMessage from '../render/renderErrMessage';
import renderPassErrs from '../render/renderPassErrs';
import checkForm from './checkForm';
import {
  errors,
  getNextSubling,
  isEmpty,
  isSame,
  isNodeP,
  addNextEl,
} from './controls';

const checkStatus = {
  lengthErr: 'default',
  numberErr: 'default',
  letterErr: 'default',
};

const numRegex = /\d+/;
const letterRegex = /(?=.*[A-Z])(?=.*[a-z])/;

const checkLength = (value) => value.length < 6 || value.length > 32;
const checkNumbers = (value) => !numRegex.test(value);
const checkLetter = (value) => !letterRegex.test(value);

const passwordCheck = (value) => {
  const isLengthErr = checkLength(value);
  const isNumbersErr = checkNumbers(value);
  const isLetterErr = checkLetter(value);

  checkStatus.lengthErr = isLengthErr ? 'error' : 'ok';
  checkStatus.numberErr = isNumbersErr ? 'error' : 'ok';
  checkStatus.letterErr = isLetterErr ? 'error' : 'ok';
};

export default () => {
  const { passwordEl } = formElements;
  const formErrsEl = document.querySelector('.form__errors');

  passwordEl.addEventListener('input', ({ target }) => {
    const { value } = target;
    state.form.password = value;
    checkForm();

    const pEl = getNextSubling(formErrsEl);
    removeRedBorder(passwordEl);
    if (isNodeP(pEl)) {
      pEl.remove();
    }
    const { nickname, email } = state.form;

    if (!isEmpty(value)) {
      if (isSame(value, nickname)) {
        addRedBorder(passwordEl);
        const textEl = renderErrMessage(errors.passwordNick);
        addNextEl(formErrsEl, textEl);
      } else if (isSame(value, email)) {
        addRedBorder(passwordEl);
        const textEl = renderErrMessage(errors.passwordEmail);
        addNextEl(formErrsEl, textEl);
      } else {
        removeRedBorder(passwordEl);
        const pEl = getNextSubling(formErrsEl);
        if (pEl && pEl.nodeName === 'P') {
          pEl.remove();
        }
        passwordCheck(value);
        renderPassErrs(checkStatus);
      }
    }
  });

  passwordEl.addEventListener('blur', ({ target }) => {
    const { value } = target;

    if (isEmpty(value)) {
      const nextEl = getNextSubling(formErrsEl);
      addRedBorder(passwordEl);
      if (!isNodeP(nextEl)) {
        const textEl = renderErrMessage(errors.emptyErr);
        addNextEl(formErrsEl, textEl);
      }
    }
  });
};
