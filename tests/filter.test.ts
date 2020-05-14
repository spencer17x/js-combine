import { filterSomeValue } from '../src';

describe('测试过滤指定值函数', () => {
  test('测试过滤指定值函数(过滤指定函数)', () => {
    const testObject = { a: 1, b: null, d: 'hello', e: undefined, f: NaN, g: true, h: false };
    const filterObject = filterSomeValue(testObject, [null, undefined, NaN, false]);
    expect(filterObject).toEqual({ a: 1, d: 'hello', g: true });
  });
});
