"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var i18next_1 = require("i18next");
var react_i18next_1 = require("react-i18next");
var resources = require("./resources");
i18next_1["default"].use(react_i18next_1.initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: __assign({}, Object.entries(resources).reduce(function (acc, _a) {
        var _b;
        var key = _a[0], value = _a[1];
        return (__assign(__assign({}, acc), (_b = {}, _b[key] = {
            translation: value
        }, _b)));
    }, {})),
    lng: 'en'
});
exports["default"] = i18next_1["default"];
