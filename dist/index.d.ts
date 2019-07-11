declare const _default: "/**\n * url 参数拼接\n * @param object\n * @returns {string}\n */\nexport const combineUrlParams: (object: object) => string = (object: object = {}) => {\n  return Object.entries(object) // 生成二维数组\n    .filter((arr: any[]) => arr[1]) // 过滤假值\n    .map((arr: any[]) => arr.join('=')) // 拼接参数，转为一维数组\n    .join('&') // 转为字符串\n}\n";
export default _default;
