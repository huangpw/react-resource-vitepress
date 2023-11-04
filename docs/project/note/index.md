---
layout: doc
---

# 🍆React基础笔记

## 认识React

### React是什么

一个专注于构建用户界面的 JavaScript 库，主要用于构建UI界面，和vue和angular并称前端三大框架。

不夸张的说，react引领了很多新思想，世界范围内是最流行的js前端框架，最新版本已经到了18，加入了许多很棒的新特性。

- React英文文档：https://reactjs.org/
- React中文文档：https://zh-hans.react.dev/
- React中文社区：https://link.zhihu.com/?target=http%3A//react-china.org/
- React Router英文文档：https://reactrouter.com/en/main
- Redux英文文档：https://redux.js.org/



### 学习网站

- React17学习笔记：https://www.kancloud.cn/tjs5945111/react/879926

- React17学习笔记：https://www.yuque.com/fechaichai/qeamqf/xbai87
- 项目实战：[React实战--打造画廊应用(上)-慕课网 (imooc.com)](http://www.imooc.com/learn/507)                [React实践图片画廊应用（下） (imooc.com)](http://www.imooc.com/learn/652)



### React有什么特点

- **1.声明式设计** −React采用声明范式，可以轻松描述应用。

  >  写UI就和写普通的HTML一样，抛弃命令式的繁琐实现。

  ![p9rzMjg.png](https://s1.ax1x.com/2023/05/11/p9rzMjg.png)

- **2.高效** −React通过对DOM的模拟，最大限度地减少与DOM的交互。

- **3.灵活** −React可以与已知的库或框架很好地配合。

- **4.JSX** − JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。

- **5.组件** − 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。

  > 组件是react中最重要的内容，组件可以通过搭积木的方式拼成一个完整的页面，通过组件的抽象可以增加复用能力和提高可维护性。

  ![p9rzDb9.png](https://s1.ax1x.com/2023/05/11/p9rzDb9.png)

- **6.单向响应的数据流** − React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

- **7.跨平台** − 使用 React Native 开发原生移动应用。

  > react既可以开发web应用也可以使用同样的语法开发原生应用（react-native），比如安卓和ios应用，甚至可以使用react开发VR应用，想象力空间十足，react更像是一个 `元框架`  为各种领域赋能 



## 环境初始化

### 为网站添加 React

官网文档：https://reactjs.bootcss.com/learn/add-react-to-a-website

#### 第一步：在页面中添加一个 HTML 元素

在 `<body>` 标签内的任何位置放置一个类似 `<div>` 的“容器”元素。

React 将把该 HTML 元素内的任何内容替换掉，因此一个空标签即可。

你可以根据需要在页面上放置任意多个类似的 HTML 元素。

```html
<!-- ... existing HTML ... -->

<div id="component-goes-here"></div>

<!-- ... existing HTML ... -->
```



#### 第二步：添加 script 标签

在 HTML 页面中，将以下三个文件通过 `<script>` 标签添加到 `</body>` 标签前：

- [**react.development.js**](https://unpkg.com/react@17/umd/react.development.js) 加载 React 核心代码。
- [**react-dom.development.js**](https://unpkg.com/react-dom@17/umd/react-dom.development.js) 让 React 渲染 HTML 元素到 [DOM](https://developer.mozilla.org/docs/Web/API/Document_Object_Model) 中。
- **like_button.js** 这将是你在第三步中编写组件的地方！

部署到生产环境时，将 “development.js” 文件替换为 “production.min.js” 文件。

```html
<body>
<!-- end of the page -->
  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
  <script src="like_button.js"></script>
</body>
```



#### 第三步：创建 React 组件

创建一个名为 **like_button.js** 文件并放置在 HTML 页面旁边，然后添加以下代码片段并保存文件。

此代码片段定义了一个名为 `LikeButton` 的 React 组件。

```jsx
'use strict';

function LikeButton() {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return 'You liked this!';
  }

  return React.createElement(
    'button',
    {
      onClick: () => setLiked(true),
    },
    'Like'
  );
}
```



#### 第四步：将 React 组件添加到页面中

最后，在 **like_button.js** 文件的底部添加如下两行代码。

这两行代码用于找到你在第一步中添加到 HTML 文件中的 `<div>` 标签，然后在其中显示 “Like” 按钮。

```js
const domContainer = document.getElementById('component-goes-here');
ReactDOM.render(React.createElement(LikeButton), domContainer);
```

**恭喜你！你刚刚将第一个 React 组件显示到你的网站上了！**

- [查看完整的示例代码](https://gist.github.com/rachelnabors/c64b3aeace8a191cf5ea6fb5202e66c9)

- [下载完整示例文件（压缩之后 2KB）](https://gist.github.com/rachelnabors/c64b3aeace8a191cf5ea6fb5202e66c9/archive/7b41a88cb1027c9b5d8c6aff5212ecd3d0493504.zip)

组件可重用！

在同一个 HTML 页面中的不同位置上显示同一个 React 组件。

当页面的各个由 React 驱动的部分互相独立时，这种使用方式是最有用的。

你可以放置多个容器元素并多次调用 `ReactDOM.render()` 来实现这一需求。

1. 在 **index.html** 文件中添加一个额外的容器元素 `<div id="component-goes-here-too"></div>`。
2. 在 **like_button.js** 文件中为新添加的容器元素添加一个的 `ReactDOM.render()` 调用：

```js
ReactDOM.render(
  React.createElement(LikeButton),
  document.getElementById('component-goes-here')
);

ReactDOM.render(
  React.createElement(LikeButton),
  document.getElementById('component-goes-here-too')
);
```



#### 第五步：为生产环境压缩 JavaScript 代码

未压缩的 JavaScript 代码会显著降低页面的加载时间。

- **如果没有压缩 JavaScript 代码的步骤**，[这里推荐一种方式](https://gist.github.com/gaearon/42a2ffa41b8319948f9be4076286e1f3)。
- **如果已经有压缩步骤了**，请确保部署的 HTML 加载的是以 `production.min.js` 结尾的 React 文件，如下所示：

```html
<script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
```



### 使用脚手架创建项目

#### 第一种：npm+webpack

通过react的脚手架，创建项目进行开发，部署。

​	① 安装脚手架Create React App。

```sh
$ cnpm install -g create-react-app
# OR
$ npm install -g create-react-app
```

​	② 创建项目

```sh
$ create-react-app 01reactapp(项目名称可以自定义)
```

​	③ 进入项目文件夹

```sh
$ cd 01reactapp
```

​	④ 启动项目

```sh
$ npm start
```

![react](https://typora-1306005259.cos.ap-guangzhou.myqcloud.com/typora/2021050114141719.png)



#### 第二种：yarn+webpack

​	① 使用脚手架创建项目

```bash
$ npx create-react-app react-basic
```

1. 说明： 

2. 1. 1. npx create-react-app 是固定命令，`create-react-app`是React脚手架的名称。
      2. react-basic表示项目名称，可以自定义，保持语义化。
      3. npx 命令会帮助我们临时安装create-react-app包，然后初始化项目完成之后会自自动删掉，所以不需要全局安装create-react-app 。

​	② 进入项目文件夹

```bash
$ cd react-basic
```

​	③ 启动项目

```bash
$ yarn start
# OR
$ npm start
```



#### 第三种：yarn+vite

​	① 使用脚手架创建项目

```bash
$ npm create vite@latest
# OR
$ yarn create vite # 报错执行下面命令，并配置环境变量
# OR 
$ yarn create-vite
```

​	② 启动项目

```bash
$ yarn dev
```



### 项目结构说明

-  目录说明 

1. 1. `src` 目录是我们写代码进行项目开发的目录
   2. `package.json`  中俩个核心库：react 、react-dom

-  目录调整 

1. 1. 删除src目录下自带的所有文件，只保留app.js根组件和index.js
   2. 创建index.js文件作为项目的入口文件，在这个文件中书写react代码即可

-  入口文件说明 

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// 引入根组件App
import App from './App'
// 通过调用ReactDOM的render方法渲染App根组件到id为root的dom节点上
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```

![react](https://typora-1306005259.cos.ap-guangzhou.myqcloud.com/typora/20210501142748469.png)



## JSX基础

### JSX介绍

概念：JSX是 JavaScript XML（HTML）的缩写，表示在 JS 代码中书写 HTML 结构 。

作用：在React中创建HTML结构（页面UI结构）。

优势：

1. 采用类似于HTML的语法，降低学习成本，会HTML就会JSX
2. 充分利用JS自身的可编程能力创建HTML结构

注意：

​	JSX 并不是标准的 JS 语法，是 JS 的语法扩展，浏览器默认是不识别的，脚手架中内置的 [@babel/plugin-transform-react-jsx](https://www.npmjs.com/package/@babel/plugin-transform-react-jsx) 包，用来解析该语法。

![p92zQUg.png](https://s1.ax1x.com/2023/05/16/p92zQUg.png)



### JSX语法

**优点：**

1. JSX执行更快，编译为JavaScript代码时进行优化

2. 类型更安全，编译过程如果出错就不能编译，及时发现错误

3. JSX编写模板更加简单快速。（不要跟VUE比）

**注意：**

1. JSX必须要有根节点。

2. 正常的普通HTML元素要小写。如果是大写，默认认为是组件。



### JSX中使用js表达式

**语法**

1、由HTML元素构成

2、中间如果需要插入变量用{}

3、{}中间可以使用表达式

4、{}中间表达式中可以使用JSX对象

5、属性和html内容一样都是用{}来插入内容

`{ JS 表达式 }`

```jsx
const name = '柴柴'

<h1>你好，我叫{name}</h1>   //    <h1>你好,我叫柴柴</h1>
```

**可以使用的表达式**

1. 字符串、数值、布尔值、null、undefined、object（ [] / {} ）
2. 1 + 2、'abc'.split('')、['a', 'b'].join('-')
3. fn()

**特别注意**

> if 语句/ switch-case 语句/ 变量声明语句，这些叫做语句，不是表达式，不能出现在 `{}` 中！！

**代码实现**

App.css

```css
.bgRed{
  background-color: red;
}
```

```jsx
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

import "./App.css"

// JSX语法
let time = new Date().toLocaleTimeString();
let str = "当前时间是：";
let element = (
  <div>
    <h1>helloworld</h1>
    <h2>{str + time}</h2>
  </div>
);

console.log(element)

let man = "发热";
let element2 = (
  <div>
    <h1>今天是否隔离</h1>
    <h2>{man === "发热" ? <button>隔离</button> : "躺床上"}</h2>
  </div>
);

let element4 = (
  <div>
    <span>横着躺</span>
    <span>竖着躺</span>
  </div>
);
man = "正常";
let element3 = (
  <div>
    <h1>今天是否隔离</h1>
    <h2>{man === "发热" ? <button>隔离</button> : element4}</h2>
  </div>
);

let color = 'bgRed'
let logo = 'https://www.baidu.com/img/pc_1c6e30772d5e4103103bd460913332f9.png'
//HTML的样式类名要写className,因为class在js当中是关键词
let element5 = (
    <div className={color}>
        <img src={logo} />
        红色的背景颜色
    </div>

)

let exampleStyle = {
  background:"skyblue",
  boderBottom:"1px solid red"
}

let element6 = (
  <div>
      <h1 style={exampleStyle}>helloworld</h1>
  </div>
)
```

```jsx
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(element);
```



### JSX注释

必须在括号的表达式内书写，否则报错：

`{/* 这里写注释 */}`

```jsx
let classStr2 = ['abc2','redBg2'].join(" ")
let element3 = (
    <div>
        {/* 这里写注释 */}
        <h1 className={classStr2} style={exampleStyle}>helloworld</h1>
    </div>
)
```



### JSX元素渲染

```jsx
let h1 = <h1>helloworld</h1>;
使用JSX的写法，可以创建JS元素对象
注意：JSX元素对象，或者组件对象，必须只有1个根元素（根节点）
```

**代码实现**

```jsx
//实现页面时刻的显示

function clock() {
  let time = new Date().toLocaleTimeString();
  let element = (
    <div>
                  <h1>现在的时间是{time} </h1>
                  <h2>这是副标题</h2>
              
    </div>
  );
  const root = ReactDOM.createRoot(document.querySelector("#root"));
  root.render(element);
}

clock();

setInterval(clock,1000)
```

```jsx
//实现页面时刻的显示

function Clock(props) {
  return (
    <div>
      <h1>现在的时间是{props.date.toLocaleTimeString()}</h1>
      <h2>这是副标题</h2>
    </div>
  );
}

function run() {
  const root = ReactDOM.createRoot(document.querySelector("#root"));
  root.render(<Clock date={new Date()} />);
}

run();

setInterval(run,1000)
```



### JSX列表渲染

实现：使用数组的`map` 方法。

```jsx
// 来个列表
const songs = [
  { id: 1, name: '痴心绝对' },
  { id: 2, name: '像我这样的人' },
  { id: 3, name: '南山南' }
]

function App() {
  return (
    <div className="App">
      <ul>
        {
          songs.map(item => <li>{item.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App
```

注意点：需要为遍历项添加 `key` 属性。

![p92zwaF.png](https://s1.ax1x.com/2023/05/16/p92zwaF.png)

1. key 在 HTML 结构中是看不到的，是 React 内部用来进行性能优化时使用。
2. key 在当前列表中要唯一的字符串或者数值（String/Number）。
3. 如果列表中有像 id 这种的唯一值，就用 id 来作为 key 值。
4. 如果列表中没有像 id 这种的唯一值，就可以使用 index（下标）来作为 key 值。



### JSX条件渲染

作用：根据是否满足条件生成HTML结构，比如Loading效果

实现：可以使用 `三元运算符` 或  `逻辑与(&&)运算符`

```jsx
// 来个布尔值
const flag = true
function App() {
  return (
    <div className="App">
      {/* 条件渲染字符串 */}
      {flag ? 'react真有趣' : 'vue真有趣'}
      {/* 条件渲染标签/组件 */}
      {flag ? <span>this is span</span> : null}
    </div>
  )
}
export default App
```



### JSX样式处理

- 行内样式 - style 

```jsx
style={{ color: 'red' }}
```
```jsx
function App() {
  return (
    <div className="App">
      <div style={{ color: 'red' }}>this is a div</div>
    </div>
  )
}

export default App
```

- 行内样式 - style - 更优写法 

```jsx
style={ styleObj }
```

```jsx
const styleObj = {
    color:red
}

function App() {
  return (
    <div className="App">
      <div style={ styleObj }>this is a div</div>
    </div>
  )
}

export default App
```

- 类名 - className（推荐）

```css
.title {
  font-size: 30px;
  color: blue;
}
```

- 类名 - className - 动态类名控制 

```jsx
import './app.css'
const showTitle = true
function App() {
  return (
    <div className="App">
      <div className={ showTitle ? 'title' : ''}>this is a div</div>
    </div>
  )
}
export default App
```

1、Class，style中，不可以存在多个class属性

```jsx
<div class='abc'  class={'active'} />  错误的表示
```

2、style样式中，如果存在多个单词的属性组合，第二个单词开始，首字母大写。或者用引号引起来，否则会报错。

```jsx
let exampleStyle = {
    background:"skyblue",
    borderBottom:"4px solid red",
    'background-image':"url(https://www.baidu.com/img/pc_1c6e30772d5e4103103bd460913332f9.png)"
}
```

3、多个类共存的操作

```jsx
let element2 = (
    <div>
        <h1 className={"abc "+classStr}>helloworld</h1>
    </div>
)


let classStr2 = ['abc2','redBg2'].join(" ")
let element3 = (
    <div>
        {/* 这里写注释 */}
        <h1 className={classStr2} style={exampleStyle}>helloworld</h1>
    </div>
)
```



### JSX注意事项

1. JSX必须有一个根节点，如果没有根节点，可以使用`<></>`（幽灵节点）替代。
2. 所有标签必须形成闭合，成对闭合或者自闭合都可以。
3. JSX中的语法更加贴近JS语法，属性名采用驼峰命名法  `class -> className`  `for -> htmlFor` 。
4. JSX支持多行（换行），如果需要换行，需使用`()` 包裹，防止bug出现。



### VSCode格式化配置

1.  安装vsCode prettier插件 
2.  修改配置文件 `setting.json` 

```json
{
  "git.enableSmartCommit": true,
  // 修改注释颜色
  "editor.tokenColorCustomizations": {
    "comments": {
      "fontStyle": "bold",
      "foreground": "#82e0aa"
    }
  },
  // 配置文件类型识别
  "files.associations": {
    "*.js": "javascript",
    "*.json": "jsonc",
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "extensions.ignoreRecommendations": false,
  "files.exclude": {
    "**/.DS_Store": true,
    "**/.git": true,
    "**/.hg": true,
    "**/.svn": true,
    "**/CVS": true,
    "**/node_modules": false,
    "**/tmp": true
  },
  // "javascript.implicitProjectConfig.experimentalDecorators": true,
  "explorer.confirmDragAndDrop": false,
  "typescript.updateImportsOnFileMove.enabled": "prompt",
  "git.confirmSync": false,
  "editor.tabSize": 2,
  "editor.fontWeight": "500",
  "[json]": {},
  "editor.tabCompletion": "on",
  "vsicons.projectDetection.autoReload": true,
  "editor.fontFamily": "Monaco, 'Courier New', monospace, Meslo LG M for Powerline",
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "editor.fontSize": 16,
  "debug.console.fontSize": 14,
  "vsicons.dontShowNewVersionMessage": true,
  "editor.minimap.enabled": true,
  "emmet.extensionsPath": [
    ""
  ],
  // vue eslint start 保存时自动格式化代码
  "editor.formatOnSave": true,
  // eslint配置项，保存时自动修复错误
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "vetur.ignoreProjectWarning": true,
  // 让vetur使用vs自带的js格式化工具
  // uni-app和vue 项目使用
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "javascript.format.semicolons": "remove",
  // // 指定 *.vue 文件的格式化工具为vetur
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  // // 指定 *.js 文件的格式化工具为vscode自带
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  // // 默认使用prettier格式化支持的文件
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.jsxBracketSameLine": true,
  // 函数前面加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "prettier.singleQuote": true,
  "prettier.semi": false,
  // eslint end
  // react
  // 当按tab键的时候，会自动提示
  "emmet.triggerExpansionOnTab": true,
  "emmet.showAbbreviationSuggestions": true,
  "emmet.includeLanguages": {
    // jsx的提示
    "javascript": "javascriptreact",
    "vue-html": "html",
    "vue": "html",
    "wxml": "html"
  },
  // end
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  // @路径提示
  "path-intellisense.mappings": {
    "@": "${workspaceRoot}/src"
  },
  "security.workspace.trust.untrustedFiles": "open",
  "git.ignoreMissingGitWarning": true,
  "window.zoomLevel": 1
}
```



## React组件基础

### 组件概念

![p9rzDb9.png](https://s1.ax1x.com/2023/05/11/p9rzDb9.png)

### 函数式组件

**概念：**使用 JS 的函数（或箭头函数）创建的组件，就叫做`函数组件` 。

**组件定义与渲染**

**代码实现一**

```jsx
// 定义函数组件
function HelloFn () {
  return <div>这是我的第一个函数组件!</div>
}

// 定义类组件
function App () {
  return (
    <div className="App">
      {/* 渲染函数组件 */}
      <HelloFn />
      <HelloFn></HelloFn>
    </div>
  )
}
export default App
```

**代码实现二**

```jsx
//函数式组件
function Childcom(props){
    console.log(props)

    let title = <h2>我是副标题</h2>
    let weather = props.weather
    //条件判断 
    let isGo = weather==='下雨' ?"不出门":"出门"

    return (
        <div>
            <h1>函数式组件helloworld</h1>
            {title}

            <div>
                是否出门？
                <span>{isGo}</span>
            </div>
        </div>
    )
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Childcom weather ="不下雨" />);
```

**约定说明**

1. 组件的名称**必须首字母大写**，react内部会根据这个来判断是组件还是普通的HTML标签 。
2. 函数组件**必须有返回值**，表示该组件的 UI 结构；如果不需要渲染任何内容，则返回 null 。
3. 组件就像 HTML 标签一样可以被渲染到页面中。组件表示的是一段结构内容，对于函数组件来说，渲染的内容是函数的**返回值**就是对应的内容 。
4. 使用函数名称作为组件标签名称，可以成对出现也可以自闭合 。



### 类式组件

**概念：**使用 ES6 的 class 创建的组件，叫做类（class）组件 。

**组件定义与渲染**

**代码实现一**

```jsx
// 引入React
import React from 'react'

// 定义类组件
class HelloC extends React.Component {
  render () {
    return <div>这是我的第一个类组件!</div>
  }
}

function App () {
  return (
    <div className="App">
      {/* 渲染类组件 */}
      <HelloC />
      <HelloC></HelloC>
    </div>
  )
}
export default App
```

**代码实现二**

```jsx
class HelloWorld extends React.Component {
    render() {
        console.log(this)
        return (
            <div>
                <h1>类组件定义HELLOWORLD</h1>
                <h1>hello:{this.props.name}</h1>
               
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<HelloWorld name="张三" />);
```



### 复合组件

组件中又有其他的组件，复合组件中，既可以有类组件，又可以有函数组件。

```jsx
function Childcom(props) {
    let title = <h2>我是副标题</h2>
    let weather = props.weather
    let isGO = weather  === '下雨' ? '不出门' : '出门'
    return (
        <div>
            <h1>函数式组件Childcom</h1>
            {title}
            <div>
                是否出门？
                <span>{isGO}</span>
            </div>
        </div>
    );
}

class HelloWorld extends React.Component {
    render() {
        console.log(this)
        return (
            <div>
                <h1>类组件定义HELLOWORLD</h1>
                <h1>hello:{this.props.name}</h1>
                <Childcom weather={this.props.weather} ></Childcom>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<HelloWorld name="张三" weather ="下雨" />);
```



### 函数式组件的事件绑定

#### 1. 如何绑定事件

-  语法
   on + 事件名称 = { 事件处理程序 } ，比如：`<div onClick={ onClick }></div>` 
-  注意点
   react事件采用驼峰命名法，比如：onMouseEnter、onFocus 

**代码实现**

```jsx
// 函数组件
function HelloFn () {
  // 定义事件回调函数
  const clickHandler = () => {
    console.log('事件被触发了')
  }
  return (
    // 绑定事件
    <button onClick={clickHandler}>click me!</button>
  )
}
```

#### 2. 获取事件对象

 获取事件对象e只需要在 事件的回调函数中 补充一个形参e即可拿到

```jsx
// 函数组件
function HelloFn () {
  // 定义事件回调函数
  const clickHandler = (e) => {
    console.log('事件被触发了', e)
  }
  return (
    // 绑定事件
    <button onClick={clickHandler}>click me!</button>
  )
}
```

 

#### 3. 传递额外参数

解决思路: 改造事件绑定为箭头函数 在箭头函数中完成参数的传递

```jsx
import React from "react"

// 如何获取额外的参数？
// onClick={ onDel } -> onClick={ () => onDel(id) }
// 注意: 一定不要在模板中写出函数调用的代码 onClick = { onDel(id) }  bad!!!!!!

const TestComponent = () => {
  const list = [
    {
      id: 1001,
      name: 'react'
    },
    {
      id: 1002,
      name: 'vue'
    }
  ]
  const onDel = (e, id) => {
    console.log(e, id)
  }
  return (
      <ul>
        {list.map(item =>（
           <li key={item.id}>
                {item.name}
                <button onClick={(e) => onDel(e, item.id)}>x</button>
           </li>
        ))}
      </ul>
  )
}

function App () {
  return (
    <div>
      <TestComponent />
    </div>
  )
}


export default App
```



### 类式组件的事件绑定

> 类组件中的事件绑定，整体的方式和函数组件差别不大。
>
> 唯一需要注意的 因为处于class类语境下 所以定义事件回调函数以及定它写法上有不同。
>
> 1. 定义的时候: class Fields语法 
> 2. 使用的时候: 需要借助this关键词获取

```jsx
import React from "react"
class CComponent extends React.Component {
  // class Fields
  clickHandler = (e, num) => {
    // 这里的this指向的是正确的当前的组件实例对象 
    // 可以非常方便的通过this关键词拿到组件实例身上的其他属性或者方法
    console.log(this)
  }

  clickHandler1 () {
    // 这里的this 不指向当前的组件实例对象而指向undefined 存在this丢失问题
    console.log(this)
  }

  render () {
    return (
      <div>
        <button onClick={(e) => this.clickHandler(e, '123')}>click me</button>
        <button onClick={this.clickHandler1}>click me</button>
      </div>
    )
  }
}

function App () {
  return (
    <div>
      <CComponent />
    </div>
  )
}

export default App
```



### 组件状态State

在React hook出来之前，函数式组件是没有自己的状态的。

![p9vREAx.png](https://s1.ax1x.com/2023/05/31/p9vREAx.png)

#### 1. 初始化状态

-  通过class的实例属性state来初始化 
-  state的值是一个对象结构，表示一个组件可以有多个数据状态 

```jsx
class Counter extends React.Component {
  // 初始化状态
  state = {
    count: 0
  }
  render() {
    return <button>计数器</button>
  }
}
```

#### 2. 读取状态

-  通过this.state来获取状态 

```jsx
class Counter extends React.Component {
  // 初始化状态
  state = {
    count: 0
  }
  render() {
    // 读取状态
    return <button>计数器{this.state.count}</button>
  }
}
```

#### 3. 修改状态

-  语法
   `this.setState({ 要修改的部分数据 })` 
-  setState方法作用 

1. 1. 修改state中的数据状态
   2. 更新UI

-  思想
   	数据驱动视图，也就是只要修改数据状态，那么页面就会自动刷新，无需手动操作dom 。
-  注意事项
   	**不要直接修改state中的值，必须通过setState方法进行修改** 。

```jsx
class Counter extends React.Component {
  // 定义数据
  state = {
    count: 0
  }
  // 定义修改数据的方法
  setCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  // 使用数据 并绑定事件
  render () {
    return <button onClick={this.setCount}>{this.state.count}</button>
  }
}
```



### this问题说明

![p9vR1HI.png](https://s1.ax1x.com/2023/05/31/p9vR1HI.png)

随着js标准的发展，主流的写法已经变成了class fields，无需考虑太多this问题 。



### React的状态不可变

**概念**：不要直接修改状态的值，而是基于当前状态创建新的状态值。

**1. 错误的直接修改**

```jsx
state = {
  count : 0,
  list: [1,2,3],
  person: {
     name:'jack',
     age:18
  }
}
// 直接修改简单类型Number
this.state.count++
++this.state.count
this.state.count += 1
this.state.count = 1

// 直接修改数组
this.state.list.push(123)
this.state.list.spice(1,1)

// 直接修改对象
this.state.person.name = 'rose'
```

**2. 基于当前状态创建新值**

```jsx
this.setState({
    count: this.state.count + 1
    list: [...this.state.list, 4],
    person: {
       ...this.state.person,
       // 覆盖原来的属性 就可以达到修改对象中属性的目的
       name: 'rose'
    }
})
```



### 表单处理

使用React处理表单元素，一般有俩种方式：

1. 受控组件 （推荐使用）
2. 非受控组件 （了解）

#### 1. 受控表单组件

> 什么是受控组件？  `input框自己的状态被React组件状态控制`
>
> React组件的状态的地方是在state中，input表单元素也有自己的状态是在value中，React将state与表单元素的值（value）绑定到一起，由state的值来控制表单元素的值，从而保证单一数据源特性。

**实现步骤**

以获取文本框的值为例，受控组件的使用步骤如下：

1. 在组件的state中声明一个组件的状态数据。
2. 将状态数据设置为input标签元素的value属性的值。
3. 为input添加change事件，在事件处理程序中，通过事件对象e获取到当前文本框的值（`即用户当前输入的值`）。
4. 调用setState方法，将文本框的值作为state状态的最新值。

**代码实现**

```jsx
import React from 'react'

class InputComponent extends React.Component {
  // 声明组件状态
  state = {
    message: 'this is message',
  }
  // 声明事件回调函数
  changeHandler = (e) => {
    this.setState({ message: e.target.value })
  }
  render () {
    return (
      <div>
        {/* 绑定value 绑定事件*/}
        <input value={this.state.message} onChange={this.changeHandler} />
      </div>
    )
  }
}


function App () {
  return (
    <div className="App">
      <InputComponent />
    </div>
  )
}
export default App
```

#### 2. 非受控表单组件

> 什么是非受控组件？
>
> 非受控组件就是通过手动操作dom的方式获取文本框的值，文本框的状态不受react组件的state中的状态控制，直接通过原生dom获取输入框的值。

**实现步骤**

1. 导入`createRef` 函数
2. 调用createRef函数，创建一个ref对象，存储到名为`msgRef`的实例属性中
3. 为input添加ref属性，值为`msgRef`
4. 在按钮的事件处理程序中，通过`msgRef.current`即可拿到input对应的dom元素，而其中`msgRef.current.value`拿到的就是文本框的值

**代码实现**

```jsx
import React, { createRef } from 'react'

class InputComponent extends React.Component {
  // 使用createRef产生一个存放dom的对象容器
  msgRef = createRef()

  changeHandler = () => {
    console.log(this.msgRef.current.value)
  }

  render() {
    return (
      <div>
        {/* ref绑定 获取真实dom */}
        <input ref={this.msgRef} />
        <button onClick={this.changeHandler}>click</button>
      </div>
    )
  }
}

function App () {
  return (
    <div className="App">
      <InputComponent />
    </div>
  )
}
export default App
```



## React组件通信

### 组件通信的意义

组件是独立且封闭的单元，默认情况下组件**只能使用自己的数据（state）** 。

组件化开发的过程中，完整的功能会拆分多个组件，在这个过程中不可避免的需要互相传递一些数据。

为了能让各组件之间可以进行互相沟通，数据传递，这个过程就是组件通信。

1. 父子关系 -  **最重要的**
2. 兄弟关系 -  **自定义事件模式产生技术方法 eventBus  /  通过共同的父组件通信**
3. 其它关系 -  **mobx / redux / zustand**



### 父传子实现

**实现步骤**

1.  父组件提供要传递的数据  -  `state` 
2.  给子组件标签`添加属性`值为 state中的数据 
3.  子组件中通过 `props` 接收父组件中传过来的数据 

4.  1. 类组件使用this.props获取props对象
    2. 函数式组件直接通过参数获取props对象

![p9vR22F.png](https://s1.ax1x.com/2023/05/31/p9vR22F.png)

**代码实现**

```jsx
import React from 'react'

// 函数式子组件
function FSon(props) {
  console.log(props)
  return (
    <div>
      子组件1
      {props.msg}
    </div>
  )
}

// 类子组件
class CSon extends React.Component {
  render() {
    return (
      <div>
        子组件2
        {this.props.msg}
      </div>
    )
  }
}
// 父组件
class App extends React.Component {
  state = {
    message: 'this is message'
  }
  render() {
    return (
      <div>
        <div>父组件</div>
        <FSon msg={this.state.message} />
        <CSon msg={this.state.message} />
      </div>
    )
  }
}

export default App
```



### props说明

**1.  props是只读对象（readonly）**

根据单项数据流的要求，子组件只能读取props中的数据，不能进行修改。

**2. props可以传递任意数据**

数字、字符串、布尔值、数组、对象、`函数、JSX` 。

**代码实现**

```jsx
class App extends React.Component {
  state = {
    message: 'this is message'
  }
  render() {
    return (
      <div>
        <div>父组件</div>
        <FSon 
          msg={this.state.message} 
          age={20} 
          isMan={true} 
          cb={() => { console.log(1) }} 
          child={<span>this is child</span>}
        />
        <CSon msg={this.state.message} />
      </div>
    )
  }
}
```

![p9vRq2D.png](https://s1.ax1x.com/2023/05/31/p9vRq2D.png)



### 子传父实现

**口诀：** 父组件给子组件传递回调函数，子组件调用

**实现步骤**

1. 父组件提供一个回调函数 - 用于接收数据
2. 将函数作为属性的值，传给子组件
3. 子组件通过props调用 回调函数
4. 将子组件中的数据作为参数传递给回调函数

![p9vWCPf.png](https://s1.ax1x.com/2023/05/31/p9vWCPf.png)

**代码实现**

```jsx
import React from 'react'

// 子组件
function Son(props) {
  function handleClick() {
    // 调用父组件传递过来的回调函数 并注入参数
    props.changeMsg('this is newMessage')
  }
  return (
    <div>
      {props.msg}
      <button onClick={handleClick}>change</button>
    </div>
  )
}


class App extends React.Component {
  state = {
    message: 'this is message'
  }
  // 提供回调函数
  changeMessage = (newMsg) => {
    console.log('子组件传过来的数据:',newMsg)
    this.setState({
      message: newMsg
    })
  }
  render() {
    return (
      <div>
        <div>父组件</div>
        <Son
          msg={this.state.message}
          // 传递给子组件
          changeMsg={this.changeMessage}
        />
      </div>
    )
  }
}

export default App
```



### 兄弟组件通信

**核心思路：** 通过状态提升机制，利用共同的父组件实现兄弟通信

![p9vWlzF.png](https://s1.ax1x.com/2023/05/31/p9vWlzF.png)

**实现步骤**

1. 将共享状态提升到最近的公共父组件中，由公共父组件管理这个状态 

- - 提供共享状态
  - 提供操作共享状态的方法

1. 要接收数据状态的子组件通过 props 接收数据
2. 要传递数据状态的子组件通过props接收方法，调用方法传递数据

**代码实现**

```jsx
import React from 'react'

// 子组件A
function SonA(props) {
  return (
    <div>
      SonA
      {props.msg}
    </div>
  )
}
// 子组件B
function SonB(props) {
  return (
    <div>
      SonB
      <button onClick={() => props.changeMsg('new message')}>changeMsg</button>
    </div>
  )
}

// 父组件
class App extends React.Component {
  // 父组件提供状态数据
  state = {
    message: 'this is message'
  }
  // 父组件提供修改数据的方法
  changeMsg = (newMsg) => {
    this.setState({
      message: newMsg
    })
  }

  render() {
    return (
      <>
        {/* 接收数据的组件 */}
        <SonA msg={this.state.message} />
        {/* 修改数据的组件 */}
        <SonB changeMsg={this.changeMsg} />
      </>
    )
  }
}

export default App
```



### 跨组件通信Context

官网文档：https://react.dev/learn/passing-data-deeply-with-context

![p9vW0zD.png](https://s1.ax1x.com/2023/05/31/p9vW0zD.png)

> 上图是一个react形成的嵌套组件树，如果我们想从App组件向任意一个下层组件传递数据，该怎么办呢？目前我们能采取的方式就是一层一层的props往下传，显然很繁琐 。
>
> 那么，Context 提供了一个**无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法** 。

**实现步骤**

1- 创建Context对象 导出 Provider 和 Consumer对象 

```javascript
const { Provider, Consumer } = createContext()
```

2- 使用Provider包裹上层组件提供数据 

```jsx
<Provider value={this.state.message}>
    {/* 根组件 */}
</Provider>
```

3- 需要用到数据的组件使用Consumer包裹获取数据 

```jsx
<Consumer >
    {value => /* 基于 context 值进行渲染*/}
</Consumer>
```

**代码实现**

```jsx
import React, { createContext }  from 'react'

// 1. 创建Context对象 
const { Provider, Consumer } = createContext()


// 3. 消费数据
function ComC() {
  return (
    <Consumer >
      {value => <div>{value}</div>}
    </Consumer>
  )
}

function ComA() {
  return (
    <ComC/>
  )
}

// 2. 提供数据
class App extends React.Component {
  state = {
    message: 'this is message'
  }
  render() {
    return (
      <Provider value={this.state.message}>
        <div className="app">
          <ComA />
        </div>
      </Provider>
    )
  }
}

export default App
```



## React组件进阶

### children属性

**children属性是什么**

表示该组件的子节点，只要组件内部有子节点，props中就有该属性

**children可以是什么**

1. 普通文本
2. 普通标签元素
3. 函数 / 对象
4. JSX

### props校验-场景和使用

> 对于组件来说，props是由外部传入的，我们其实无法保证组件使用者传入了什么格式的数据，如果传入的数据格式不对，就有可能会导致组件内部错误，有一个点很关键 - **组件的使用者可能报错了也不知道为什么**

看下面的例子

![p9vW7es.png](https://s1.ax1x.com/2023/05/31/p9vW7es.png)

面对这样的问题，如何解决？ **props校验**

**实现步骤**

1. 安装属性校验包：`yarn add prop-types`
2. 导入`prop-types` 包
3. 使用 `组件名.propTypes = {}` 给组件添加校验规则

**核心代码**

```jsx
import PropTypes from 'prop-types'

const List = props => {
  const arr = props.colors
  const lis = arr.map((item, index) => <li key={index}>{item.name}</li>)
  return <ul>{lis}</ul>
}

List.propTypes = {
  colors: PropTypes.array
}
```



### props校验-规则说明

**四种常见结构**

1. 常见类型：array、bool、func、number、object、string
2. React元素类型：element
3. 必填项：isRequired
4. 特定的结构对象：shape({})

**核心代码**

```js
// 常见类型
optionalFunc: PropTypes.func,
// 必填 只需要在类型后面串联一个isRequired
requiredFunc: PropTypes.func.isRequired,
// 特定结构的对象
optionalObjectWithShape: PropTypes.shape({
	color: PropTypes.string,
	fontSize: PropTypes.number
})
```

官网文档更多阅读：https://reactjs.org/docs/typechecking-with-proptypes.html



### props校验-默认值

> 通过 `defaultProps` 可以给组件的props设置默认值，在未传入props的时候生效 。



#### 1. 函数组件

> 直接使用函数参数默认值。

```jsx
function List({pageSize = 10}) {
  return (
    <div>
      此处展示props的默认值：{ pageSize }
    </div>
  )
}

// 不传入pageSize属性
<List />
```



#### 2. 类组件

> 使用类静态属性声明默认值，`static defaultProps = {}` 。

```jsx
class List extends Component {
  static defaultProps = {
    pageSize: 10
  }
  render() {
    return (
      <div>
        此处展示props的默认值：{this.props.pageSize}
      </div>
    )
  }
}
<List />
```



## 生命周期

组件的生命周期是指组件从被创建到挂载到页面中运行起来，再到组件不用时卸载的过程。

注意，只有类组件才有生命周期（类组件 实例化  函数组件 不需要实例化）。

### react16之前旧的生命周期

![p9vf2nJ.png](https://s1.ax1x.com/2023/05/31/p9vf2nJ.png)



###  react16的生命周期

![p9vhEEn.png](https://s1.ax1x.com/2023/05/31/p9vhEEn.png)



###  react18的生命周期

![p9vhn3T.png](https://s1.ax1x.com/2023/05/31/p9vhn3T.png)



### 新旧生命周期的区别在哪里？

> 在新的生命周期中，废弃了旧版本的3个带will的钩子，新提出了2个钩子。
>
> 新版本中除了componentWillUnmount之外，其余都需要加上UNSAFE_

**过时生命周期：**
① componentWillMount
② componentWillReceiveProps
③ componentWillUpdate

**即将过时生命周期：(在新代码中我们应该避免使用它们)**
① UNSAFE_componentWillMount
② UNSAFE_componentWillReceivePorps
③ UNSAFE_componentWillUpdate

**新增生命周期**
① getDerivedStateFromProps
② getSnapShotBeforeUpdate
③ getDerivedStateFromError
④ componentDidCatch



#### 新增 `getDerivedStateFromProps`

实际工作中基本用不到他。

这个函数前面应加static，因为是静态的。

通过这个钩子修改的state，state任何时候都取决于props，其他的函数无法进行修改。

只要这个钩子拦着，所有的状态都得听props的。



#### 新增 `getSnapshotBeforeUpdate`生命周期例子

HTML

```html
<div id="app"></div>
```

CSS

```css
.list {
    width: 200px;
    height: 150px;
    background-color: skyblue;
    overflow: auto;
}

.news {
    height: 30px;
}
```

JS

```jsx
class Count extends React.Component {
      state = {
        newsArr: []
      }
      render() {
        return (
          <div className="list" ref={c => { this.list = c }}>
            {
              this.state.newsArr.map((n, value) => {
                return <div className="news" key={value}>{n}</div>
              })
            }
          </div>
        )
      }
      componentDidMount() {
        setInterval(() => {
          // 获取原数据
          const { newsArr } = this.state
          const news = '新闻' + (newsArr.length + 1)
          this.setState({
            newsArr: [news, ...newsArr]
          })
        }, 200);
      }
      getSnapshotBeforeUpdate() {
        const { list } = this
        return list.scrollHeight
      }
      componentDidUpdate(props, state, xj) {
        console.log(xj);
        this.list.scrollTop += this.list.scrollHeight - xj
      }
    }
    ReactDOM.render(<Count count={109} />, document.querySelector('#app'))
```



### `component.forceUpdate()` 一个不常用的生命周期方法, 它的作用就是强制刷新

官网解释如下:

- 默认情况下，当组件的 state 或 props 发生变化时，组件将重新渲染。如果 render() 方法依赖于其他数据，则可以调用 forceUpdate() 强制让组件重新渲染。
- 调用 forceUpdate() 将致使组件调用 render() 方法，此操作会跳过该组件的 shouldComponentUpdate()。但其子组件会触发正常的生命周期方法，包括 shouldComponentUpdate() 方法。如果标记发生变化，React 仍将只更新 DOM。
- 通常你应该避免使用 forceUpdate()，尽量在 render() 中使用 this.props 和 this.state。

通常来说, 我们应该用 `setState()` 更新数据,从而驱动更新.所以用到 `component.forceUpdate()` 的情况并不多。



### 常用的生命周期

![p9vfmOH.png](https://s1.ax1x.com/2023/05/31/p9vfmOH.png)

http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/



### 生命周期 - 挂载阶段

![p9vhy5t.png](https://s1.ax1x.com/2023/05/31/p9vhy5t.png)

| 钩子 函数         | 触发时机                                            | 作用                                                         |
| ----------------- | --------------------------------------------------- | ------------------------------------------------------------ |
| constructor       | 创建组件时，最先执行，初始化的时候只执行一次        | 1. 初始化state  2. 创建 Ref 3. 使用 bind 解决 this 指向问题等 |
| render            | 每次组件渲染都会触发                                | 渲染UI（**注意： 不能在里面调用setState()** ）               |
| componentDidMount | 组件挂载（完成DOM渲染）后执行，初始化的时候执行一次 | 1. 发送网络请求  2.DOM操作                                   |



### 生命周期 - 更新阶段

![p9vhhrQ.png](https://s1.ax1x.com/2023/05/31/p9vhhrQ.png)

| 钩子函数           | 触发时机                  | 作用                                                         |
| ------------------ | ------------------------- | ------------------------------------------------------------ |
| render             | 每次组件渲染都会触发      | 渲染UI（与 挂载阶段 是同一个render）                         |
| componentDidUpdate | 组件更新后（DOM渲染完毕） | DOM操作，可以获取到更新后的DOM内容，**不要直接调用setState** |



### 生命周期 - 卸载阶段

| 钩子函数             | 触发时机                 | 作用                               |
| -------------------- | ------------------------ | ---------------------------------- |
| componentWillUnmount | 组件卸载（从页面中消失） | 执行清理工作（比如：清理定时器等） |



## Hooks基础

### 1. 什么是hooks

Hooks的本质：**一套能够使函数组件更强大，更灵活的“钩子”** 。

React体系里组件分为 类组件 和 函数组件

经过多年的实战，函数组件是一个更加匹配React的设计理念 `UI = f(data)`，也更有利于逻辑拆分与重用的组件表达形式，而先前的函数组件是不可以有自己的状态的，为了能让函数组件可以拥有自己的状态，所以从react v16.8开始，Hooks应运而生。

**注意点：**

1. 有了hooks之后，为了兼容老版本，class类组件并没有被移除，俩者都可以使用。
2. 有了hooks之后，不能在把函数成为无状态组件了，因为hooks为函数组件提供了状态。
3. hooks只能在函数组件中使用。



### 2. Hooks解决了什么问题

>  Hooks的出现解决了俩个问题   
>
>  1. 组件的状态逻辑复用  
>  2. 2.class组件自身的问题

1.  组件的逻辑复用
    在hooks出现之前，react先后尝试了 mixins混入，HOC高阶组件，render-props等模式 。
    但是都有各自的问题，比如mixin的数据来源不清晰，高阶组件的嵌套问题等等 。
2.  class组件自身的问题
    class组件就像一个厚重的‘战舰’ 一样，大而全，提供了很多东西，有不可忽视的学习成本，比如各种生命周期，this指向问题等等，而我们更多时候需要的是一个轻快灵活的'快艇' 。



## useState

### 1. 基础使用

**作用**

useState为函数组件提供状态（state）

**使用步骤**

1. 导入 `useState` 函数
2. 调用 `useState` 函数，并传入状态的初始值
3. 从`useState`函数的返回值中，拿到状态和修改状态的方法
4. 在JSX中展示状态
5. 调用修改状态的方法更新状态

**代码实现**

```jsx
import { useState } from 'react'

function App() {
  // 参数：状态初始值比如,传入 0 表示该状态的初始值为 0
  // 返回值：数组,包含两个值：1 状态值（state） 2 修改该状态的函数（setState）
  const [count, setCount] = useState(0)
  return (
    <button onClick={() => { setCount(count + 1) }}>{count}</button>
  )
}
export default App
```



### 2. 状态的读取和修改

**读取状态**

该方式提供的状态，是函数内部的局部变量，可以在函数内的任意位置使用

**修改状态**

1. setCount是一个函数，参数表示`最新的状态值`
2. 调用该函数后，将使用新值替换旧值
3. 修改状态后，由于状态发生变化，会引起视图变化

**注意事项**

1. 修改状态的时候，一定要使用新的状态替换旧的状态，不能直接修改旧的状态，尤其是引用类型



### 3. 组件的更新过程

函数组件使用 **useState** hook 后的执行过程，以及状态值的变化。

- 组件第一次渲染 

1. 1. 从头开始执行该组件中的代码逻辑
   2. 调用 `useState(0)` 将传入的参数作为状态初始值，即：0
   3. 渲染组件，此时，获取到的状态 count 值为： 0

- 组件第二次渲染 

1. 1. 点击按钮，调用 `setCount(count + 1)` 修改状态，因为状态发生改变，所以，该组件会重新渲染
   2. 组件重新渲染时，会再次执行该组件中的代码逻辑
   3. 再次调用 `useState(0)`，此时 **React 内部会拿到最新的状态值而非初始值**，比如，该案例中最新的状态值为 1
   4. 再次渲染组件，此时，获取到的状态 count 值为：1



注意：

​	**useState 的初始值(参数)只会在组件第一次渲染时生效**。

​	也就是说，以后的每次渲染，useState 获取到都是最新的状态值，React 组件会记住每次最新的状态值 。

```jsx
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  // 在这里可以进行打印测试
  console.log(count)
  return (
    <button onClick={() => { setCount(count + 1) }}>{count}</button>
  )
}
export default App
```



### 4. 使用规则

1.  `useState` 函数可以执行多次，每次执行互相独立，每调用一次为函数组件提供一个状态 

```jsx
function List(){
  // 以字符串为初始值
  const [name, setName] = useState('cp')
  // 以数组为初始值
  const [list,setList] = useState([])
}
```

2. `useState` 注意事项 

   a. 只能出现在函数组件或者其他hook函数中 

   b. 不能嵌套在if/for/其它函数中（react按照hooks的调用顺序识别每一个hook）


```jsx
let num = 1
function List(){
  num++
  if(num / 2 === 0){
     const [name, setName] = useState('cp') 
  }
  const [list,setList] = useState([])
}
// 俩个hook的顺序不是固定的，这是不可以的！！！
```

   c. 可以通过开发者工具查看hooks状态



## useEffect

### 1. 理解函数副作用

**什么是副作用**

副作用是相对于主作用来说的，一个函数除了主作用，其他的作用就是副作用。对于 React 组件来说，**主作用就是根据数据（state/props）渲染 UI**，除此之外都是副作用（比如，手动修改 DOM）

**常见的副作用**

1. 数据请求 ajax发送
2. 手动修改dom
3. localstorage操作

useEffect函数的作用就是为react函数组件提供副作用处理的！



### 2. 基础使用

**作用**

> 为react函数组件提供副作用处理

**使用步骤**

1. 导入 `useEffect` 函数
2. 调用 `useEffect` 函数，并传入回调函数
3. 在回调函数中编写副作用处理（dom操作）
4. 修改数据状态
5. 检测副作用是否生效

**代码实现**

```jsx
import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
 
  useEffect(()=>{
    // dom操作
    document.title = `当前已点击了${count}次`
  })
  return (
    <button onClick={() => { setCount(count + 1) }}>{count}</button>
  )
}

export default App
```



### 3. 依赖项控制执行时机

**1. 不添加依赖项**

> 组件首次渲染执行一次，以及不管是哪个状态更改引起组件更新时都会重新执行
>
> 1. 组件初始渲染
> 2. 组件更新 （不管是哪个状态引起的更新）

```jsx
useEffect(()=>{
    console.log('副作用执行了')
})
```

**2. 添加空数组**

> 组件只在首次渲染时执行一次

```jsx
useEffect(()=>{
	 console.log('副作用执行了')
},[])
```

**3. 添加特定依赖项**

> 副作用函数在首次渲染时执行，在依赖项发生变化时重新执行

```jsx
function App() {  
    const [count, setCount] = useState(0)  
    const [name, setName] = useState('zs') 
    
    useEffect(() => {    
        console.log('副作用执行了')  
    }, [count])  
    
    return (    
        <>      
         <button onClick={() => { setCount(count + 1) }}>{count}</button>      
         <button onClick={() => { setName('cp') }}>{name}</button>    
        </>  
    )
}
```

**注意事项**

useEffect 回调函数中用到的数据（比如，count）就是依赖数据，就应该出现在依赖项数组中，如果不添加依赖项就会有bug出现 。



### 4. 清理副作用

> 如果想要清理副作用 可以在副作用函数中的末尾return一个新的函数，在新的函数中编写清理副作用的逻辑
>
> 注意执行时机为：
>
> 1. 组件卸载时自动执行
> 2. 组件更新时，下一个useEffect副作用函数执行之前自动执行

```jsx
import { useEffect, useState } from "react"

const App = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timerId = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => {
      // 用来清理副作用的事情
      clearInterval(timerId)
    }
  }, [count])
  return (
    <div>
      {count}
    </div>
  )
}

export default App
```



## Hooks进阶

### useState - 回调函数的参数

**使用场景**

参数只会在组件的初始渲染中起作用，后续渲染时会被忽略。

如果初始 state 需要通过计算才能获得，则可以传入一个函数，在函数中计算并返回初始的 state，此函数只在初始渲染时被调用。

**语法**

```jsx
const [name, setName] = useState(()=>{   
  // 编写计算逻辑    return '计算之后的初始值'
})
```

**语法规则**

1. 回调函数return出去的值将作为 `name` 的初始值。
2. 回调函数中的逻辑只会在组件初始化的时候执行一次。

**语法选择**

1. 如果就是初始化一个普通的数据 直接使用 `useState(普通数据)` 即可。
2. 如果要初始化的数据无法直接得到需要通过计算才能获取到，使用`useState(()=>{})` 。

**来个需求**

```jsx
import { useState } from 'react'

function Counter(props) {
  const [count, setCount] = useState(() => {
    return props.count
  })
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

function App() {
  return (
    <>
      <Counter count={10} />
      <Counter count={20} />
    </>
  )
}

export default App
```



### useEffect - 发送网络请求

**使用场景**

> 如何在useEffect中发送网络请求，并且封装同步 async await操作 。

**语法要求**

> 不可以直接在useEffect的回调函数外层直接包裹 await ，因为**异步会导致清理函数无法立即返回** 。

```jsx
useEffect(async ()=>{    
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')   
    console.log(res)
},[])
```

**正确写法**

在内部单独定义一个函数，然后把这个函数包装成同步

```jsx
useEffect(()=>{   
    async function fetchData(){      
       const res = await axios.get('http://geek.itheima.net/v1_0/channels')                            console.log(res)   
    } 
},[])
```



### useRef - 真实的dom元素

**使用场景**

在函数组件中获取真实的dom元素对象或者是组件对象

**使用步骤**

1. 导入 `useRef` 函数
2. 执行 `useRef` 函数并传入null，返回值为一个对象 内部有一个current属性存放拿到的dom对象（组件实例）
3. 通过ref 绑定 要获取的元素或者组件

**获取dom**

```jsx
import { useEffect, useRef } from 'react'
function App() {  
    const h1Ref = useRef(null)  
    useEffect(() => {    
        console.log(h1Ref)  
    },[])  
    return (    
        <div>      
            <h1 ref={ h1Ref }>this is h1</h1>    
        </div>  
    )
}
export default App
```

**获取组件实例**

> 函数组件由于没有实例，不能使用ref获取，如果想获取组件实例，必须是类组件

Foo.js

```jsx
class Foo extends React.Component {  
    sayHi = () => {    
        console.log('say hi')  
    }  
    render(){    
        return <div>Foo</div>  
    }
}
    
export default Foo
```

App.js

```jsx
import { useEffect, useRef } from 'react'
import Foo from './Foo'
function App() {  
    const h1Foo = useRef(null)  
    useEffect(() => {    
        console.log(h1Foo)  
    }, [])  
    return (    
        <div> <Foo ref={ h1Foo } /></div>  
    )
}
export default App
```



### useContext - 跨组件通信

**实现步骤**

1. 使用`createContext` 创建Context对象
2. 在顶层组件通过`Provider` 提供数据
3. 在底层组件通过`useContext`函数获取数据

**代码实现**

```jsx
import { createContext, useContext } from 'react'
// 创建Context对象
const Context = createContext()

// 爸组件
function Foo() {  
    return <div>Foo <Bar/></div>
}

// 孙组件
function Bar() {  
    // 底层组件通过useContext函数获取数据  
    const name = useContext(Context)  
    return <div>Bar {name}</div>
}

// 爷组件
function App() {  
    return (    
        // 顶层组件通过Provider 提供数据    
        <Context.Provider value={'this is name'}>     
            <div><Foo/></div>    
        </Context.Provider>  
    )
}

export default App
```

