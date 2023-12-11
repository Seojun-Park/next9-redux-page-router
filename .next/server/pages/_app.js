module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_configure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/configure */ \"./store/configure.ts\");\nvar _jsxFileName = \"/Users/jin/personal/next/front/pages/_app.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nconst App = ({\n  Component,\n  pageProps\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }), __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, \"Next Tweet\")), __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configure__WEBPACK_IMPORTED_MODULE_2__[\"default\"].withRedux(App));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIl9fanN4IiwiUmVhY3QiLCJGcmFnbWVudCIsIkhlYWQiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNoYXJTZXQiLCJfZXh0ZW5kcyIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUVHO0FBQ1k7QUFFekMsTUFBTUEsR0FBRyxHQUFHQSxDQUFDO0VBQUVDLFNBQVM7RUFBRUM7QUFBb0IsQ0FBQyxLQUFLO0VBQ2xELE9BQ0VDLEtBQUEsQ0FBQUMsNENBQUEsQ0FBQUMsUUFBQSxRQUNFRixLQUFBLENBQUNHLGdEQUFJO0lBQUFDLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUNIVCxLQUFBO0lBQU1VLE9BQU8sRUFBQyxPQUFPO0lBQUFOLE1BQUE7SUFBQUMsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxDQUFFLENBQUMsRUFDeEJULEtBQUE7SUFBQUksTUFBQTtJQUFBQyxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLGVBQXdCLENBQ3BCLENBQUMsRUFDUFQsS0FBQSxDQUFDRixTQUFTLEVBQUFhLFFBQUEsS0FBS1osU0FBUztJQUFBSyxNQUFBO0lBQUFDLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsRUFBRyxDQUMzQixDQUFDO0FBRVAsQ0FBQztBQUVjRyx1SEFBTyxDQUFDQyxTQUFTLENBQUNoQixHQUFHLENBQUMiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmUnO1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDx0aXRsZT5OZXh0IFR3ZWV0PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./reducer/index.ts":
/*!**************************!*\
  !*** ./reducer/index.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducer/user.ts\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./reducer/post.ts\");\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  index: (state = {}, action) => {\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        return _objectSpread(_objectSpread({}, state), action.payload);\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2VyL2luZGV4LnRzPzZmMjkiXSwibmFtZXMiOlsicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJpbmRleCIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIkhZRFJBVEUiLCJfb2JqZWN0U3ByZWFkIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkM7QUFDTDtBQUNDO0FBQ0E7QUFPekMsTUFBTUEsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0VBQ2xDQyxLQUFLLEVBQUVBLENBQUNDLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRUMsTUFBTSxLQUFLO0lBQzdCLFFBQVFBLE1BQU0sQ0FBQ0MsSUFBSTtNQUNqQixLQUFLQywwREFBTztRQUNWLE9BQUFDLGFBQUEsQ0FBQUEsYUFBQSxLQUFZSixLQUFLLEdBQUtDLE1BQU0sQ0FBQ0ksT0FBTztNQUN0QztRQUNFLE9BQU9MLEtBQUs7SUFDaEI7RUFDRixDQUFDO0VBQ0RNLG1EQUFJO0VBQ0pDLG1EQUFJQTtBQUNOLENBQUMsQ0FBQztBQUVhViwwRUFBVyIsImZpbGUiOiIuL3JlZHVjZXIvaW5kZXgudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB1c2VyLCB7IFVzZXJQcm9wcyB9IGZyb20gJy4vdXNlcic7XG5pbXBvcnQgcG9zdCwgeyBQb3N0UHJvcHMgfSBmcm9tICcuL3Bvc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vZGVsUHJvcHMge1xuICB1c2VyOiBVc2VyUHJvcHM7XG4gIHBvc3Q6IFBvc3RQcm9wcztcbn1cblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgSFlEUkFURTpcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9LFxuICB1c2VyLFxuICBwb3N0LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducer/index.ts\n");

/***/ }),

/***/ "./reducer/post.ts":
/*!*************************!*\
  !*** ./reducer/post.ts ***!
  \*************************/
/*! exports provided: postState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postState\", function() { return postState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nconst postState = {\n  mainPosts: [{\n    id: 1,\n    user: {\n      id: 1,\n      nickName: 'John'\n    },\n    content: 'First content',\n    images: [{\n      src: 'https://picsum.photos/id/237/200/300'\n    }, {\n      src: 'https://picsum.photos/id/238/200/300'\n    }, {\n      src: 'https://picsum.photos/id/239/200/300'\n    }],\n    comments: [{\n      nickName: 'Jimmy',\n      content: 'Merong'\n    }]\n  }]\n};\nconst ADD_POST = 'ADD_POST';\nconst addPost = {\n  type: ADD_POST\n};\nconst dummyPost = {\n  id: 1,\n  content: 'Hello',\n  user: {\n    id: 2,\n    nickName: 'Patrick'\n  }\n};\nconst reducer = (state = postState, action) => {\n  switch (action.type) {\n    case 'ADD_POST':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost, ...state.mainPosts],\n        postAdded: true\n      });\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2VyL3Bvc3QudHM/ZGRhZSJdLCJuYW1lcyI6WyJwb3N0U3RhdGUiLCJtYWluUG9zdHMiLCJpZCIsInVzZXIiLCJuaWNrTmFtZSIsImNvbnRlbnQiLCJpbWFnZXMiLCJzcmMiLCJjb21tZW50cyIsIkFERF9QT1NUIiwiYWRkUG9zdCIsInR5cGUiLCJkdW1teVBvc3QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJfb2JqZWN0U3ByZWFkIiwicG9zdEFkZGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQXNCTyxNQUFNQSxTQUFvQixHQUFHO0VBQ2xDQyxTQUFTLEVBQUUsQ0FDVDtJQUNFQyxFQUFFLEVBQUUsQ0FBQztJQUNMQyxJQUFJLEVBQUU7TUFDSkQsRUFBRSxFQUFFLENBQUM7TUFDTEUsUUFBUSxFQUFFO0lBQ1osQ0FBQztJQUNEQyxPQUFPLEVBQUUsZUFBZTtJQUN4QkMsTUFBTSxFQUFFLENBQ047TUFDRUMsR0FBRyxFQUFFO0lBQ1AsQ0FBQyxFQUNEO01BQ0VBLEdBQUcsRUFBRTtJQUNQLENBQUMsRUFDRDtNQUNFQSxHQUFHLEVBQUU7SUFDUCxDQUFDLENBQ0Y7SUFDREMsUUFBUSxFQUFFLENBQ1I7TUFDRUosUUFBUSxFQUFFLE9BQU87TUFDakJDLE9BQU8sRUFBRTtJQUNYLENBQUM7RUFFTCxDQUFDO0FBRUwsQ0FBQztBQUVELE1BQU1JLFFBQVEsR0FBRyxVQUFVO0FBRXBCLE1BQU1DLE9BQU8sR0FBRztFQUNyQkMsSUFBSSxFQUFFRjtBQUNSLENBQUM7QUFFRCxNQUFNRyxTQUFvQyxHQUFHO0VBQzNDVixFQUFFLEVBQUUsQ0FBQztFQUNMRyxPQUFPLEVBQUUsT0FBTztFQUNoQkYsSUFBSSxFQUFFO0lBQ0pELEVBQUUsRUFBRSxDQUFDO0lBQ0xFLFFBQVEsRUFBRTtFQUNaO0FBQ0YsQ0FBQztBQUVELE1BQU1TLE9BQU8sR0FBR0EsQ0FDZEMsS0FBZ0IsR0FBR2QsU0FBUyxFQUM1QmUsTUFBaUIsS0FDSDtFQUNkLFFBQVFBLE1BQU0sQ0FBQ0osSUFBSTtJQUNqQixLQUFLLFVBQVU7TUFDYixPQUFBSyxhQUFBLENBQUFBLGFBQUEsS0FDS0YsS0FBSztRQUNSYixTQUFTLEVBQUUsQ0FBQ1csU0FBUyxFQUFFLEdBQUdFLEtBQUssQ0FBQ2IsU0FBUyxDQUFDO1FBQzFDZ0IsU0FBUyxFQUFFO01BQUk7SUFFbkI7TUFDRSxPQUFPSCxLQUFLO0VBQ2hCO0FBQ0YsQ0FBQztBQUVjRCxzRUFBTyIsImZpbGUiOiIuL3JlZHVjZXIvcG9zdC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFueUFjdGlvbiB9IGZyb20gJ3JlZHV4JztcblxuZXhwb3J0IGludGVyZmFjZSBQb3N0UHJvcHMge1xuICBtYWluUG9zdHM6IHtcbiAgICBpZDogbnVtYmVyO1xuICAgIHVzZXI6IHtcbiAgICAgIGlkOiBudW1iZXI7XG4gICAgICBuaWNrTmFtZTogc3RyaW5nO1xuICAgIH07XG4gICAgY29udGVudDogc3RyaW5nO1xuICAgIGltYWdlcz86IHtcbiAgICAgIHNyYzogc3RyaW5nO1xuICAgIH1bXTtcbiAgICBjb21tZW50cz86IHtcbiAgICAgIG5pY2tOYW1lOiBzdHJpbmc7XG4gICAgICBjb250ZW50OiBzdHJpbmc7XG4gICAgfVtdO1xuICB9W107XG4gIGltYWdlUGF0aD86IFtdO1xuICBwb3N0QWRkZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgcG9zdFN0YXRlOiBQb3N0UHJvcHMgPSB7XG4gIG1haW5Qb3N0czogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgdXNlcjoge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmlja05hbWU6ICdKb2huJyxcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiAnRmlyc3QgY29udGVudCcsXG4gICAgICBpbWFnZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogJ2h0dHBzOi8vcGljc3VtLnBob3Rvcy9pZC8yMzcvMjAwLzMwMCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICdodHRwczovL3BpY3N1bS5waG90b3MvaWQvMjM4LzIwMC8zMDAnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgc3JjOiAnaHR0cHM6Ly9waWNzdW0ucGhvdG9zL2lkLzIzOS8yMDAvMzAwJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBjb21tZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgbmlja05hbWU6ICdKaW1teScsXG4gICAgICAgICAgY29udGVudDogJ01lcm9uZycsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF0sXG59O1xuXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7XG5cbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xuICB0eXBlOiBBRERfUE9TVCxcbn07XG5cbmNvbnN0IGR1bW15UG9zdDogUG9zdFByb3BzWydtYWluUG9zdHMnXVswXSA9IHtcbiAgaWQ6IDEsXG4gIGNvbnRlbnQ6ICdIZWxsbycsXG4gIHVzZXI6IHtcbiAgICBpZDogMixcbiAgICBuaWNrTmFtZTogJ1BhdHJpY2snLFxuICB9LFxufTtcblxuY29uc3QgcmVkdWNlciA9IChcbiAgc3RhdGU6IFBvc3RQcm9wcyA9IHBvc3RTdGF0ZSxcbiAgYWN0aW9uOiBBbnlBY3Rpb25cbik6IFBvc3RQcm9wcyA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfUE9TVCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxuICAgICAgICBwb3N0QWRkZWQ6IHRydWUsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducer/post.ts\n");

/***/ }),

/***/ "./reducer/user.ts":
/*!*************************!*\
  !*** ./reducer/user.ts ***!
  \*************************/
/*! exports provided: userState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userState\", function() { return userState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nconst userState = {\n  data: null,\n  isLoggedIn: false,\n  loginData: {},\n  signUpData: {}\n};\nconst loginAction = data => {\n  return _objectSpread({\n    type: 'LOG_IN'\n  }, data);\n};\nconst logoutAction = () => {\n  return {\n    type: 'LOG_OUT'\n  };\n};\nconst reducer = (state = userState, action) => {\n  switch (action.type) {\n    case 'LOG_IN':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: true,\n        data: action.data\n      });\n    case 'LOG_OUT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: false,\n        data: null\n      });\n    default:\n      return state;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2VyL3VzZXIudHM/ZjI1OSJdLCJuYW1lcyI6WyJ1c2VyU3RhdGUiLCJkYXRhIiwiaXNMb2dnZWRJbiIsImxvZ2luRGF0YSIsInNpZ25VcERhdGEiLCJsb2dpbkFjdGlvbiIsIl9vYmplY3RTcHJlYWQiLCJ0eXBlIiwibG9nb3V0QWN0aW9uIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFZTyxNQUFNQSxTQUFvQixHQUFHO0VBQ2xDQyxJQUFJLEVBQUUsSUFBSTtFQUNWQyxVQUFVLEVBQUUsS0FBSztFQUNqQkMsU0FBUyxFQUFFLENBQUMsQ0FBQztFQUNiQyxVQUFVLEVBQUUsQ0FBQztBQUNmLENBQUM7QUFPTSxNQUFNQyxXQUFXLEdBQUlKLElBQWdCLElBQUs7RUFDL0MsT0FBQUssYUFBQTtJQUNFQyxJQUFJLEVBQUU7RUFBUSxHQUNYTixJQUFJO0FBRVgsQ0FBQztBQUVNLE1BQU1PLFlBQVksR0FBR0EsQ0FBQSxLQUFNO0VBQ2hDLE9BQU87SUFDTEQsSUFBSSxFQUFFO0VBQ1IsQ0FBQztBQUNILENBQUM7QUFFRCxNQUFNRSxPQUFPLEdBQUdBLENBQUNDLEtBQWdCLEdBQUdWLFNBQVMsRUFBRVcsTUFBaUIsS0FBSztFQUNuRSxRQUFRQSxNQUFNLENBQUNKLElBQUk7SUFDakIsS0FBSyxRQUFRO01BQ1gsT0FBQUQsYUFBQSxDQUFBQSxhQUFBLEtBQ0tJLEtBQUs7UUFDUlIsVUFBVSxFQUFFLElBQUk7UUFDaEJELElBQUksRUFBRVUsTUFBTSxDQUFDVjtNQUFJO0lBRXJCLEtBQUssU0FBUztNQUNaLE9BQUFLLGFBQUEsQ0FBQUEsYUFBQSxLQUNLSSxLQUFLO1FBQ1JSLFVBQVUsRUFBRSxLQUFLO1FBQ2pCRCxJQUFJLEVBQUU7TUFBSTtJQUVkO01BQ0UsT0FBT1MsS0FBSztFQUNoQjtBQUNGLENBQUM7QUFFY0Qsc0VBQU8iLCJmaWxlIjoiLi9yZWR1Y2VyL3VzZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbnlBY3Rpb24gfSBmcm9tICdyZWR1eCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlclByb3BzIHtcbiAgaXNMb2dnZWRJbjogYm9vbGVhbjtcbiAgZGF0YToge1xuICAgIHVzZXJJZDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gIH0gfCBudWxsO1xuICBzaWduVXBEYXRhOiBSZWNvcmQ8YW55LCBhbnk+O1xuICBsb2dpbkRhdGE6IFJlY29yZDxhbnksIGFueT47XG59XG5cbmV4cG9ydCBjb25zdCB1c2VyU3RhdGU6IFVzZXJQcm9wcyA9IHtcbiAgZGF0YTogbnVsbCxcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIGxvZ2luRGF0YToge30sXG4gIHNpZ25VcERhdGE6IHt9LFxufTtcblxuaW50ZXJmYWNlIExvZ2luUHJvcHMge1xuICB1c2VySWQ6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGE6IExvZ2luUHJvcHMpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTE9HX0lOJyxcbiAgICAuLi5kYXRhLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dEFjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTE9HX09VVCcsXG4gIH07XG59O1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBVc2VyUHJvcHMgPSB1c2VyU3RhdGUsIGFjdGlvbjogQW55QWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdMT0dfSU4nOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9nZ2VkSW46IHRydWUsXG4gICAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxuICAgICAgfTtcbiAgICBjYXNlICdMT0dfT1VUJzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICAgICAgZGF0YTogbnVsbCxcbiAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducer/user.ts\n");

/***/ }),

/***/ "./store/configure.ts":
/*!****************************!*\
  !*** ./store/configure.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducer */ \"./reducer/index.ts\");\n\n\n\nconst makeStore = context => Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(makeStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmUudHM/MWVkOCJdLCJuYW1lcyI6WyJtYWtlU3RvcmUiLCJjb250ZXh0IiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTREO0FBQ047QUFDckI7QUFJakMsTUFBTUEsU0FBUyxHQUFJQyxPQUFnQixJQUFLQyx5REFBVyxDQUFDQyxnREFBTyxDQUFDO0FBRTVELE1BQU1DLE9BQU8sR0FBR0Msd0VBQWEsQ0FBZUwsU0FBUyxFQUFFO0VBQ3JETSxLQUFLO0FBQ1AsQ0FBQyxDQUFDO0FBRWFGLHNFQUFPIiwiZmlsZSI6Ii4vc3RvcmUvY29uZmlndXJlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29udGV4dCwgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgeyBBbnlBY3Rpb24sIFN0b3JlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHt9XG5cbmNvbnN0IG1ha2VTdG9yZSA9IChjb250ZXh0OiBDb250ZXh0KSA9PiBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXI8U3RvcmU8U3RhdGU+PihtYWtlU3RvcmUsIHtcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/configure.ts\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ })

/******/ });