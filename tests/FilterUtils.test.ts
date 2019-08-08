import { FilterUtils } from '../src';
import { IObject } from '../src/interface';

describe('测试FilterUtils函数', () => {
  test('测试filterSpecifiedValue(过滤指定函数)', () => {
    const testObject: IObject = { a: 1, b: null, d: 'hello', e: undefined, f: NaN, g: true, h: false };
    const filterObject: Object = FilterUtils.filterSpecifiedValue(testObject, [null, undefined, NaN, false]);
    expect(filterObject).toEqual({ a: 1, d: 'hello', g: true });
  });
});
