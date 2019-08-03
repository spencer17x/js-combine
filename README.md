# combine

![](https://travis-ci.org/xuzpeng/combine.svg?branch=master)
![GitHub top language](https://img.shields.io/github/languages/top/xuzpeng/combine.svg)
![GitHub language count](https://img.shields.io/github/languages/count/xuzpeng/combine.svg)
![NPM](https://img.shields.io/npm/l/js-combine.svg)


这是一个JavaScript工具库

# 安装

```bash
$ yarn add js-combine
```

# 发布版本

可以使用shell脚本发布

```bash
# mac下需要添加权限
$ chmod +x ./deploy.sh
# 补丁版本
$ ./deploy.sh patch
# 次要版本
$ ./deploy.sh minor
# 主版本
$ ./deploy.sh major
```

# npm 脚本

prepare: 发布前和用户安装前运行

prepublishOnly: 发布前运行

preversion: 新建一个版本前运行

version: 新建一个版本后运行

postversion: 新建版本后运行

# 使用说明

ArrayUtils中的方法会默认进行一层浅拷贝，防止对原数组产生影响。

CombineUtils.combineUrlParams中会过滤undefined, null, NaN 值

UrlParser.getQueryString 第二个参数应写为location.search，为了在浏览器获取url参数

```ts
import { ArrayUtils, CombineUtils, UrlParser } from '../src';
const testArray: any[] = [1, '2', 'a', 4];
ArrayUtils.append(testArray, 5); // [1, '2', 'a', 4, 5]
ArrayUtils.prepend(testArray, 'c'); // ['c', 1, '2', 'a', 4]
ArrayUtils.insert(testArray, 1, 'ddd'); // [1, 'ddd', '2', 'a', 4]
ArrayUtils.remove(testArray, 0); // ['2', 'a', 4]
CombineUtils.combineUrlParams({a: 1, b: null, c: undefined}); // 'a=1'
CombineUtils.combineClass('hello', undefined, 'world'); // 'hello world'
UrlParser.getQueryString('b', '?a=1&b=2') // '2'
```

# PR [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

欢迎所有的贡献, 也欢迎提出建议, 使得该库更加完善, 有需要提供的函数可提在 issues 里面.
