"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/users/signup/route";
exports.ids = ["app/api/users/signup/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=C%3A%5CUsers%5CCookie%5COneDrive%5CDesktop%5Cauth-nextjs%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCookie%5COneDrive%5CDesktop%5Cauth-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=C%3A%5CUsers%5CCookie%5COneDrive%5CDesktop%5Cauth-nextjs%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCookie%5COneDrive%5CDesktop%5Cauth-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Cookie_OneDrive_Desktop_auth_nextjs_src_app_api_users_signup_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/signup/route.ts */ \"(rsc)/./src/app/api/users/signup/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/signup/route\",\n        pathname: \"/api/users/signup\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/signup/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Cookie\\\\OneDrive\\\\Desktop\\\\auth-nextjs\\\\src\\\\app\\\\api\\\\users\\\\signup\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Cookie_OneDrive_Desktop_auth_nextjs_src_app_api_users_signup_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/users/signup/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRnNpZ251cCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdXNlcnMlMkZzaWdudXAlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ1c2VycyUyRnNpZ251cCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNDb29raWUlNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNhdXRoLW5leHRqcyU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQ29va2llJTVDT25lRHJpdmUlNUNEZXNrdG9wJTVDYXV0aC1uZXh0anMmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDeUM7QUFDdEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1R0FBdUc7QUFDL0c7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUM2Sjs7QUFFN0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLW5leHRqcy8/Y2E3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxDb29raWVcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxhdXRoLW5leHRqc1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFxzaWdudXBcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VzZXJzL3NpZ251cC9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXJzL3NpZ251cFwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdXNlcnMvc2lnbnVwL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQ29va2llXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcYXV0aC1uZXh0anNcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdXNlcnNcXFxcc2lnbnVwXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL3VzZXJzL3NpZ251cC9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=C%3A%5CUsers%5CCookie%5COneDrive%5CDesktop%5Cauth-nextjs%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCookie%5COneDrive%5CDesktop%5Cauth-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/users/signup/route.ts":
/*!*******************************************!*\
  !*** ./src/app/api/users/signup/route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/dbConfig/dbConfig */ \"(rsc)/./src/dbConfig/dbConfig.ts\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/userModel */ \"(rsc)/./src/models/userModel.js\");\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _helpers_mailer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/mailer */ \"(rsc)/./src/helpers/mailer.ts\");\n\n\n\n\n\n(0,_dbConfig_dbConfig__WEBPACK_IMPORTED_MODULE_0__.connect)();\nasync function POST(request) {\n    try {\n        const reqBody = await request.json();\n        const { username, email, password } = reqBody;\n        console.log(reqBody);\n        if (!username || !email || !password) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n                error: \"Missing required fields (username, email or password)\"\n            }, {\n                status: 400\n            });\n        }\n        const existingUser = await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n            email\n        });\n        if (existingUser) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n                error: \"User with this email already exists\"\n            }, {\n                status: 400\n            });\n        }\n        // Criptarea parolei\n        const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().genSalt(10);\n        const hashedPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().hash(password, salt);\n        const newUser = new _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n            username,\n            email,\n            password: hashedPassword\n        });\n        const savedUser = await newUser.save();\n        console.log(savedUser);\n        // send verification email || re-enable this when testing\n        await (0,_helpers_mailer__WEBPACK_IMPORTED_MODULE_4__.sendEmail)({\n            email,\n            emailType: \"VERIFY\",\n            userId: savedUser._id\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n            message: \"User created successfully\",\n            succes: true,\n            savedUser\n        });\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_2__[\"default\"].json({\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9zaWdudXAvcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4QztBQUNSO0FBQ2tCO0FBQ3hCO0FBQ2E7QUFFN0NBLDJEQUFPQTtBQUVBLGVBQWVLLEtBQUtDLE9BQW9CO0lBQzdDLElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1ELFFBQVFFLElBQUk7UUFDbEMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFFLEdBQUdKO1FBRXRDSyxRQUFRQyxHQUFHLENBQUNOO1FBRVosSUFBSSxDQUFDRSxZQUFZLENBQUNDLFNBQVMsQ0FBQ0MsVUFBVTtZQUNwQyxPQUFPVCxrRkFBWUEsQ0FBQ00sSUFBSSxDQUN0QjtnQkFBRU0sT0FBTztZQUF3RCxHQUNqRTtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsTUFBTUMsZUFBZSxNQUFNZix5REFBSUEsQ0FBQ2dCLE9BQU8sQ0FBQztZQUFFUDtRQUFNO1FBRWhELElBQUlNLGNBQWM7WUFDaEIsT0FBT2Qsa0ZBQVlBLENBQUNNLElBQUksQ0FDdEI7Z0JBQUVNLE9BQU87WUFBc0MsR0FDL0M7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLG9CQUFvQjtRQUNwQixNQUFNRyxPQUFPLE1BQU1mLHVEQUFnQixDQUFDO1FBQ3BDLE1BQU1pQixpQkFBaUIsTUFBTWpCLG9EQUFhLENBQUNRLFVBQVVPO1FBRXJELE1BQU1JLFVBQVUsSUFBSXJCLHlEQUFJQSxDQUFDO1lBQ3ZCUTtZQUNBQztZQUNBQyxVQUFVUztRQUNaO1FBRUEsTUFBTUcsWUFBWSxNQUFNRCxRQUFRRSxJQUFJO1FBQ3BDWixRQUFRQyxHQUFHLENBQUNVO1FBRVoseURBQXlEO1FBQ3pELE1BQU1uQiwwREFBU0EsQ0FBQztZQUFFTTtZQUFPZSxXQUFXO1lBQVVDLFFBQVFILFVBQVVJLEdBQUc7UUFBQztRQUVwRSxPQUFPekIsa0ZBQVlBLENBQUNNLElBQUksQ0FBQztZQUN2Qm9CLFNBQVM7WUFDVEMsUUFBUTtZQUNSTjtRQUNGO0lBQ0YsRUFBRSxPQUFPVCxPQUFZO1FBQ25CLE9BQU9aLGtGQUFZQSxDQUFDTSxJQUFJLENBQUM7WUFBRU0sT0FBT0EsTUFBTWMsT0FBTztRQUFDLEdBQUc7WUFBRWIsUUFBUTtRQUFJO0lBQ25FO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLW5leHRqcy8uL3NyYy9hcHAvYXBpL3VzZXJzL3NpZ251cC9yb3V0ZS50cz8xNmY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdAL2RiQ29uZmlnL2RiQ29uZmlnJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnQC9tb2RlbHMvdXNlck1vZGVsJztcclxuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IGJjcnlwdGpzIGZyb20gJ2JjcnlwdGpzJztcclxuaW1wb3J0IHsgc2VuZEVtYWlsIH0gZnJvbSAnQC9oZWxwZXJzL21haWxlcic7XHJcblxyXG5jb25uZWN0KCk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXFCb2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcbiAgICBjb25zdCB7IHVzZXJuYW1lLCBlbWFpbCwgcGFzc3dvcmQgfSA9IHJlcUJvZHk7XHJcblxyXG4gICAgY29uc29sZS5sb2cocmVxQm9keSk7XHJcblxyXG4gICAgaWYgKCF1c2VybmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkKSB7XHJcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgICB7IGVycm9yOiAnTWlzc2luZyByZXF1aXJlZCBmaWVsZHMgKHVzZXJuYW1lLCBlbWFpbCBvciBwYXNzd29yZCknIH0sXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwMCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XHJcblxyXG4gICAgaWYgKGV4aXN0aW5nVXNlcikge1xyXG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXHJcbiAgICAgICAgeyBlcnJvcjogJ1VzZXIgd2l0aCB0aGlzIGVtYWlsIGFscmVhZHkgZXhpc3RzJyB9LFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENyaXB0YXJlYSBwYXJvbGVpXHJcbiAgICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0anMuZ2VuU2FsdCgxMCk7XHJcbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdGpzLmhhc2gocGFzc3dvcmQsIHNhbHQpO1xyXG5cclxuICAgIGNvbnN0IG5ld1VzZXIgPSBuZXcgVXNlcih7XHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQ6IGhhc2hlZFBhc3N3b3JkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3Qgc2F2ZWRVc2VyID0gYXdhaXQgbmV3VXNlci5zYXZlKCk7XHJcbiAgICBjb25zb2xlLmxvZyhzYXZlZFVzZXIpO1xyXG5cclxuICAgIC8vIHNlbmQgdmVyaWZpY2F0aW9uIGVtYWlsIHx8IHJlLWVuYWJsZSB0aGlzIHdoZW4gdGVzdGluZ1xyXG4gICAgYXdhaXQgc2VuZEVtYWlsKHsgZW1haWwsIGVtYWlsVHlwZTogJ1ZFUklGWScsIHVzZXJJZDogc2F2ZWRVc2VyLl9pZCB9KTtcclxuXHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICBtZXNzYWdlOiAnVXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseScsXHJcbiAgICAgIHN1Y2NlczogdHJ1ZSxcclxuICAgICAgc2F2ZWRVc2VyLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJVc2VyIiwiTmV4dFJlc3BvbnNlIiwiYmNyeXB0anMiLCJzZW5kRW1haWwiLCJQT1NUIiwicmVxdWVzdCIsInJlcUJvZHkiLCJqc29uIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwic3RhdHVzIiwiZXhpc3RpbmdVc2VyIiwiZmluZE9uZSIsInNhbHQiLCJnZW5TYWx0IiwiaGFzaGVkUGFzc3dvcmQiLCJoYXNoIiwibmV3VXNlciIsInNhdmVkVXNlciIsInNhdmUiLCJlbWFpbFR5cGUiLCJ1c2VySWQiLCJfaWQiLCJtZXNzYWdlIiwic3VjY2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/signup/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/dbConfig/dbConfig.ts":
/*!**********************************!*\
  !*** ./src/dbConfig/dbConfig.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connect: () => (/* binding */ connect)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connect() {\n    try {\n        mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n        const connection = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection);\n        connection.on(\"connected\", ()=>{\n            console.log(\"MongoDB connected successfully\");\n        });\n        connection.on(\"error\", (err)=>{\n            console.log(\"MongoDB connection error. Please make sure MongoDB is running properly. \" + err);\n            process.exit();\n        });\n    } catch (error) {\n        console.log(\"Something went wrong!\");\n        console.log(error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGJDb25maWcvZGJDb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRXpCLGVBQWVDO0lBQ3BCLElBQUk7UUFDRkQsdURBQWdCLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztRQUN0QyxNQUFNQyxhQUFhTCw0REFBbUI7UUFFdENLLFdBQVdDLEVBQUUsQ0FBQyxhQUFhO1lBQ3pCQyxRQUFRQyxHQUFHLENBQUM7UUFDZDtRQUVBSCxXQUFXQyxFQUFFLENBQUMsU0FBU0csQ0FBQUE7WUFDckJGLFFBQVFDLEdBQUcsQ0FDVCw2RUFDRUM7WUFFSlAsUUFBUVEsSUFBSTtRQUNkO0lBQ0YsRUFBRSxPQUFPQyxPQUFPO1FBQ2RKLFFBQVFDLEdBQUcsQ0FBQztRQUNaRCxRQUFRQyxHQUFHLENBQUNHO0lBQ2Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2F1dGgtbmV4dGpzLy4vc3JjL2RiQ29uZmlnL2RiQ29uZmlnLnRzP2MwNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xyXG4gIHRyeSB7XHJcbiAgICBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSEpO1xyXG4gICAgY29uc3QgY29ubmVjdGlvbiA9IG1vbmdvb3NlLmNvbm5lY3Rpb247XHJcblxyXG4gICAgY29ubmVjdGlvbi5vbignY29ubmVjdGVkJywgKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnTW9uZ29EQiBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25uZWN0aW9uLm9uKCdlcnJvcicsIGVyciA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICdNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3IuIFBsZWFzZSBtYWtlIHN1cmUgTW9uZ29EQiBpcyBydW5uaW5nIHByb3Blcmx5LiAnICtcclxuICAgICAgICAgIGVyclxyXG4gICAgICApO1xyXG4gICAgICBwcm9jZXNzLmV4aXQoKTtcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZygnU29tZXRoaW5nIHdlbnQgd3JvbmchJyk7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwiY29ubmVjdGlvbiIsIm9uIiwiY29uc29sZSIsImxvZyIsImVyciIsImV4aXQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/dbConfig/dbConfig.ts\n");

/***/ }),

/***/ "(rsc)/./src/helpers/mailer.ts":
/*!*******************************!*\
  !*** ./src/helpers/mailer.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendEmail: () => (/* binding */ sendEmail)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"(rsc)/./node_modules/nodemailer/lib/nodemailer.js\");\n/* harmony import */ var _models_userModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/userModel */ \"(rsc)/./src/models/userModel.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst sendEmail = async ({ email, emailType, userId })=>{\n    try {\n        const hashedToken = await bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().hash(userId.toString(), 10);\n        if (emailType === \"VERIFY\") {\n            await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(userId, {\n                verifyToken: hashedToken,\n                verifyTokenExpiry: Date.now() + 2400000\n            });\n        } else if (emailType === \"RESET\") {\n            await _models_userModel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(userId, {\n                forgotPasswordToken: hashedToken,\n                forgotPasswordTokenExpiry: Date.now() + 2400000\n            });\n        }\n        var transport = nodemailer__WEBPACK_IMPORTED_MODULE_0__.createTransport({\n            host: \"sandbox.smtp.mailtrap.io\",\n            port: 2525,\n            auth: {\n                user: \"9786847b3dda6d\",\n                pass: \"ed492be658005d\"\n            }\n        });\n        // remove the paste\n        const mailOptions = {\n            from: \"admin@gmail.com\",\n            to: email,\n            subject: emailType === \"VERIFY\" ? \"Verify your email\" : \"Reset your password\",\n            html: `<p>Click <a href=\"${process.env.domain}/verifyemail?token=${hashedToken}\">here</a> to ${emailType === \"VERIFY\" ? \"verify your email\" : \"reset your password\"}\r\n      or copy and paste the link below in your browser. <br> ${process.env.domain}/verifyemail?token=${hashedToken}\r\n\r\n      </p>`\n        };\n        const mailResponse = await transport.sendMail(mailOptions);\n        return mailResponse;\n    } catch (error) {\n        throw new Error(error.message);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvaGVscGVycy9tYWlsZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0M7QUFDRTtBQUNOO0FBRXpCLE1BQU1HLFlBQVksT0FBTyxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFPO0lBQy9ELElBQUk7UUFDRixNQUFNQyxjQUFjLE1BQU1MLG9EQUFhLENBQUNJLE9BQU9HLFFBQVEsSUFBSTtRQUUzRCxJQUFJSixjQUFjLFVBQVU7WUFDMUIsTUFBTUoseURBQUlBLENBQUNTLGlCQUFpQixDQUFDSixRQUFRO2dCQUNuQ0ssYUFBYUo7Z0JBQ2JLLG1CQUFtQkMsS0FBS0MsR0FBRyxLQUFLO1lBQ2xDO1FBQ0YsT0FBTyxJQUFJVCxjQUFjLFNBQVM7WUFDaEMsTUFBTUoseURBQUlBLENBQUNTLGlCQUFpQixDQUFDSixRQUFRO2dCQUNuQ1MscUJBQXFCUjtnQkFDckJTLDJCQUEyQkgsS0FBS0MsR0FBRyxLQUFLO1lBQzFDO1FBQ0Y7UUFFQSxJQUFJRyxZQUFZakIsdURBQTBCLENBQUM7WUFDekNtQixNQUFNO1lBQ05DLE1BQU07WUFDTkMsTUFBTTtnQkFDSkMsTUFBTTtnQkFDTkMsTUFBTTtZQUVSO1FBQ0Y7UUFFQSxtQkFBbUI7UUFDbkIsTUFBTUMsY0FBYztZQUNsQkMsTUFBTTtZQUNOQyxJQUFJdEI7WUFDSnVCLFNBQ0V0QixjQUFjLFdBQVcsc0JBQXNCO1lBQ2pEdUIsTUFBTSxDQUFDLGtCQUFrQixFQUN2QkMsUUFBUUMsR0FBRyxDQUFDQyxNQUFNLENBQ25CLG1CQUFtQixFQUFFeEIsWUFBWSxjQUFjLEVBQzlDRixjQUFjLFdBQVcsc0JBQXNCLHNCQUNoRDs2REFDc0QsRUFDckR3QixRQUFRQyxHQUFHLENBQUNDLE1BQU0sQ0FDbkIsbUJBQW1CLEVBQUV4QixZQUFZOztVQUU5QixDQUFDO1FBQ1A7UUFDQSxNQUFNeUIsZUFBZSxNQUFNZixVQUFVZ0IsUUFBUSxDQUFDVDtRQUM5QyxPQUFPUTtJQUNULEVBQUUsT0FBT0UsT0FBWTtRQUNuQixNQUFNLElBQUlDLE1BQU1ELE1BQU1FLE9BQU87SUFDL0I7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXV0aC1uZXh0anMvLi9zcmMvaGVscGVycy9tYWlsZXIudHM/NmM5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tICdub2RlbWFpbGVyJztcclxuaW1wb3J0IFVzZXIgZnJvbSAnQC9tb2RlbHMvdXNlck1vZGVsJztcclxuaW1wb3J0IGJjcnlwdGpzIGZyb20gJ2JjcnlwdGpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZW5kRW1haWwgPSBhc3luYyAoeyBlbWFpbCwgZW1haWxUeXBlLCB1c2VySWQgfTogYW55KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGhhc2hlZFRva2VuID0gYXdhaXQgYmNyeXB0anMuaGFzaCh1c2VySWQudG9TdHJpbmcoKSwgMTApO1xyXG5cclxuICAgIGlmIChlbWFpbFR5cGUgPT09ICdWRVJJRlknKSB7XHJcbiAgICAgIGF3YWl0IFVzZXIuZmluZEJ5SWRBbmRVcGRhdGUodXNlcklkLCB7XHJcbiAgICAgICAgdmVyaWZ5VG9rZW46IGhhc2hlZFRva2VuLFxyXG4gICAgICAgIHZlcmlmeVRva2VuRXhwaXJ5OiBEYXRlLm5vdygpICsgMjQwMDAwMCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGVtYWlsVHlwZSA9PT0gJ1JFU0VUJykge1xyXG4gICAgICBhd2FpdCBVc2VyLmZpbmRCeUlkQW5kVXBkYXRlKHVzZXJJZCwge1xyXG4gICAgICAgIGZvcmdvdFBhc3N3b3JkVG9rZW46IGhhc2hlZFRva2VuLFxyXG4gICAgICAgIGZvcmdvdFBhc3N3b3JkVG9rZW5FeHBpcnk6IERhdGUubm93KCkgKyAyNDAwMDAwLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgdHJhbnNwb3J0ID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xyXG4gICAgICBob3N0OiAnc2FuZGJveC5zbXRwLm1haWx0cmFwLmlvJyxcclxuICAgICAgcG9ydDogMjUyNSxcclxuICAgICAgYXV0aDoge1xyXG4gICAgICAgIHVzZXI6ICc5Nzg2ODQ3YjNkZGE2ZCcsXHJcbiAgICAgICAgcGFzczogJ2VkNDkyYmU2NTgwMDVkJyxcclxuICAgICAgICAvLyBhZGQgY3JlZGVudGlhbHMgdG8gLmVudiBmaWxlXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyByZW1vdmUgdGhlIHBhc3RlXHJcbiAgICBjb25zdCBtYWlsT3B0aW9ucyA9IHtcclxuICAgICAgZnJvbTogJ2FkbWluQGdtYWlsLmNvbScsXHJcbiAgICAgIHRvOiBlbWFpbCxcclxuICAgICAgc3ViamVjdDpcclxuICAgICAgICBlbWFpbFR5cGUgPT09ICdWRVJJRlknID8gJ1ZlcmlmeSB5b3VyIGVtYWlsJyA6ICdSZXNldCB5b3VyIHBhc3N3b3JkJyxcclxuICAgICAgaHRtbDogYDxwPkNsaWNrIDxhIGhyZWY9XCIke1xyXG4gICAgICAgIHByb2Nlc3MuZW52LmRvbWFpblxyXG4gICAgICB9L3ZlcmlmeWVtYWlsP3Rva2VuPSR7aGFzaGVkVG9rZW59XCI+aGVyZTwvYT4gdG8gJHtcclxuICAgICAgICBlbWFpbFR5cGUgPT09ICdWRVJJRlknID8gJ3ZlcmlmeSB5b3VyIGVtYWlsJyA6ICdyZXNldCB5b3VyIHBhc3N3b3JkJ1xyXG4gICAgICB9XHJcbiAgICAgIG9yIGNvcHkgYW5kIHBhc3RlIHRoZSBsaW5rIGJlbG93IGluIHlvdXIgYnJvd3Nlci4gPGJyPiAke1xyXG4gICAgICAgIHByb2Nlc3MuZW52LmRvbWFpblxyXG4gICAgICB9L3ZlcmlmeWVtYWlsP3Rva2VuPSR7aGFzaGVkVG9rZW59XHJcblxyXG4gICAgICA8L3A+YCxcclxuICAgIH07XHJcbiAgICBjb25zdCBtYWlsUmVzcG9uc2UgPSBhd2FpdCB0cmFuc3BvcnQuc2VuZE1haWwobWFpbE9wdGlvbnMpO1xyXG4gICAgcmV0dXJuIG1haWxSZXNwb25zZTtcclxuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsibm9kZW1haWxlciIsIlVzZXIiLCJiY3J5cHRqcyIsInNlbmRFbWFpbCIsImVtYWlsIiwiZW1haWxUeXBlIiwidXNlcklkIiwiaGFzaGVkVG9rZW4iLCJoYXNoIiwidG9TdHJpbmciLCJmaW5kQnlJZEFuZFVwZGF0ZSIsInZlcmlmeVRva2VuIiwidmVyaWZ5VG9rZW5FeHBpcnkiLCJEYXRlIiwibm93IiwiZm9yZ290UGFzc3dvcmRUb2tlbiIsImZvcmdvdFBhc3N3b3JkVG9rZW5FeHBpcnkiLCJ0cmFuc3BvcnQiLCJjcmVhdGVUcmFuc3BvcnQiLCJob3N0IiwicG9ydCIsImF1dGgiLCJ1c2VyIiwicGFzcyIsIm1haWxPcHRpb25zIiwiZnJvbSIsInRvIiwic3ViamVjdCIsImh0bWwiLCJwcm9jZXNzIiwiZW52IiwiZG9tYWluIiwibWFpbFJlc3BvbnNlIiwic2VuZE1haWwiLCJlcnJvciIsIkVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/helpers/mailer.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/userModel.js":
/*!*********************************!*\
  !*** ./src/models/userModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a username\"\n        ],\n        unique: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please provide an email\"\n        ],\n        unique: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please provide a password\"\n        ]\n    },\n    isVerified: {\n        type: Boolean,\n        default: false\n    },\n    isAdmin: {\n        type: Boolean,\n        default: false\n    },\n    forgotPasswordToken: String,\n    forgotPasswordTokenExpiry: Date,\n    verifyToken: String,\n    verifyTokenExpiry: Date\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).users || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"users\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL3VzZXJNb2RlbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxVQUFVO1FBQ1JDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQTRCO1FBQzdDQyxRQUFRO0lBQ1Y7SUFDQUMsT0FBTztRQUNMSixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUEwQjtRQUMzQ0MsUUFBUTtJQUNWO0lBQ0FFLFVBQVU7UUFDUkwsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBNEI7SUFDL0M7SUFDQUksWUFBWTtRQUNWTixNQUFNTztRQUNOQyxTQUFTO0lBQ1g7SUFDQUMsU0FBUztRQUNQVCxNQUFNTztRQUNOQyxTQUFTO0lBQ1g7SUFDQUUscUJBQXFCVDtJQUNyQlUsMkJBQTJCQztJQUMzQkMsYUFBYVo7SUFDYmEsbUJBQW1CRjtBQUNyQjtBQUVBLE1BQU1HLE9BQU9uQix3REFBZSxDQUFDcUIsS0FBSyxJQUFJckIscURBQWMsQ0FBQyxTQUFTQztBQUU5RCxpRUFBZWtCLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRoLW5leHRqcy8uL3NyYy9tb2RlbHMvdXNlck1vZGVsLmpzP2M0ZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIHVzZXJuYW1lOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIHByb3ZpZGUgYSB1c2VybmFtZVwiXSxcclxuICAgIHVuaXF1ZTogdHJ1ZSxcclxuICB9LFxyXG4gIGVtYWlsOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIHByb3ZpZGUgYW4gZW1haWxcIl0sXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBwcm92aWRlIGEgcGFzc3dvcmRcIl0sXHJcbiAgfSxcclxuICBpc1ZlcmlmaWVkOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgfSxcclxuICBpc0FkbWluOiB7XHJcbiAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgfSxcclxuICBmb3Jnb3RQYXNzd29yZFRva2VuOiBTdHJpbmcsXHJcbiAgZm9yZ290UGFzc3dvcmRUb2tlbkV4cGlyeTogRGF0ZSxcclxuICB2ZXJpZnlUb2tlbjogU3RyaW5nLFxyXG4gIHZlcmlmeVRva2VuRXhwaXJ5OiBEYXRlLFxyXG59KTtcclxuXHJcbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMudXNlcnMgfHwgbW9uZ29vc2UubW9kZWwoXCJ1c2Vyc1wiLCB1c2VyU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInVuaXF1ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJpc1ZlcmlmaWVkIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJpc0FkbWluIiwiZm9yZ290UGFzc3dvcmRUb2tlbiIsImZvcmdvdFBhc3N3b3JkVG9rZW5FeHBpcnkiLCJEYXRlIiwidmVyaWZ5VG9rZW4iLCJ2ZXJpZnlUb2tlbkV4cGlyeSIsIlVzZXIiLCJtb2RlbHMiLCJ1c2VycyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/userModel.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/nodemailer","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fusers%2Fsignup%2Froute&page=%2Fapi%2Fusers%2Fsignup%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2Fsignup%2Froute.ts&appDir=C%3A%5CUsers%5CCookie%5COneDrive%5CDesktop%5Cauth-nextjs%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CCookie%5COneDrive%5CDesktop%5Cauth-nextjs&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();