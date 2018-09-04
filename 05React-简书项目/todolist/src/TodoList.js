import React,{Component,Fragment} from 'react'
import './style.css'
import TodoItem from './TodoItem'
class TodoList extends Component {
 
 constructor(props){  // 接收props参数
 	 super(props)       // 调用父类的构造器函数也就是Component,super指的是父类
   this.state = {    // this.state是组件的状态
   	  inputValue:'',  //输出框中的内容
   	  list:[]        // 列表中的每一项
   }

 }
 handleInputChange(e){
 	 this.setState({
 	 	   inputValue: e.target.value  // 把inputValue设置为等于e.target.value
 	 })
   console.log(this);
   //this.state.inputValue = e.target.value,在react中无法直接更改state数据,只能通过this.setData
 	 console.log(e.target.value);
 }

 handleBtnClick(){
 	  this.setState({
 	  	list:[...this.state.list,this.state.inputValue],  // 往list新增值,把新的值与旧的值进行组合
 	  	inputValue:''
 	  })
 }
  
 handleItemDelete(index){
 	 const list = [...this.state.list];// 把list这个数组进行数据拷贝放到list中
 	 list.splice(index,1);
 	 this.setState({
 	 	  list: list
 	 })
 	 console.log(index);
 	 // 并不推荐直接的this.state.list.splice(index,1)
 	 // immutable，state不允许我们做任何的改变,我们要拷贝一个副本存储起来,进行更改，一旦你更该state的内容，在你做性能优化的时候,就会出现问题
 }
	render(){
		return (
			<Fragment>
			   {/*Fragment是一个占位符,底层其实是一个组件*/}
          <div>
             <label htmlFor="insertArea">输出内容</label>
             <input id="insertArea" className="input"
                 value={this.state.inputValue} 
                 onChange={this.handleInputChange.bind(this)}
             />
             <button onClick={this.handleBtnClick.bind(this)}>提交</button></div>
			    <ul>
	           { 
							  this.state.list.map((item,index) => {
							  	 return (
							  	 	  <div>
							  	 	  	  <TodoItem content={item} index={index} deleteItem={this.handleItemDelete.bind(this)}/>
							  	 	  	  {
									  	 	  	/*
										  	 	  	 <li 
										  	      onClick={this.handleItemDelete.bind(this,index)} 
										  	      key={index}
										  	      dangerouslySetInnerHTML = {{__html:item}}
										  	      >
										  	    </li> 
									  	 	  	 */
									  	 	  }
							  	 	  </div>
							  	 	  
							  	     
							  	 )
							  })
	           }
			    </ul>
			</Fragment>  

		)
	}
}

export default TodoList