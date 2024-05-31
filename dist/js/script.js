/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/bannerAccordion.js":
/*!******************************************!*\
  !*** ./src/assets/js/bannerAccordion.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accordion: () => (/* binding */ accordion)
/* harmony export */ });
const accordion = () => {
  try {
    const banner = document.querySelector('.banner');
    const bannerWrapper = document.querySelector('.banner__wrapper');
    const bannerTitle = document.querySelector('.banner-top__title');
    const showFull = document.querySelector('.banner-top__more');
    const closeFull = document.querySelector('.banner__close');
    const bannerDate = document.querySelector('.banner-top__date');
    if (!banner.classList.contains('banner--full')) {
      banner.style.maxHeight = bannerTitle.scrollHeight + 24 + 'px';
      closeFull.classList.add('hide');
    }
    showFull.addEventListener('click', showFullBanner);
    closeFull.addEventListener('click', hideFullBanner);
    function showFullBanner() {
      banner.classList.add('banner--full');
      closeFull.classList.remove('hide');
      bannerDate.classList.add('hide');
      showFull.classList.add('hide');
      banner.style.maxHeight = bannerWrapper.scrollHeight + 77 + 'px'; //77-padding for .banner
    }
    function hideFullBanner() {
      banner.classList.remove('banner--full');
      showFull.classList.remove('hide');
      bannerDate.classList.remove('hide');
      closeFull.classList.add('hide');
      banner.style.maxHeight = bannerTitle.scrollHeight + 24 + 'px'; //24-padding for .banner
    }
  } catch (error) {
    console.log(error);
  }
};

/***/ }),

/***/ "./src/assets/js/search.js":
/*!*********************************!*\
  !*** ./src/assets/js/search.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   search: () => (/* binding */ search)
/* harmony export */ });
const search = () => {
  const btns = document.querySelectorAll('.search__btn');
  const pointer = document.querySelector('.search__pointer');
  const form = document.querySelector('.search__form');
  const input = document.querySelector('.search__input');
  const wrapper = document.querySelector('.search__options');
  form.addEventListener('submit', e => {
    e.preventDefault();
  });
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      // console.log(btn.getBoundingClientRect().left);
      resetActiveBtn();
      btn.parentNode.classList.add('search__item--active');
      pointer.style.left = btn.getBoundingClientRect().left - wrapper.getBoundingClientRect().left - pointer.getBoundingClientRect().width + btn.getBoundingClientRect().width / 2 + 10 + 'px';
      input.value = btn.textContent;
    });
  });
  function resetActiveBtn() {
    btns.forEach(btn => {
      btn.parentNode.classList.remove('search__item--active');
    });
  }

  // window.addEventListener('resize', () => {
  //     console.log(wrapper.getBoundingClientRect().left);
  // })

  // console.log(pointer.getBoundingClientRect().left)
};

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
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bannerAccordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bannerAccordion.js */ "./src/assets/js/bannerAccordion.js");
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.js */ "./src/assets/js/search.js");


window.addEventListener('DOMContentLoaded', () => {
  (0,_bannerAccordion_js__WEBPACK_IMPORTED_MODULE_0__.accordion)();
  (0,_search_js__WEBPACK_IMPORTED_MODULE_1__.search)();
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map