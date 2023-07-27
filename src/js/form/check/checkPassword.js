import state from '../../state';
import { formElements } from '../form';
import renderErrs from '../render/renderErrs';
import { errors, renderErrMessage } from './controls';
import { isEmpty } from './isEmpty';

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

const isSame = (value1, value2) => value1 === value2;

export default () => {
  const { password } = formElements;
  const formErrsEl = document.querySelector('.form__errors');

  password.addEventListener('input', ({ target }) => {
    const pEl = formErrsEl.nextElementSibling;
    if (pEl && pEl.nodeName === 'P') {
      pEl.remove();
    }

    const { value } = target;
    const { nickname, email } = state.form;

    if (value.length > 0) {
      if (isSame(value, nickname)) {
        const textEl = renderErrMessage(errors.passwordNick);
        formErrsEl.insertAdjacentElement('afterend', textEl);
      } else if (isSame(value, email)) {
        const textEl = renderErrMessage(errors.passwordEmail);
        formErrsEl.insertAdjacentElement('afterend', textEl);
      } else {
        const pEl = formErrsEl.nextElementSibling;
        if (pEl && pEl.nodeName === 'P') {
          pEl.remove();
        }
        passwordCheck(value);
        renderErrs(checkStatus);
      }
    }
  });

  password.addEventListener('blur', ({ target }) => {
    const { value } = target;

    if (isEmpty(value)) {
      const nextEl = formErrsEl.nextElementSibling;
      if (nextEl.nodeName !== 'P') {
        const textEl = renderErrMessage(errors.emptyErr);
        formErrsEl.insertAdjacentElement('afterend', textEl);
      }
    }
  });
};
