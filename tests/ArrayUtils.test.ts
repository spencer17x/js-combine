import { ArrayUtils } from '../src';

describe('测试ArrayUtils函数', () => {
  const testArray: any[] = [1, '2', 'a', 4];
  test('测试ArrayUtils.append', () => {
    const newArr = ArrayUtils.append(testArray, 5);
    expect(newArr).toEqual([1, '2', 'a', 4, 5]);
  });
  test('测试ArrayUtils.prepend', () => {
    const newArr: any[] = ArrayUtils.prepend(testArray, 'c');
    expect(newArr).toEqual(['c', 1, '2', 'a', 4]);
  });
  test('测试ArrayUtils.insert', () => {
    const newArr: any[] = ArrayUtils.insert(testArray, 1, 'ddd');
    expect(newArr).toEqual([1, 'ddd', '2', 'a', 4]);
  });
  test('测试ArrayUtils.remove', () => {
    const newArr: any[] = ArrayUtils.remove(testArray, 0);
    expect(newArr).toEqual(['2', 'a', 4]);
  });
});
