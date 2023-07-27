const errors = {
  default: {
    pClass: 'text-default',
    img: 'img/default.png',
  },
  error: {
    pClass: 'text-danger',
    img: 'img/error.png',
  },
  ok: {
    pClass: 'text-ok',
    img: 'img/ok.png',
  },
};

export const getCheckStyle = (errType) => errors[errType];

const lengthErrTextEl = document.getElementById('lengthErr');
const numberErrTextEl = document.getElementById('numberErr');
const letterErrTextEl = document.getElementById('letterErr');

const lengthImgEl = lengthErrTextEl.previousElementSibling;
const numberImgEl = numberErrTextEl.previousElementSibling;
const letterImgEl = letterErrTextEl.previousElementSibling;

export default (errsStatus) => {
  const { lengthErr, numberErr, letterErr } = errsStatus;

  lengthErrTextEl.classList.remove('text-danger', 'text-ok');
  lengthErrTextEl.classList.add(errors[lengthErr].pClass);
  lengthImgEl.src = errors[lengthErr].img;

  numberErrTextEl.classList.remove('text-danger', 'text-ok');
  numberErrTextEl.classList.add(errors[numberErr].pClass);
  numberImgEl.src = errors[numberErr].img;

  letterErrTextEl.classList.remove('text-danger', 'text-ok');
  letterErrTextEl.classList.add(errors[letterErr].pClass);
  letterImgEl.src = errors[letterErr].img;
};
