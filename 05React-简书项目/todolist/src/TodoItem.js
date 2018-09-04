import React,{Component} from 'react'

class TodoItem extends Component {
   /*组件创建的时候,就会执行这个constructor函数*/
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	render() {
		return (
			<div 
			    onClick={this.handleClick}>
			    {this.props.content}
			</div>
		)
	}

	handleClick (){
		this.props.deleteItem(this.props.index);
		//alert(this.props.index);
	}
}

export default TodoItem;