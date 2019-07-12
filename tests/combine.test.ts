import { combineUrlParams, combineClass } from '../src'

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
      f: 'world',
    }
    expect(combineUrlParams(object)).toEqual('a=1&e=hello&f=world')
  })
})

describe('测试combineClass', () => {
  test('过滤undefined', () => {
    expect(combineClass('hello', undefined)).toEqual('hello')
  });
  test('拼接className', () => {
    expect(combineClass('hello', 'world')).toEqual('hello world')
  });
})
