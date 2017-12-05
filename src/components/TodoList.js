import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

export default class TodoList extends Component {
	constructor(props){
	    super(props);
    }

    render() {
		return (
			<ul>
				{this.props.todos.map((todo, index) =>
					<Todo {...todo}
						key={index}
					  onClick={ () => this.props.onTodoClick(index)}
				  />)
				}
			</ul>
		);
    }
}
// TodoList.propTypes = {
//     todos: PropTypes.arrayOf(PropTypes.shape({
//         id:PropTypes.number.isRequired,
//         completed: PropTypes.bool.isRequired,
//         text: PropTypes.string.isRequired
//     }).isRequired).isRequired,
//     onTodoClick: PropTypes.func.isRequired
// }

