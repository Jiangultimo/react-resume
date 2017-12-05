import React ,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from "../store/actions";

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';

class App extends Component {
	constructor(props){
		super(props);
	}

	render() {
		const { dispatch, visibileTodos, visibilityFilter } = this.props;
		console.log(this.props);
		console.log(visibilityFilter);
		return (
			<div>
				<AddTodo
					onAddClick = {text => dispatch(addTodo(text))}
				/>
				<TodoList
					todos = {visibileTodos}
					onTodoClick={ index => dispatch(completeTodo(index))}
				/>
				<Footer
					filter={visibilityFilter}
					onFilterChanger={nextFilter => dispatch(setVisibilityFilter(nextFilter))}
				/>
			</div>
		);
	}
}

// App.propTypes = {
// 	visibileTodos: PropTypes.arrayOf(PropTypes.shape({
// 		text: PropTypes.string.isRequired,
// 		complemted: PropTypes.bool.isRequired
// 	}).isRequired).isRequired,
// 	visibilityFilter: PropTypes.oneOf([
// 		'SHOW_ALL',
// 		'SHOW_COMPLETED',
// 		'SHOW_ACTIVE'
// 	]).isRequired
// }

function selectTodos (todos, filter) {
	switch (filter) {
		case VisibilityFilters.SHOW_ALL:
			return todos;
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(todo => todo.completed)
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(todo => !todo.completed)
	}
}

function select(state) {
	console.log(state)
	return {
		visibleTodos: selectTodos(state.todos, state.visibilityFilter),
		visibilityFilter: state.visibilityFilter
	}
}

export default connect(select)(App);

