import { combineUrlParams, combineClass } from '../src';

describe('测试combineUrlParams', () => {
  test('不过滤布尔值', () => {
    const object = {
      a: 1,
      b: false
    }
    expect(combineUrlParams(object)).toEqual('a=1&b=false')
  });
  test('过滤undefined', () => {
    const object = {
      a: 1,
      b: undefined
    }
    expect(combineUrlParams(object)).toEqual('a=1');
  });
  test('过滤null', () => {
    const object = {
      a: 1,
      b: null
    }
    expect(combineUrlParams(object)).toEqual('a=1');
  });
  test('过滤NaN', () => {
    const object = {
      a: 1,
      b: null
    }
    expect(combineUrlParams(object)).toEqual('a=1');
  });
  test('不过滤0', () => {
    const object = {
      a: 1,
      b: 0
    }
    expect(combineUrlParams(object)).toEqual('a=1&b=0');
  });
})

describe('测试combineClass', () => {
  test('过滤undefined', () => {
    expect(combineClass('hello', undefined)).toEqual('hello')
  });
  test('拼接className', () => {
    expect(combineClass('hello', 'world')).toEqual('hello world')
  });
})
