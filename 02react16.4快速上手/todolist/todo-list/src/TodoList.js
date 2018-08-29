import React, { Component } from 'react';
import TodoItem from './Todoitem'


// App是类,组件,继承react中的Component
class TodoList extends Component {
  constructor(props) {
    super(props);  // 初始化
    this.state = {
       list: [],
       inputValue:''
    }
  }
  handleBtnClick() {
        this.setState({
           list: [...this.state.list,this.state.inputValue],
           inputValue:''
        })
        //this.state.list.push("hello world");
        //alert('click');
  }
  handleInputChange(e) {
          this.setState({
            inputValue: e.target.value
          })
          //console.log(e.target.value);
  }

 /* handleItemClick(index){
          // console.log(index);
          const list = [...this.state.list];
          list.splice(index,1);
          this.setState({
            list:list
          })
  }*/
  handleDelete(index) {
    console.log(index);
    const list = [...this.state.list];
          list.splice(index,1);
          this.setState({
            list:list
    })
  }
  render() {
    // jsx语法
    return (
      <div className="App">
          <div>
              <input value={this.state.inputValue}  onChange={this.handleInputChange.bind(this)} />
              <button onClick={this.handleBtnClick.bind(this)}>add</button>
          </div>
          <ul>
             {
               this.state.list.map((item,index) => {
                 return <TodoItem delete={this.handleDelete.bind(this)} content={item} key={index} index ={index} />
                 // return <li key={index} onClick={this.handleItemClick.bind(this)}>{item}</li>
               })
             }
          </ul>
      </div>
    );
  }
}

export default TodoList;
