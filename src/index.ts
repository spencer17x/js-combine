/**
 * url 参数拼接
 * @param object
 * @returns {string}
 */
export const combineUrlParams = (object: object = {}) => {
  return Object.entries(object) // 生成二维数组
    .filter((arr: any[]) => ![undefined, null, NaN].includes(arr[1])) // 过滤假值
    .map((arr: any[]) => arr.join('=')) // 拼接参数，转为一维数组
    .join('&') // 转为字符串
}

/**
 * 合并className函数
 * @param args
 */
export const combineClass = (...args: Array<string | undefined>) => {
  return args.filter(Boolean).join(' ')
}

/**
 * 主要为了实现浏览器中获取参数
 * 获取url中的参数
 * @param name
 * @param 浏览器环境下urlSearch 应设置为 location.search
 */
export const getQueryString = (name: string = '', urlSearch: string = '') => {
  const reg: string = '(^|&)' + name + '=([^&]*)(&|$)'
  const r: RegExpMatchArray | null = urlSearch.substr(1).match(reg)
  if (r !== null) {
    return unescape(r[2])
  }
  return null
}
