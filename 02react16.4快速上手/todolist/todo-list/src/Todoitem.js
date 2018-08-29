import React from 'react';

class TodoItem extends React.Component {
	handleDelete (){
		console.log(this.props.index);
		this.props.delete(this.props.index);
	}
	render() {
		return (
			<div onClick={this.handleDelete.bind(this)}>{this.props.content}</div>
	    )
	}
}
export default TodoItem