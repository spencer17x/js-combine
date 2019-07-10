/**
 * url 参数拼接
 * @param object
 * @returns {string}
 */
export const combineUrlParams: (object: Object) => string = (object: Object = {}) => {
  return Object
    .entries(object) // 生成二维数组
    .filter((arr: any[]) => arr[1]) // 过滤假值
    .map((arr: any[]) => arr.join('=')) // 拼接参数，转为一维数组
    .join('&'); // 转为字符串
};

