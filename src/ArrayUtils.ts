/**
 * 数组扩展方法
 */
export default {
  /**
   * 末端添加
   * @param array
   * @param elements
   */
  append<T>(array: T[], ...elements: T[]): T[] {
    const copyArr = array.slice();
    copyArr.push(...elements);
    return copyArr;
  },
  /**
   * 首端添加
   * @param array
   * @param elements
   */
  prepend<T>(array: T[], ...elements: T[]): T[] {
    const copyArr = array.slice();
    copyArr.unshift(...elements);
    return copyArr;
  },
  /**
   * 中间插入
   * @param array
   * @param index
   * @param elements
   */
  insert<T>(array: T[], index: number, ...elements: T[]): T[] {
    const copyArr = array.slice();
    copyArr.splice(index, 0, ...elements);
    return copyArr;
  },
  /**
   * 删除某个元素
   * @param array
   * @param index
   */
  remove<T>(array: T[], index: number): T[] {
    const copyArr = array.slice();
    copyArr.splice(index, 1);
    return copyArr;
  }
};
