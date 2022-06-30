(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object") module.exports = factory(require("axios"));
  else if (typeof define === "function" && define.amd) define(["axios"], factory);
  else {
    var a = typeof exports === "object" ? factory(require("axios")) : factory(root["axios"]);
    for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i];
  }
})(this, function (__WEBPACK_EXTERNAL_MODULE_axios__) {
  return /******/ (() => {
    // webpackBootstrap
    /******/ "use strict";
    /******/ var __webpack_modules__ = {
      /***/ axios:
        /*!************************!*\
  !*** external "axios" ***!
  \************************/
        /***/ (module) => {
          module.exports = __WEBPACK_EXTERNAL_MODULE_axios__;

          /***/
        },

      /******/
    };
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/ var cachedModule = __webpack_module_cache__[moduleId];
      /******/ if (cachedModule !== undefined) {
        /******/ return cachedModule.exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (__webpack_module_cache__[moduleId] = {
        /******/ // no module.id needed
        /******/ // no module.loaded needed
        /******/ exports: {},
        /******/
      });
      /******/
      /******/ // Execute the module function
      /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/compat get default export */
    /******/ (() => {
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/ __webpack_require__.n = (module) => {
        /******/ var getter = module && module.__esModule ? /******/ () => module["default"] : /******/ () => module;
        /******/ __webpack_require__.d(getter, { a: getter });
        /******/ return getter;
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/define property getters */
    /******/ (() => {
      /******/ // define getter functions for harmony exports
      /******/ __webpack_require__.d = (exports, definition) => {
        /******/ for (var key in definition) {
          /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
            /******/
          }
          /******/
        }
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/ (() => {
      /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/ (() => {
      /******/ // define __esModule on exports
      /******/ __webpack_require__.r = (exports) => {
        /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
          /******/
        }
        /******/ Object.defineProperty(exports, "__esModule", { value: true });
        /******/
      };
      /******/
    })();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
      /*!******************!*\
  !*** ./index.js ***!
  \******************/
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */ __webpack_require__.d(__webpack_exports__, {
        /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
        /* harmony export */
      });
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
      /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

      class HttpClient {
        constructor({ baseUrl, ...options }) {
          const client = axios__WEBPACK_IMPORTED_MODULE_0___default().create();

          client.defaults.baseURL = baseUrl;
          client.defaults.timeout = 20 * 1000;
          client.defaults.responseType = "json";
          client.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";

          // Enable this if needing to serialize arrays in query strings.
          // Note that there are difficulties with importing `qs` with webpack 5.
          // client.defaults.paramsSerializer = (params) => {
          //   return qs.stringify(params, { arrayFormat: 'repeat' });
          // };

          client.defaults = {
            ...client.defaults,
            ...options,
          };

          this.client = client;
        }

        // Axios options may be passed for `options`. See https://www.npmjs.com/package/axios#request-config.
        async request(method, url, data = null, options = {}) {
          const response = await this.client({ method, url, data, ...options });
          return response && response.data;
        }

        async get(url, options = {}) {
          return this.request("GET", url, {}, options);
        }

        async post(url, data = null, options = {}) {
          return this.request("POST", url, data, options);
        }

        async put(url, data, options = {}) {
          return this.request("PUT", url, data, options);
        }

        async delete(url, options = {}) {
          return this.request("DELETE", url, {}, options);
        }

        addRequestInterceptor(callback) {
          this.client.interceptors.request.use(callback);
        }
      }

      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = HttpClient;
    })();

    /******/ return __webpack_exports__;
    /******/
  })();
});
