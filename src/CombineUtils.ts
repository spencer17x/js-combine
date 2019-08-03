export default {
  /**
   * url 参数拼接
   * @param object
   * @returns {string}
   */
  combineUrlParams: (object: object = {}): string => {
    return Object.entries(object) // 生成二维数组
      .filter((arr: any[]) => ![undefined, null, NaN].includes(arr[1])) // 过滤假值
      .map((arr: any[]) => arr.join('=')) // 拼接参数，转为一维数组
      .join('&') // 转为字符串
  },
  /**
   * 合并className函数
   * @param args
   */
  combineClass: (...args: Array<string | undefined>): string => {
    return args.filter(Boolean).join(' ')
  },
}
