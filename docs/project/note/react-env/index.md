# React 配置多环境

配置开发模式和生产模式。

## webpack配置

### 1. 安装依赖

```bash
# 安装依赖
pnpm i dotenv-cli
```

 也可以使用cnpm、npm、yarn安装依赖。

### 2. 建立不同环境文件

```txt
// 项目根目录
// .env.development 
# 本地开发环境 
NODE_ENV = development 
# 本地地址api 
REACT_APP_API_PATH = http://localhost:7001 
// .env.production 
# 线上环境 
NODE_ENV= production 
# 线上地址api 
REACT_APP_API_PATH = http://59.110.46.248:8888 
 
// 增加其他公用api以REACT_APP开头_连接可以随意增加如： 
REACT_APP_APP_id = 1231224923884329 
```

### 3. 设置脚本执行

```json
// 修改package.json
// dotenv 直接将根目录下.env 结尾的文件中的变量添加到 process.env 上 
// dotenv -e 可以指定一些其他的.env 文件，将变量添加到 process.env 上 
 
dotenv -e 可以指定一些其他的.env 文件，将变量添加到 process.env 上 
"scripts": {
    "start": "dotenv -e .env.development react-scripts start", 
    "start:prod": "dotenv -e .env.production react-scripts start", 
    "build": "dotenv -e .env.production react-scripts build"
}
```

### 4. 获取环境地址

用 **process.env** 在react项目中，任意位置进行打印。

```js
console.log(process.env, 'process.env');
 
//{
//  "NODE_ENV": "development",
//  "PUBLIC_URL": "",
//  "FAST_REFRESH": true,
//  "REACT_APP_API_PATH": "http://localhost:7001",
//  "REACT_APP_APP_id": "1231224923884329"
//}
```

### 5. 设置全局请求地址

集成axios 设置bash地址

```js
// request.js
import axios from 'axios'
const instance = axios.create({
    baseURL: process.env.REACT_APP_API_PATH, // 在此可以统一增加前缀也可在.env文件中进行设置然后拼接
    timeout: 2500
});
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
 
// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
 
export default instance
```



## vite配置

官方文档：[Env Variables and Modes | Vite (vitejs.dev)](https://vitejs.dev/guide/env-and-mode.html#modes)

### 1. 配置环境文件

在项目根目录下（与package.json同级）

**新建配置文件 .env**

```txt
NODE_ENV = env
VITE_NAME='全局环境'
VITE_BASE_URL=''
```

全局环境，没有设置其他环境变量时，会加载这个文件里的内容，比如所有版本都使用的是同一个接口地址时,就可以写在这一个文件里面就行。

**新建配置文件 .env.development**

```txt
NODE_ENV = development
VITE_NAME='开发环境'
VITE_BASE_URL='/ap'
```

开发环境下的配置文件，执行npm run dev命令，会自动加载.env.development文件。会覆盖.env这个文件里定义的环境变量。

**新建配置文件 .env.production**

```txt
NODE_ENV = production
VITE_NAME='生产环境'
VITE_BASE_URL = 'http://xxxxxx/api'
```

生产环境下的配置文件,执行npm run build命令，会自动加载.env.production文件。会覆盖 .env这个文件里定义的环境变量。

### 2. package.json配置

```json
"scripts": {
    "dev": "vite --mode development",
    "build": "vite build --mode production", 
    "start": "vite --mode production",
    "build:env": "vite build --mode development"
}
```

dev 默认在本地开启测试环境的服务（mode='development'）

start 在本地开启正式环境服务 (mode='production')

build 默认打包到正式环境（基础配置取.env.production 文件中内容）

build:env 默认打包到测试环境（基础配置取.env.development 文件中内容）

### 3. 具体使用

打印环境变量

```js
console.log(import.meta.env)
```

执行

```bash
npm run dev
```

 浏览器查看打印结果：打印的是.env.development文件中的内容，**import.meta.env** 这个环境变量是当前环境变量的内容。