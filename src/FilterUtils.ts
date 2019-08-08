/**
 * 过滤方法
 */
import { IObject } from './interface'

export default {
  /**
   * 过滤指定的值
   * @param object - 需要过滤的对象
   * @param array - 过滤指定的值
   */
  filterSpecifiedValue(object: IObject, array: any[]): object {
    Object.keys(object).forEach((key: string) => {
      if (array.includes(object[key])) {
        delete object[key]
      }
    })
    return object
  },
}
