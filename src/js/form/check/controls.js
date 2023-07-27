export const isEmpty = (value) => value.trim() === '';

export const isSame = (value1, value2) => value1 === value2;

export const getNextSubling = (el) => el.nextElementSibling;

export const addNextEl = (el, nextEl, direction = 'afterend') => {
  el.insertAdjacentElement(direction, nextEl);
};

export const isNodeP = (pEl) => pEl.nodeName === 'P';

export const errors = {
  emptyErr: 'Поле обязательно для заполнения',
  passwordNick: 'Пароль не должен совпадать с Никнеймом',
  passwordEmail: 'Пароль не должен совпадать с e-mail',
  passwordNotConfirm: 'Введённые пароли не совпадают',
};
