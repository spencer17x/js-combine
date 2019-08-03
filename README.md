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

# 使用方法

combineClass 接受的类型为 string|undefined, 过滤掉undefined值

combineUrlParams 接受的类型为 any, 过滤 undefined, null, NaN

getQueryString 为从url中获取参数，参数name，urlSearch类型都为string, 浏览器环境下urlSearch应传location.search

```shell
yarn add js-combine
```

```js
import { combineClass, combineUrlParams, getQueryString } from 'js-combine';
// const { combineClass, combineClassUrlParams } = require('js-combine);
const classList = [undefined, 'hello', 'world', 'a'];
const urlParamsObject = {
  a: 1,
  b: null,
  c: undefined,
  d: 2
}
combineClass(...classList); // 'hello world a';
combineUrlParams(urlParamsObject); // 'a=1&d=2'
getQueryString(); // null
getQueryString('a', '?a=1&b=2'); // '1'
getQueryString('b', '?a=1&b=2'); // '2'
```
