# combine

![](https://travis-ci.org/xuzpeng/combine.svg?branch=master)

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

```shell
yarn add js-combine
```

```js
import { combineClass, combineUrlParams } from 'js-combine';
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
```

