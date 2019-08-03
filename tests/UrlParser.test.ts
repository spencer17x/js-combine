import { UrlParser } from '../src';

describe('测试getQueryString函数', () => {
  test('不传参数', () => {
    expect(UrlParser.getQueryString()).toEqual(null);
  });
  test('获取参数', () => {
    expect(UrlParser.getQueryString('a', '?a=1&b=2')).toEqual('1');
    expect(UrlParser.getQueryString('b', '?a=1&b=2')).toEqual('2');
  });
});
