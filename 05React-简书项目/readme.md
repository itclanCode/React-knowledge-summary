### 课程内容

基础内容-->坏境搭建-->基础语法-->原理进阶-->动画-->Redux-->Redux进阶->实战项目-->坏境搭建-->Header-->首页-->登录校验-->上线

### 知识点

1. create-react-app
2. 组件化思维
3. jsx
4. 开发调试工具
5. 虚拟DOM
6. 生命周期
7. React-transition-group
8. Redux
9. Antd
10. UI,容器组件
11. 无状态组件
12. redux-thunk
13. redux-saga
14. styled-components
15. immutable.js(数据管理)
16. redux-immutable
17. axios

1. 彻底入门react的使用
2. 完全了解React的工具全家桶
3. 上手大型项目的前端开发
4. 规范的代码编写

### 2-1 React简介

ReactJS-->React Native-->React VR

函数式编程

React Fiber（16版本之后）

### 2-2开发环境搭建

1. 引入.js文件来使用React 
2. 通过脚手架工具来编码
3. create-react-app 工程文件夹
4. cd 工程文件夹 
5. npm start 

### 2-3工程目录文件简介

* yarn.lock：项目的依赖包
* Readme.md:项目说明
* package.json:项目介绍,版本号,依赖的第三方包
* gitignore:如果有一些文件不需要提交到git
* node_modules：包、第三方模块
* public
  * favicon.ico:小图标
  * index.html:项目首页的模板
  * manifest.json:pwa+servericeWorker,定义快捷方式的图标,大小等
* src:项目的所有源代码
  * index.js:整个React程序的入口文件
  * all in js(在js里面可以引入css)
  * App.test.js:自动化测试文件
  *  PWA progressive web application
 https协议服务器上,在没有网的情况下,也能访问浏览
import registerServiceWorker from './registerServiceWorker';
### 2-4 React中的组件

组件就是网页中的一部分

App.js就是一个简单的组件

class App extends React.Component {
    render(){
    return (
        
    )
}
}
export default App
定义了一个App类(组件)继承了React.Component类就可以了
render()函数返回什么,页面就展示什么

import React,{Component} from 'react'

import {component} from 'react'
// 等价于
import React from 'react'
const Component = React.Component

ReactDOM展示页面的内容，后面在render中使用了jsx语法，那么就一定得引入React,不引入React，就编译不了jsx语法

render()函数里面有html标签,那么都是jsx语法,避免编译出错,需要引入React
凡是用到jsx语法的,都得引入React
### 2-5React中最基础的jsx语法

在js里面写html标签,就称为jsx，在以前的js中插入html标签,往往需要用双引号给扩起来
而在jsx语法中,则不需要

在jsx语法中,如果我们要使用自己创建的组件，使用组件,组件的开头必须是大写开头

在jsx中一个标签若以大写字母开头,那么它就是一个组件
return 后面一个括号,使我们可以编写多行的jsx语法

### 3-1 使用React编写todolist功能

在React中render函数的返回值中,jsx语法中元素的最外层必须有一个包裹的元素，否则就会报错

如果想要最外层没有抱过的标签，可以引入React中的Fragment(占位符)组件,可以让最外层的标签隐藏掉

### React中的响应式设计私下宁和事件绑定

原始操作DOM的思想:获取元素-->操作DOM-->点击按钮-->找到最外层的框-->往里添加数据

React是一个响应式的框架,在做编程的时候,我们不要操作DOM,我们操作的是数据,通过数据的变化,React会自动的感知到数据的变化,自动的帮你去生成DOM，所以在写React代码的时候,我们在也不用关注DOM层操作了,我们只需关注数据层的操作就可以了

只要两组数据就可以了,一组数据用来存储input框中的值，一组数据存储列表中的每一项

在react中如何定义数据呢?一个类肯定有一个constructr构造器函数

React定义数据需要把数据它定义在state里面

1. 原生的事件绑定与React中的事件绑定有一些区别
onchange是原生的,而React中第二个首字母要大写

2. state负责存储组件里面的数据,而在jsx中时间绑定中,若需要使用jsx表达式,使用变量,你需要用花括号{}对表达式进行包裹,同时当对事件进行绑定时,需要bind(this)对函数的作用域进行变更
3. 如果你想改变数据项的内容,你不能直接的去更改它,需要通过setState这个函数去更改，并且向里面传入一个对象的形式来对state里面的数据项进行变更

### 3-3 实现Todolist新增删除功能

展开运算符，把以前的数组每项展开,生成新的数组

在react中作循环渲染的时候,你需要渲染出的每项加一个唯一的标识

immutable，state不允许我们做任何的改变,我们要拷贝一个副本存储起来,进行更改，一旦你更该state的内容，在你做性能优化的时候,就会出现问题

### 3-4 jsx语法细节的补充

如何在jsx里面编写注释

需要用一个{/* 在这里面写注释 */}，只在开发时有用
{
    // 注释，单行注释,花括号不能放在一行
}

在react的jsx语法中,给标签添加class时,不要直接写class应该写className

dangerouslySetInnerHTML = {{__html:item}},让表单支持渲染标签,让标签不被转义

label与for不能使用,react会误以为与for循环混淆，要与htmlFor使用即可

### 3-5 拆分组件与组件之间的传值

父组件向子组件传递数据

父组件怎么把数据传递给子组件呢?

通过属性的方式来传值 变量属性={数据}
子组件通过this.props.变量属性

子组件怎么去改变父组件的方法.改变父组件里面的数据，那么把父组件的方法传给子组件就行了


1. 如何创建组件的拆分,按照格式进行书写
2. 父子组件之间的关系
3. 父组件向子组件传递数据,通过标签属性的形式,既可以传递数据也可以传递方法
4. 子组件怎么接收父组件传递过来的数据,通过this.props.属性来接收
5. 子组件想要调用父组件的方法，改变父组件的数据，怎么去调用父组件中的方法?
6. 子组件在调用父组件方法的时候,父组件传递过来的this指向要做一次绑定



