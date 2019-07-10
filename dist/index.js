"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * url 参数拼接
 * @param object
 * @returns {string}
 */
exports.combineUrlParams = function (object) {
    if (object === void 0) { object = {}; }
    return Object
        .entries(object) // 生成二维数组
        .filter(function (arr) { return arr[1]; }) // 过滤假值
        .map(function (arr) { return arr.join('='); }) // 拼接参数，转为一维数组
        .join('&'); // 转为字符串
};
