import {combineUrlParams} from '../src';

interface IObject {
  [propName: string]: any
}

describe('测试combineUrlParams', () => {
  test('过滤假值', () => {
    const object: IObject = {
      a: 1,
      b: false,
      c: null,
      d: undefined,
      e: 'hello',
      f: 'world'
    };
    expect(combineUrlParams(object)).toEqual('a=1&e=hello&f=world');
  });
});
