import { formElements } from '../form';
import {
  addNextEl,
  errors,
  getNextSubling,
  isEmpty,
  isNodeP,
} from './controls';
import renderErrMessage from '../render/renderErrMessage';
import { addRedBorder, removeRedBorder } from '../render/renderBorder';
import state from '../../state';
import checkForm from './checkForm';

const nicknameRegex = /^[a-zA-Z0-9_]{3,40}$/;
const latinsRegex = /^[a-zA-Z]/;
const symbolsRegex = /^[a-zA-Z0-9_]*$/;

const nickErrs = {
  firstLetter: 'Никнейм должен начинаться с буквы',
  length: 'Должно быть от 3 до 40 символов',
  latins: 'Должны быть латинские буквы',
  symbols: 'Нельзя использовать символы кроме цифр и нижнего подчеркивания (_)',
};

const nicknameCheck = (nickname) => {
  const { nicknameEl } = formElements;

  if (!nicknameRegex.test(nickname)) {
    if (nickname.length < 3 || nickname.length > 40) {
      const textEl = renderErrMessage(nickErrs.length);
      addNextEl(nicknameEl, textEl);
      addRedBorder(nicknameEl);
    }
    if (!latinsRegex.test(nickname)) {
      const textEl = renderErrMessage(nickErrs.firstLetter);
      addNextEl(nicknameEl, textEl);
      addRedBorder(nicknameEl);
    }
    if (!symbolsRegex.test(nickname)) {
      const textEl = renderErrMessage(nickErrs.symbols);
      addNextEl(nicknameEl, textEl);
      addRedBorder(nicknameEl);
    }
  } else {
    const pEl = getNextSubling(nicknameEl);
    if (isNodeP(pEl)) {
      removeRedBorder(nicknameEl);
      pEl.remove();
    }
  }
};

export default () => {
  const { nicknameEl } = formElements;

  nicknameEl.addEventListener('input', ({ target }) => {
    const { value } = target;
    state.form.nickname = value;
    checkForm();
    const pEl = getNextSubling(nicknameEl);
    if (isNodeP(pEl)) {
      removeRedBorder(nicknameEl);
      pEl.remove();
    }

    if (!isEmpty(value)) {
      nicknameCheck(value);
    }
  });

  nicknameEl.addEventListener('blur', ({ target }) => {
    const { value } = target;
    if (isEmpty(value)) {
      const nextEl = getNextSubling(nicknameEl);
      addRedBorder(nicknameEl);
      if (!isNodeP(nextEl)) {
        const textEl = renderErrMessage(errors.emptyErr);
        addNextEl(nicknameEl, textEl);
      }
    }
  });
};
