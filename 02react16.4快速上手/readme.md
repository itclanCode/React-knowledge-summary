### 1-3 项目工程代码精简

1. index.js:入口文件
   * registerServiceWorker:pwa
2. App.test.js:做自动化测试的时候会用到的一个文件

### 1-4 什么是组件

组件:网页上的一部分

App组件,大写字母开头

引入React,能够让我们知道这react的语法

ReactDOM:把App组件渲染到页面的root标签里面

类App
React组件中必须要有render函数,负责这个组件要显示的内容

### 简单的jSX语法

在render函数中使用html标签,使用单标签的形式,并不会报错
也可以写js表达式，不能写js语法

### 编写todolist

1. 写react语法跟之前不一样，最外层有一个根标签
2. 事件绑定必须大写onClick
3. this指向问题
4. class定义,construcor，展开拓展运算符

### 新增列表项共嗯那个实现

### 删除列表功能

当你想要改变state中的数据时，不建议直接操作state，而是拷贝一个副本来操作

### React中组件的拆分

在React中存在着父子组件关系,父组件是todolist,子组件是todoitem

父组件怎么向子组件传递参数呢?父组件通过属性的形式向子组件传递参数，那么子组件怎么接收父组件传递过来的数据呢?子组件通过props来接收到父组件传递过来的参数


### 子组件向父组件传值

子组件如果想要和父组件进行通信,要调用父组件传递过来的方法

### 代码优化

### React中如何使用css样式修饰

在jsx语法中,加样式
style={{background:'red',color:'#fff'}}

React.fragment










