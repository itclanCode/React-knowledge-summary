import React, { Component,Fragment } from 'react';
import TodoItem from './Todoitem'


// App是类,组件,继承react中的Component
class TodoList extends Component {
  constructor(props) {
    super(props);  // 初始化
    this.state = {
       list: [],
       inputValue:''
    }
    // 做this改变
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    //this.handleItemClick = this.handleItemClick.bind(this);
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
  getToItems (){
    return (
       this.state.list.map((item,index) => {
                 return (
                    <TodoItem delete={this.handleDelete}
                     content={item} 
                     key={index} 
                     index ={index} 
                    />
                 )
                 // return <li key={index} onClick={this.handleItemClick}>{item}</li>
        })
    )
  }

  render() {
    // jsx语法
    return (
      <Fragment>
          <div>
              <input value={this.state.inputValue}  onChange={this.handleInputChange} />
              <button className="red-btn" style={{background:'red',color:'#fff'}} onClick={this.handleBtnClick}>add</button>
          </div>
          <ul>
             {this.getToItems()}
          </ul>
      </Fragment>
    );
  }
}

export default TodoList;
