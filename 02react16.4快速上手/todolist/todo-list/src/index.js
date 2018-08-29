import React from 'react'; // 加载React这个库，让我们能使用组件
import ReactDOM from 'react-dom';
import './index.css';
// App组件,大写字母开头
import TodoList from './TodoList';

//把App组件加入到root中
ReactDOM.render(<TodoList />, document.getElementById('root'));

