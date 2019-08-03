export default {
  /**
   * 主要为了实现浏览器中获取参数
   * 获取url中的参数
   * @param name
   * @param 浏览器环境下urlSearch 应设置为 location.search
   */
  getQueryString: (name: string = '', urlSearch: string = ''): string | null => {
    const reg: string = '(^|&)' + name + '=([^&]*)(&|$)'
    const r: RegExpMatchArray | null = urlSearch.substr(1).match(reg)
    if (r !== null) {
      return unescape(r[2])
    }
    return null
  }
};
