import { isEmpty } from './isEmpty';
import { formElements } from '../form';
import { errors, renderErrMessage } from './controls';

export default () => {
  const { email } = formElements;

  email.addEventListener('input', () => {
    const pEl = email.nextElementSibling;
    if (pEl && pEl.nodeName === 'P') {
      pEl.remove();
    }
  });

  email.addEventListener('blur', ({ target }) => {
    const { value } = target;
    if (isEmpty(value)) {
      const nextEl = email.nextElementSibling;
      if (nextEl.nodeName !== 'P') {
        const textEl = renderErrMessage(errors.emptyErr);
        email.insertAdjacentElement('afterend', textEl);
      }
    }
  });
};
