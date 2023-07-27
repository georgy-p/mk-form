/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal/modal.js */ "./src/js/modal/modal.js");
/* harmony import */ var _form_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form/form.js */ "./src/js/form/form.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.js */ "./src/js/state.js");
/* harmony import */ var _form_formReset_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/formReset.js */ "./src/js/form/formReset.js");




const regBtn = document.querySelector('.content__btn');
const closeBtn = document.querySelector('.btn-close');
const initForm = {
  email: '',
  nickname: '',
  password: '',
  passwordConfirm: '',
  rulesAccept: false
};
regBtn.addEventListener('click', () => {
  _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].modalShow = true;
  return _modal_modal_js__WEBPACK_IMPORTED_MODULE_0__["default"].open();
});
closeBtn.addEventListener('click', () => {
  _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].modalShow = false;
  _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].form = initForm;
  (0,_form_formReset_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return _modal_modal_js__WEBPACK_IMPORTED_MODULE_0__["default"].close();
});
(0,_form_form_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
const formEl = document.querySelector('.form');
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  formEl.addEventListener('submit', e => {
    e.preventDefault();
    _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].formComplete = true;
    const result = JSON.stringify(_state_js__WEBPACK_IMPORTED_MODULE_2__["default"].form);
    console.log(result);
    (0,_form_formReset_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    _state_js__WEBPACK_IMPORTED_MODULE_2__["default"].modalShow = false;
    _modal_modal_js__WEBPACK_IMPORTED_MODULE_0__["default"].close();
  });
});

/***/ }),

/***/ "./src/js/form/check/checkEmail.js":
/*!*****************************************!*\
  !*** ./src/js/form/check/checkEmail.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form */ "./src/js/form/form.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/js/form/check/controls.js");
/* harmony import */ var _render_renderErrMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/renderErrMessage */ "./src/js/form/render/renderErrMessage.js");
/* harmony import */ var _render_renderBorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render/renderBorder */ "./src/js/form/render/renderBorder.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state */ "./src/js/state.js");
/* harmony import */ var _checkForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkForm */ "./src/js/form/check/checkForm.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const {
    emailEl
  } = _form__WEBPACK_IMPORTED_MODULE_0__.formElements;
  emailEl.addEventListener('input', _ref => {
    let {
      target
    } = _ref;
    const {
      value
    } = target;
    _state__WEBPACK_IMPORTED_MODULE_4__["default"].form.email = value;
    (0,_checkForm__WEBPACK_IMPORTED_MODULE_5__["default"])();
    const pEl = (0,_controls__WEBPACK_IMPORTED_MODULE_1__.getNextSubling)(emailEl);
    if ((0,_controls__WEBPACK_IMPORTED_MODULE_1__.isNodeP)(pEl)) {
      (0,_render_renderBorder__WEBPACK_IMPORTED_MODULE_3__.removeRedBorder)(emailEl);
      pEl.remove();
    }
  });
  emailEl.addEventListener('blur', _ref2 => {
    let {
      target
    } = _ref2;
    const {
      value
    } = target;
    if ((0,_controls__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(value)) {
      const nextEl = (0,_controls__WEBPACK_IMPORTED_MODULE_1__.getNextSubling)(emailEl);
      (0,_render_renderBorder__WEBPACK_IMPORTED_MODULE_3__.addRedBorder)(emailEl);
      if (!(0,_controls__WEBPACK_IMPORTED_MODULE_1__.isNodeP)(nextEl)) {
        const textEl = (0,_render_renderErrMessage__WEBPACK_IMPORTED_MODULE_2__["default"])(_controls__WEBPACK_IMPORTED_MODULE_1__.errors.emptyErr);
        (0,_controls__WEBPACK_IMPORTED_MODULE_1__.addNextEl)(emailEl, textEl);
      }
    }
  });
});

/***/ }),

/***/ "./src/js/form/check/checkForm.js":
/*!****************************************!*\
  !*** ./src/js/form/check/checkForm.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./src/js/state.js");

const validateForm = () => {
  const {
    form
  } = _state__WEBPACK_IMPORTED_MODULE_0__["default"];
  const keys = Object.keys(form);
  const validateResult = [];
  keys.forEach(el => {
    if (el === 'rulesAccept') {
      if (!form[el]) {
        validateResult.push(el);
      }
    } else {
      if (form[el] === '') {
        validateResult.push(el);
      }
    }
  });
  return validateResult;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const regBtn = document.querySelector('.content__btn');
  const submitBtnEl = document.querySelector('.submit__btn');
  const validateResult = validateForm();
  if (validateResult.length === 0) {
    submitBtnEl.disabled = false;
    submitBtnEl.classList.remove('disabled');
    regBtn.classList.add('content__btn-ok');
    regBtn.disabled = true;
  }
});

/***/ }),

/***/ "./src/js/form/check/checkNickname.js":
/*!********************************************!*\
  !*** ./src/js/form/check/checkNickname.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form */ "./src/js/form/form.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/js/form/check/controls.js");
/* harmony import */ var _render_renderErrMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/renderErrMessage */ "./src/js/form/render/renderErrMessage.js");
/* harmony import */ var _render_renderBorder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render/renderBorder */ "./src/js/form/render/renderBorder.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state */ "./src/js/state.js");
/* harmony import */ var _checkForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkForm */ "./src/js/form/check/checkForm.js");






const nicknameRegex = /^[a-zA-Z0-9_]{3,40}$/;
const latinsRegex = /^[a-zA-Z]/;
const symbolsRegex = /^[a-zA-Z0-9_]*$/;
const nickErrs = {
  firstLetter: 'Никнейм должен начинаться с буквы',
  length: 'Должно быть от 3 до 40 символов',
  latins: 'Должны быть латинские буквы',
  symbols: 'Нельзя использовать символы кроме цифр и нижнего подчеркивания (_)'
};
const nicknameCheck = nickname => {
  const {
    nicknameEl
  } = _form__WEBPACK_IMPORTED_MODULE_0__.formElements;
  if (!nicknameRegex.test(nickname)) {
    if (nickname.length < 3 || nickname.length > 40) {
      const textEl = (0,_render_renderErrMessage__WEBPACK_IMPORTED_MODULE_2__["default"])(nickErrs.length);
      (0,_controls__WEBPACK_IMPORTED_MODULE_1__.addNextEl)(nicknameEl, textEl);
      (0,_render_renderBorder__WEBPACK_IMPORTED_MODULE_3__.addRedBorder)(nicknameEl);
    }
    if (!latinsRegex.test(nickname)) {
      const textEl = (0,_render_renderErrMessage__WEBPACK_IMPORTED_MODULE_2__["default"])(nickErrs.firstLetter);
      (0,_controls__WEBPACK_IMPORTED_MODULE_1__.addNextEl)(nicknameEl, textEl);
      (0,_render_renderBorder__WEBPACK_IMPORTED_MODULE_3__.addRedBorder)(nicknameEl);
    }
    if (!symbolsRegex.test(nickname)) {
      const textEl = (0,_render_renderErrMessage__WEBPACK_IMPORTED_MODULE_2__["default"])(nickErrs.symbols);
      (0,_controls__WEBPACK_IMPORTED_MODULE_1__.addNextEl)(nicknameEl, textEl);
      (0,_render_renderBorder__WEBPACK_IMPORTED_MODULE_3__.addRedBorder)(nicknameEl);
    }
  } else {
    const pEl = (0,_controls__WEBPACK_IMPORTED_MODULE_1__.getNextSubling)(nicknameEl);
    if ((0,_controls__WEBPACK_IMPORTED_MODULE_1__.isNodeP)(pEl)) {
      (0,_render_renderBorder__WEBPACK_IMPORTED_MODULE_3__.removeRedBorder)(nicknameEl);
      pEl.remove();
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const {
    nicknameEl
  } = _form__WEBPACK_IMPORTED_MODULE_0__.formElements;
  nicknameEl.addEventListener('input', _ref => {
    let {
      target
    } = _ref;
    const {
      value
    } = target;
    _state__WEBPACK_IMPORTED_MODULE_4__["default"].form.nickname = value;
    (0,_checkForm__WEBPACK_IMPORTED_MODULE_5__["default"])();
    const pEl = (0,_controls__WEBPACK_IMPORTED_MODULE_1__.getNextSubling)(nicknameEl);
    if ((0,_controls__WEBPACK_IMPORTED_MODULE_1__.isNodeP)(pEl)) {
      (0,_render_renderBorder__WEBPACK_IMPORTED_MODULE_3__.removeRedBorder)(nicknameEl);
      pEl.remove();
    }
    if (!(0,_controls__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(value)) {
      nicknameCheck(value);
    }
  });
  nicknameEl.addEventListener('blur', _ref2 => {
    let {
      target
    } = _ref2;
    const {
      value
    } = target;
    if ((0,_controls__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(value)) {
      const nextEl = (0,_controls__WEBPACK_IMPORTED_MODULE_1__.getNextSubling)(nicknameEl);
      (0,_render_renderBorder__WEBPACK_IMPORTED_MODULE_3__.addRedBorder)(nicknameEl);
      if (!(0,_controls__WEBPACK_IMPORTED_MODULE_1__.isNodeP)(nextEl)) {
        const textEl = (0,_render_renderErrMessage__WEBPACK_IMPORTED_MODULE_2__["default"])(_controls__WEBPACK_IMPORTED_MODULE_1__.errors.emptyErr);
        (0,_controls__WEBPACK_IMPORTED_MODULE_1__.addNextEl)(nicknameEl, textEl);
      }
    }
  });
});

/***/ }),

/***/ "./src/js/form/check/checkPassRepit.js":
/*!*********************************************!*\
  !*** ./src/js/form/check/checkPassRepit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./src/js/state.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form */ "./src/js/form/form.js");
/* harmony import */ var _render_renderBorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/renderBorder */ "./src/js/form/render/renderBorder.js");
/* harmony import */ var _render_renderErrMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render/renderErrMessage */ "./src/js/form/render/renderErrMessage.js");
/* harmony import */ var _checkForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkForm */ "./src/js/form/check/checkForm.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./src/js/form/check/controls.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const {
    passwordConfirmEl
  } = _form__WEBPACK_IMPORTED_MODULE_1__.formElements;
  passwordConfirmEl.addEventListener('input', _ref => {
    let {
      target
    } = _ref;
    const {
      value
    } = target;
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].form.passwordConfirm = value;
    (0,_checkForm__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const pEl = (0,_controls__WEBPACK_IMPORTED_MODULE_5__.getNextSubling)(passwordConfirmEl);
    if ((0,_controls__WEBPACK_IMPORTED_MODULE_5__.isNodeP)(pEl)) {
      passwordConfirmEl.classList.remove('form__input-danger');
      pEl.remove();
    }
    if (value.length > 0) {
      if (!(0,_controls__WEBPACK_IMPORTED_MODULE_5__.isSame)(value, _state__WEBPACK_IMPORTED_MODULE_0__["default"].form.password)) {
        (0,_render_renderBorder__WEBPACK_IMPORTED_MODULE_2__.addRedBorder)(passwordConfirmEl);
        const textEl = (0,_render_renderErrMessage__WEBPACK_IMPORTED_MODULE_3__["default"])(_controls__WEBPACK_IMPORTED_MODULE_5__.errors.passwordNotConfirm);
        (0,_controls__WEBPACK_IMPORTED_MODULE_5__.addNextEl)(passwordConfirmEl, textEl);
      } else {
        (0,_render_renderBorder__WEBPACK_IMPORTED_MODULE_2__.removeRedBorder)(passwordConfirmEl);
      }
    }
  });
  passwordConfirmEl.addEventListener('blur', _ref2 => {
    let {
      target
    } = _ref2;
    const {
      value
    } = target;
    if ((0,_controls__WEBPACK_IMPORTED_MODULE_5__.isEmpty)(value)) {
      const nextEl = (0,_controls__WEBPACK_IMPORTED_MODULE_5__.getNextSubling)(passwordConfirmEl);
      passwordConfirmEl.classList.add('form__input-danger');
      if (!(0,_controls__WEBPACK_IMPORTED_MODULE_5__.isNodeP)(nextEl)) {
        const textEl = (0,_render_renderErrMessage__WEBPACK_IMPORTED_MODULE_3__["default"])(_controls__WEBPACK_IMPORTED_MODULE_5__.errors.emptyErr);
        (0,_controls__WEBPACK_IMPORTED_MODULE_5__.addNextEl)(passwordConfirmEl, textEl);
      }
    }
  });
});

/***/ }),

/***/ "./src/js/form/check/checkPassword.js":
/*!********************************************!*\
  !*** ./src/js/form/check/checkPassword.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./src/js/state.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form */ "./src/js/form/form.js");
/* harmony import */ var _render_renderBorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/renderBorder */ "./src/js/form/render/renderBorder.js");
/* harmony import */ var _render_renderErrMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render/renderErrMessage */ "./src/js/form/render/renderErrMessage.js");
/* harmony import */ var _render_renderPassErrs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render/renderPassErrs */ "./src/js/form/render/renderPassErrs.js");
/* harmony import */ var _checkForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkForm */ "./src/js/form/check/checkForm.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls */ "./src/js/form/check/controls.js");







const checkStatus = {
  lengthErr: 'default',
  numberErr: 'default',
  letterErr: 'default'
};
const numRegex = /\d+/;
const letterRegex = /(?=.*[A-Z])(?=.*[a-z])/;
const checkLength = value => value.length < 6 || value.length > 32;
const checkNumbers = value => !numRegex.test(value);
const checkLetter = value => !letterRegex.test(value);
const passwordCheck = value => {
  const isLengthErr = checkLength(value);
  const isNumbersErr = checkNumbers(value);
  const isLetterErr = checkLetter(value);
  checkStatus.lengthErr = isLengthErr ? 'error' : 'ok';
  checkStatus.numberErr = isNumbersErr ? 'error' : 'ok';
  checkStatus.letterErr = isLetterErr ? 'error' : 'ok';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const {
    passwordEl
  } = _form__WEBPACK_IMPORTED_MODULE_1__.formElements;
  const formErrsEl = document.querySelector('.form__errors');
  passwordEl.addEventListener('input', _ref => {
    let {
      target
    } = _ref;
    const {
      value
    } = target;
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].form.password = value;
    (0,_checkForm__WEBPACK_IMPORTED_MODULE_5__["default"])();
    const pEl = (0,_controls__WEBPACK_IMPORTED_MODULE_6__.getNextSubling)(formErrsEl);
    (0,_render_renderBorder__WEBPACK_IMPORTED_MODULE_2__.removeRedBorder)(passwordEl);
    if ((0,_controls__WEBPACK_IMPORTED_MODULE_6__.isNodeP)(pEl)) {
      pEl.remove();
    }
    const {
      nickname,
      email
    } = _state__WEBPACK_IMPORTED_MODULE_0__["default"].form;
    if (!(0,_controls__WEBPACK_IMPORTED_MODULE_6__.isEmpty)(value)) {
      if ((0,_controls__WEBPACK_IMPORTED_MODULE_6__.isSame)(value, nickname)) {
        (0,_render_renderBorder__WEBPACK_IMPORTED_MODULE_2__.addRedBorder)(passwordEl);
        const textEl = (0,_render_renderErrMessage__WEBPACK_IMPORTED_MODULE_3__["default"])(_controls__WEBPACK_IMPORTED_MODULE_6__.errors.passwordNick);
        (0,_controls__WEBPACK_IMPORTED_MODULE_6__.addNextEl)(formErrsEl, textEl);
      } else if ((0,_controls__WEBPACK_IMPORTED_MODULE_6__.isSame)(value, email)) {
        (0,_render_renderBorder__WEBPACK_IMPORTED_MODULE_2__.addRedBorder)(passwordEl);
        const textEl = (0,_render_renderErrMessage__WEBPACK_IMPORTED_MODULE_3__["default"])(_controls__WEBPACK_IMPORTED_MODULE_6__.errors.passwordEmail);
        (0,_controls__WEBPACK_IMPORTED_MODULE_6__.addNextEl)(formErrsEl, textEl);
      } else {
        (0,_render_renderBorder__WEBPACK_IMPORTED_MODULE_2__.removeRedBorder)(passwordEl);
        const pEl = (0,_controls__WEBPACK_IMPORTED_MODULE_6__.getNextSubling)(formErrsEl);
        if (pEl && pEl.nodeName === 'P') {
          pEl.remove();
        }
        passwordCheck(value);
        (0,_render_renderPassErrs__WEBPACK_IMPORTED_MODULE_4__["default"])(checkStatus);
      }
    }
  });
  passwordEl.addEventListener('blur', _ref2 => {
    let {
      target
    } = _ref2;
    const {
      value
    } = target;
    if ((0,_controls__WEBPACK_IMPORTED_MODULE_6__.isEmpty)(value)) {
      const nextEl = (0,_controls__WEBPACK_IMPORTED_MODULE_6__.getNextSubling)(formErrsEl);
      (0,_render_renderBorder__WEBPACK_IMPORTED_MODULE_2__.addRedBorder)(passwordEl);
      if (!(0,_controls__WEBPACK_IMPORTED_MODULE_6__.isNodeP)(nextEl)) {
        const textEl = (0,_render_renderErrMessage__WEBPACK_IMPORTED_MODULE_3__["default"])(_controls__WEBPACK_IMPORTED_MODULE_6__.errors.emptyErr);
        (0,_controls__WEBPACK_IMPORTED_MODULE_6__.addNextEl)(formErrsEl, textEl);
      }
    }
  });
});

/***/ }),

/***/ "./src/js/form/check/checkRulesAccept.js":
/*!***********************************************!*\
  !*** ./src/js/form/check/checkRulesAccept.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ "./src/js/state.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form */ "./src/js/form/form.js");
/* harmony import */ var _checkForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkForm */ "./src/js/form/check/checkForm.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const {
    rulesAcceptEl
  } = _form__WEBPACK_IMPORTED_MODULE_1__.formElements;
  rulesAcceptEl.addEventListener('input', () => {
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].form.rulesAccept = true;
    (0,_checkForm__WEBPACK_IMPORTED_MODULE_2__["default"])();
  });
});

/***/ }),

/***/ "./src/js/form/check/controls.js":
/*!***************************************!*\
  !*** ./src/js/form/check/controls.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addNextEl: () => (/* binding */ addNextEl),
/* harmony export */   errors: () => (/* binding */ errors),
/* harmony export */   getNextSubling: () => (/* binding */ getNextSubling),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   isNodeP: () => (/* binding */ isNodeP),
/* harmony export */   isSame: () => (/* binding */ isSame)
/* harmony export */ });
const isEmpty = value => value.trim() === '';
const isSame = (value1, value2) => value1 === value2;
const getNextSubling = el => el.nextElementSibling;
const addNextEl = function (el, nextEl) {
  let direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'afterend';
  el.insertAdjacentElement(direction, nextEl);
};
const isNodeP = pEl => pEl.nodeName === 'P';
const errors = {
  emptyErr: 'Поле обязательно для заполнения',
  passwordNick: 'Пароль не должен совпадать с Никнеймом',
  passwordEmail: 'Пароль не должен совпадать с e-mail',
  passwordNotConfirm: 'Введённые пароли не совпадают'
};

/***/ }),

/***/ "./src/js/form/form.js":
/*!*****************************!*\
  !*** ./src/js/form/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   formElements: () => (/* binding */ formElements)
/* harmony export */ });
/* harmony import */ var _check_checkEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check/checkEmail */ "./src/js/form/check/checkEmail.js");
/* harmony import */ var _check_checkNickname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check/checkNickname */ "./src/js/form/check/checkNickname.js");
/* harmony import */ var _check_checkPassRepit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check/checkPassRepit */ "./src/js/form/check/checkPassRepit.js");
/* harmony import */ var _check_checkPassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./check/checkPassword */ "./src/js/form/check/checkPassword.js");
/* harmony import */ var _check_checkRulesAccept__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./check/checkRulesAccept */ "./src/js/form/check/checkRulesAccept.js");





const formElements = {
  emailEl: document.getElementById('email'),
  nicknameEl: document.getElementById('nickname'),
  passwordEl: document.getElementById('password'),
  passwordConfirmEl: document.getElementById('passwordConfirm'),
  rulesAcceptEl: document.getElementById('rulesAccept')
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,_check_checkEmail__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_check_checkNickname__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_check_checkPassword__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_check_checkPassRepit__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_check_checkRulesAccept__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

/***/ }),

/***/ "./src/js/form/formReset.js":
/*!**********************************!*\
  !*** ./src/js/form/formReset.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _check_controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check/controls */ "./src/js/form/check/controls.js");
/* harmony import */ var _render_renderBorder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render/renderBorder */ "./src/js/form/render/renderBorder.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const form = document.querySelector('.form');
  const formKeys = Object.keys(form);
  formKeys.forEach(el => {
    if (el === 'rulesAccept') {
      form[el].removeAttribute('checked');
    } else {
      form[el].value = '';
      (0,_render_renderBorder__WEBPACK_IMPORTED_MODULE_1__.removeRedBorder)(form[el]);
    }
  });
});

/***/ }),

/***/ "./src/js/form/render/renderBorder.js":
/*!********************************************!*\
  !*** ./src/js/form/render/renderBorder.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addRedBorder: () => (/* binding */ addRedBorder),
/* harmony export */   removeRedBorder: () => (/* binding */ removeRedBorder)
/* harmony export */ });
const addRedBorder = el => {
  el.classList.add('form__input-danger');
};
const removeRedBorder = el => {
  el.classList.remove('form__input-danger');
};

/***/ }),

/***/ "./src/js/form/render/renderErrMessage.js":
/*!************************************************!*\
  !*** ./src/js/form/render/renderErrMessage.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (text => {
  const errorMessageEl = document.createElement('p');
  errorMessageEl.classList.add('text', 'text-danger');
  errorMessageEl.textContent = text;
  return errorMessageEl;
});

/***/ }),

/***/ "./src/js/form/render/renderPassErrs.js":
/*!**********************************************!*\
  !*** ./src/js/form/render/renderPassErrs.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getCheckStyle: () => (/* binding */ getCheckStyle)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form */ "./src/js/form/form.js");
/* harmony import */ var _renderBorder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderBorder */ "./src/js/form/render/renderBorder.js");


const errors = {
  default: {
    pClass: 'text-default',
    img: 'img/default.png'
  },
  error: {
    pClass: 'text-danger',
    img: 'img/error.png'
  },
  ok: {
    pClass: 'text-ok',
    img: 'img/ok.png'
  }
};
const getCheckStyle = errType => errors[errType];
const lengthErrTextEl = document.getElementById('lengthErr');
const numberErrTextEl = document.getElementById('numberErr');
const letterErrTextEl = document.getElementById('letterErr');
const lengthImgEl = lengthErrTextEl.previousElementSibling;
const numberImgEl = numberErrTextEl.previousElementSibling;
const letterImgEl = letterErrTextEl.previousElementSibling;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errsStatus => {
  const {
    lengthErr,
    numberErr,
    letterErr
  } = errsStatus;
  const {
    passwordEl
  } = _form__WEBPACK_IMPORTED_MODULE_0__.formElements;
  lengthErrTextEl.classList.remove('text-danger', 'text-ok');
  if (lengthErr === 'error') {
    (0,_renderBorder__WEBPACK_IMPORTED_MODULE_1__.addRedBorder)(passwordEl);
  }
  lengthErrTextEl.classList.add(errors[lengthErr].pClass);
  lengthImgEl.src = errors[lengthErr].img;
  numberErrTextEl.classList.remove('text-danger', 'text-ok');
  if (numberErr === 'error') {
    (0,_renderBorder__WEBPACK_IMPORTED_MODULE_1__.addRedBorder)(passwordEl);
  }
  numberErrTextEl.classList.add(errors[numberErr].pClass);
  numberImgEl.src = errors[numberErr].img;
  letterErrTextEl.classList.remove('text-danger', 'text-ok');
  if (letterErr === 'error') {
    (0,_renderBorder__WEBPACK_IMPORTED_MODULE_1__.addRedBorder)(passwordEl);
  }
  letterErrTextEl.classList.add(errors[letterErr].pClass);
  letterImgEl.src = errors[letterErr].img;
});

/***/ }),

/***/ "./src/js/modal/modal.js":
/*!*******************************!*\
  !*** ./src/js/modal/modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modal = document.querySelector('.modal');
const openModal = () => {
  modal.classList.remove('fade');
};
const closeModal = () => {
  modal.classList.add('fade');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  open: () => openModal(),
  close: () => closeModal()
});

/***/ }),

/***/ "./src/js/state.js":
/*!*************************!*\
  !*** ./src/js/state.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  modalShow: false,
  formComplete: false,
  form: {
    email: '',
    nickname: '',
    password: '',
    passwordConfirm: '',
    rulesAccept: false
  }
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/js/app.js");

(0,_app__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map