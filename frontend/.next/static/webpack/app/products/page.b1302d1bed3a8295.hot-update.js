"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/page",{

/***/ "(app-pages-browser)/./src/app/libs/Features/products/productSlice.ts":
/*!********************************************************!*\
  !*** ./src/app/libs/Features/products/productSlice.ts ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   listProductByCategoryClients: function() { return /* binding */ listProductByCategoryClients; },\n/* harmony export */   listProductsClient: function() { return /* binding */ listProductsClient; },\n/* harmony export */   productClientSliceReducer: function() { return /* binding */ productClientSliceReducer; },\n/* harmony export */   searchProductBynameClients: function() { return /* binding */ searchProductBynameClients; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialProductState = {\n    products: []\n};\nconst initialProductSearchState = {\n    nameTerm: \"\",\n    products: []\n};\nconst productClientSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"products\",\n    initialState: initialProductSearchState,\n    reducers: {\n        listProductsClient: (state, actions)=>{\n            state.products = actions.payload;\n        },\n        listProductByCategoryClients: (state, actions)=>{\n            state.products = state.products.filter((product)=>product.categoryId === actions.payload);\n        },\n        searchProductBynameClients: (state, actions)=>{\n            const nameSearch = actions.payload.nameTerm.trim().toLowerCase();\n            console.log(nameSearch);\n            state.products = actions.payload.products.filter((product)=>product.productName && product.productName.trim().toLowerCase() === nameSearch);\n        }\n    }\n});\nconst { listProductsClient, listProductByCategoryClients, searchProductBynameClients } = productClientSlice.actions;\nconst productClientSliceReducer = productClientSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGlicy9GZWF0dXJlcy9wcm9kdWN0cy9wcm9kdWN0U2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEQ7QUFHOUQsTUFBTUMsc0JBQXFDO0lBQ3ZDQyxVQUFVLEVBQUU7QUFDaEI7QUFDQSxNQUFNQyw0QkFBaUQ7SUFDbkRDLFVBQVU7SUFDVkYsVUFBVSxFQUFFO0FBQ2hCO0FBRUEsTUFBTUcscUJBQXFCTCw2REFBV0EsQ0FBQztJQUNuQ00sTUFBTTtJQUNOQyxjQUFjSjtJQUNkSyxVQUFXO1FBQ1BDLG9CQUFvQixDQUFDQyxPQUFzQkM7WUFDdkNELE1BQU1SLFFBQVEsR0FBR1MsUUFBUUMsT0FBTztRQUNwQztRQUNBQyw4QkFBOEIsQ0FBQ0gsT0FBc0JDO1lBQ2pERCxNQUFNUixRQUFRLEdBQUdRLE1BQU1SLFFBQVEsQ0FBQ1ksTUFBTSxDQUFDLENBQUNDLFVBQVlBLFFBQVFDLFVBQVUsS0FBS0wsUUFBUUMsT0FBTztRQUM5RjtRQUNBSyw0QkFBNEIsQ0FBQ1AsT0FBNEJDO1lBQ3JELE1BQU1PLGFBQWFQLFFBQVFDLE9BQU8sQ0FBQ1IsUUFBUSxDQUFDZSxJQUFJLEdBQUdDLFdBQVc7WUFDOURDLFFBQVFDLEdBQUcsQ0FBQ0o7WUFDWlIsTUFBTVIsUUFBUSxHQUFHUyxRQUFRQyxPQUFPLENBQUNWLFFBQVEsQ0FBQ1ksTUFBTSxDQUFDLENBQUNDLFVBQVlBLFFBQVFRLFdBQVcsSUFBSVIsUUFBUVEsV0FBVyxDQUFDSixJQUFJLEdBQUdDLFdBQVcsT0FBT0Y7UUFDdEk7SUFDSjtBQUNKO0FBRU8sTUFBTSxFQUFFVCxrQkFBa0IsRUFBRUksNEJBQTRCLEVBQUVJLDBCQUEwQixFQUFFLEdBQUdaLG1CQUFtQk0sT0FBTztBQUNuSCxNQUFNYSw0QkFBNEJuQixtQkFBbUJvQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbGlicy9GZWF0dXJlcy9wcm9kdWN0cy9wcm9kdWN0U2xpY2UudHM/MmMwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IElQcm9kdWN0LCBJUHJvZHVjdFNlYXJjaFN0YXRlLCBJUHJvZHVjdFN0YXRlIH0gZnJvbSBcIi4vcHJvZHVjdC5pbnRlcmZhY2VcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxQcm9kdWN0U3RhdGU6IElQcm9kdWN0U3RhdGUgPSB7XHJcbiAgICBwcm9kdWN0czogW11cclxufVxyXG5jb25zdCBpbml0aWFsUHJvZHVjdFNlYXJjaFN0YXRlOiBJUHJvZHVjdFNlYXJjaFN0YXRlID0ge1xyXG4gICAgbmFtZVRlcm06IFwiXCIsXHJcbiAgICBwcm9kdWN0czogW11cclxufVxyXG5cclxuY29uc3QgcHJvZHVjdENsaWVudFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTogXCJwcm9kdWN0c1wiLFxyXG4gICAgaW5pdGlhbFN0YXRlOiBpbml0aWFsUHJvZHVjdFNlYXJjaFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6ICh7XHJcbiAgICAgICAgbGlzdFByb2R1Y3RzQ2xpZW50OiAoc3RhdGU6IElQcm9kdWN0U3RhdGUsIGFjdGlvbnM6IFBheWxvYWRBY3Rpb248SVByb2R1Y3RbXT4pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUucHJvZHVjdHMgPSBhY3Rpb25zLnBheWxvYWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpc3RQcm9kdWN0QnlDYXRlZ29yeUNsaWVudHM6IChzdGF0ZTogSVByb2R1Y3RTdGF0ZSwgYWN0aW9uczogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnByb2R1Y3RzID0gc3RhdGUucHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PiBwcm9kdWN0LmNhdGVnb3J5SWQgPT09IGFjdGlvbnMucGF5bG9hZClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlYXJjaFByb2R1Y3RCeW5hbWVDbGllbnRzOiAoc3RhdGU6IElQcm9kdWN0U2VhcmNoU3RhdGUsIGFjdGlvbnM6IFBheWxvYWRBY3Rpb248SVByb2R1Y3RTZWFyY2hTdGF0ZT4pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZVNlYXJjaCA9IGFjdGlvbnMucGF5bG9hZC5uYW1lVGVybS50cmltKCkudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuYW1lU2VhcmNoKVxyXG4gICAgICAgICAgICBzdGF0ZS5wcm9kdWN0cyA9IGFjdGlvbnMucGF5bG9hZC5wcm9kdWN0cy5maWx0ZXIoKHByb2R1Y3QpID0+IHByb2R1Y3QucHJvZHVjdE5hbWUgJiYgcHJvZHVjdC5wcm9kdWN0TmFtZS50cmltKCkudG9Mb3dlckNhc2UoKSA9PT0gbmFtZVNlYXJjaClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHsgbGlzdFByb2R1Y3RzQ2xpZW50LCBsaXN0UHJvZHVjdEJ5Q2F0ZWdvcnlDbGllbnRzLCBzZWFyY2hQcm9kdWN0QnluYW1lQ2xpZW50cyB9ID0gcHJvZHVjdENsaWVudFNsaWNlLmFjdGlvbnNcclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RDbGllbnRTbGljZVJlZHVjZXIgPSBwcm9kdWN0Q2xpZW50U2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxQcm9kdWN0U3RhdGUiLCJwcm9kdWN0cyIsImluaXRpYWxQcm9kdWN0U2VhcmNoU3RhdGUiLCJuYW1lVGVybSIsInByb2R1Y3RDbGllbnRTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJyZWR1Y2VycyIsImxpc3RQcm9kdWN0c0NsaWVudCIsInN0YXRlIiwiYWN0aW9ucyIsInBheWxvYWQiLCJsaXN0UHJvZHVjdEJ5Q2F0ZWdvcnlDbGllbnRzIiwiZmlsdGVyIiwicHJvZHVjdCIsImNhdGVnb3J5SWQiLCJzZWFyY2hQcm9kdWN0QnluYW1lQ2xpZW50cyIsIm5hbWVTZWFyY2giLCJ0cmltIiwidG9Mb3dlckNhc2UiLCJjb25zb2xlIiwibG9nIiwicHJvZHVjdE5hbWUiLCJwcm9kdWN0Q2xpZW50U2xpY2VSZWR1Y2VyIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/libs/Features/products/productSlice.ts\n"));

/***/ })

});