import { CombineUtils } from '../src';

interface IObject {
  [propName: string]: any
}

describe('测试combineUrlParams', () => {
  test('不过滤布尔值', () => {
    const object: IObject = {
      a: 1,
      b: false
    }
    expect(CombineUtils.combineUrlParams(object)).toEqual('a=1&b=false')
  });
  test('过滤undefined', () => {
    const object: IObject = {
      a: 1,
      b: undefined
    }
    expect(CombineUtils.combineUrlParams(object)).toEqual('a=1');
  });
  test('过滤null', () => {
    const object: IObject = {
      a: 1,
      b: null
    }
    expect(CombineUtils.combineUrlParams(object)).toEqual('a=1');
  });
  test('过滤NaN', () => {
    const object: IObject = {
      a: 1,
      b: null
    }
    expect(CombineUtils.combineUrlParams(object)).toEqual('a=1');
  });
  test('不过滤0', () => {
    const object: IObject = {
      a: 1,
      b: 0
    }
    expect(CombineUtils.combineUrlParams(object)).toEqual('a=1&b=0');
  });
})

describe('测试combineClass', () => {
  test('过滤undefined', () => {
    expect(CombineUtils.combineClass('hello', undefined)).toEqual('hello')
  });
  test('拼接className', () => {
    expect(CombineUtils.combineClass('hello', 'world')).toEqual('hello world')
  });
})
