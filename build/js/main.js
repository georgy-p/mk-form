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
/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmpty */ "./src/js/form/check/isEmpty.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form */ "./src/js/form/form.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./src/js/form/check/controls.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const {
    email
  } = _form__WEBPACK_IMPORTED_MODULE_1__.formElements;
  email.addEventListener('input', () => {
    const pEl = email.nextElementSibling;
    if (pEl && pEl.nodeName === 'P') {
      pEl.remove();
    }
  });
  email.addEventListener('blur', _ref => {
    let {
      target
    } = _ref;
    const {
      value
    } = target;
    if ((0,_isEmpty__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(value)) {
      const nextEl = email.nextElementSibling;
      if (nextEl.nodeName !== 'P') {
        const textEl = (0,_controls__WEBPACK_IMPORTED_MODULE_2__.renderErrMessage)(_controls__WEBPACK_IMPORTED_MODULE_2__.errors.emptyErr);
        email.insertAdjacentElement('afterend', textEl);
      }
    }
  });
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
/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmpty */ "./src/js/form/check/isEmpty.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../form */ "./src/js/form/form.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./src/js/form/check/controls.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const {
    nickname
  } = _form__WEBPACK_IMPORTED_MODULE_1__.formElements;
  nickname.addEventListener('input', () => {
    const pEl = nickname.nextElementSibling;
    if (pEl && pEl.nodeName === 'P') {
      pEl.remove();
    }
  });
  nickname.addEventListener('blur', _ref => {
    let {
      target
    } = _ref;
    const {
      value
    } = target;
    if ((0,_isEmpty__WEBPACK_IMPORTED_MODULE_0__.isEmpty)(value)) {
      const nextEl = nickname.nextElementSibling;
      if (nextEl.nodeName !== 'P') {
        const textEl = (0,_controls__WEBPACK_IMPORTED_MODULE_2__.renderErrMessage)(_controls__WEBPACK_IMPORTED_MODULE_2__.errors.emptyErr);
        nickname.insertAdjacentElement('afterend', textEl);
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
/* harmony import */ var _render_renderErrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/renderErrs */ "./src/js/form/render/renderErrs.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls */ "./src/js/form/check/controls.js");
/* harmony import */ var _isEmpty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isEmpty */ "./src/js/form/check/isEmpty.js");





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
const isSame = (value1, value2) => value1 === value2;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const {
    password
  } = _form__WEBPACK_IMPORTED_MODULE_1__.formElements;
  const formErrsEl = document.querySelector('.form__errors');
  password.addEventListener('input', _ref => {
    let {
      target
    } = _ref;
    const pEl = formErrsEl.nextElementSibling;
    if (pEl && pEl.nodeName === 'P') {
      pEl.remove();
    }
    const {
      value
    } = target;
    const {
      nickname,
      email
    } = _state__WEBPACK_IMPORTED_MODULE_0__["default"].form;
    if (value.length > 0) {
      if (isSame(value, nickname)) {
        const textEl = (0,_controls__WEBPACK_IMPORTED_MODULE_3__.renderErrMessage)(_controls__WEBPACK_IMPORTED_MODULE_3__.errors.passwordNick);
        formErrsEl.insertAdjacentElement('afterend', textEl);
      } else if (isSame(value, email)) {
        const textEl = (0,_controls__WEBPACK_IMPORTED_MODULE_3__.renderErrMessage)(_controls__WEBPACK_IMPORTED_MODULE_3__.errors.passwordEmail);
        formErrsEl.insertAdjacentElement('afterend', textEl);
      } else {
        const pEl = formErrsEl.nextElementSibling;
        if (pEl && pEl.nodeName === 'P') {
          pEl.remove();
        }
        passwordCheck(value);
        (0,_render_renderErrs__WEBPACK_IMPORTED_MODULE_2__["default"])(checkStatus);
      }
    }
  });
  password.addEventListener('blur', _ref2 => {
    let {
      target
    } = _ref2;
    const {
      value
    } = target;
    if ((0,_isEmpty__WEBPACK_IMPORTED_MODULE_4__.isEmpty)(value)) {
      const nextEl = formErrsEl.nextElementSibling;
      if (nextEl.nodeName !== 'P') {
        const textEl = (0,_controls__WEBPACK_IMPORTED_MODULE_3__.renderErrMessage)(_controls__WEBPACK_IMPORTED_MODULE_3__.errors.emptyErr);
        formErrsEl.insertAdjacentElement('afterend', textEl);
      }
    }
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   errors: () => (/* binding */ errors),
/* harmony export */   renderErrMessage: () => (/* binding */ renderErrMessage)
/* harmony export */ });
/* harmony import */ var _checkEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkEmail */ "./src/js/form/check/checkEmail.js");
/* harmony import */ var _checkNickname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkNickname */ "./src/js/form/check/checkNickname.js");
/* harmony import */ var _checkPassword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkPassword */ "./src/js/form/check/checkPassword.js");



const renderErrMessage = text => {
  const errorMessageEl = document.createElement('p');
  errorMessageEl.classList.add('text', 'text-danger');
  errorMessageEl.textContent = text;
  return errorMessageEl;
};
const errors = {
  emptyErr: 'Поле обязательно для заполнения',
  passwordNick: 'Пароль не должен совпадать с Никнеймом',
  passwordEmail: 'Пароль не должен совпадать с e-mail',
  passwordNotConfirm: 'Введённые пароли не совпадают'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  (0,_checkEmail__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_checkNickname__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_checkPassword__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/form/check/isEmpty.js":
/*!**************************************!*\
  !*** ./src/js/form/check/isEmpty.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isEmpty: () => (/* binding */ isEmpty)
/* harmony export */ });
const isEmpty = value => {
  if (value.trim() === '') {
    return 'emptyErr';
  }
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
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state */ "./src/js/state.js");
/* harmony import */ var _check_controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check/controls */ "./src/js/form/check/controls.js");


const formElements = {
  email: document.getElementById('email'),
  nickname: document.getElementById('nickname'),
  password: document.getElementById('password'),
  passwordConfirm: document.getElementById('passwordConfirm'),
  rulesAccept: document.getElementById('rulesAccept')
};
const {
  email,
  nickname,
  password,
  passwordConfirm,
  rulesAccept
} = formElements;
(0,_check_controls__WEBPACK_IMPORTED_MODULE_1__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  email.focus();
  email.addEventListener('input', e => {
    const {
      value
    } = e.target;
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].form.email = value;
  });
  nickname.addEventListener('input', e => {
    const {
      value
    } = e.target;
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].form.nickname = value;
  });
  password.addEventListener('input', e => {
    const {
      value
    } = e.target;
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].form.password = value;
  });
  passwordConfirm.addEventListener('input', e => {
    const {
      value
    } = e.target;
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].form.passwordConfirm = value;
  });
  rulesAccept.addEventListener('input', () => {
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].form.rulesAccept = true;
  });
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
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/js/form/form.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const form = _form__WEBPACK_IMPORTED_MODULE_0__.formElements;
  const formKeys = Object.keys(form);
  formKeys.forEach(el => {
    if (el === 'rulesAccept') {
      form[el].removeAttribute('checked');
    } else {
      form[el].value = '';
    }
  });
});

/***/ }),

/***/ "./src/js/form/render/renderErrs.js":
/*!******************************************!*\
  !*** ./src/js/form/render/renderErrs.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getCheckStyle: () => (/* binding */ getCheckStyle)
/* harmony export */ });
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
  lengthErrTextEl.classList.remove('text-danger', 'text-ok');
  lengthErrTextEl.classList.add(errors[lengthErr].pClass);
  lengthImgEl.src = errors[lengthErr].img;
  numberErrTextEl.classList.remove('text-danger', 'text-ok');
  numberErrTextEl.classList.add(errors[numberErr].pClass);
  numberImgEl.src = errors[numberErr].img;
  letterErrTextEl.classList.remove('text-danger', 'text-ok');
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