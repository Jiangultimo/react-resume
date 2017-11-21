import { createStore } from 'redux';
import todoApp from './reducer';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';
let store = createStore(todoApp);
console.log(store.getState());

let unsubscribe = store.subscribe( () => {
    console.log(store.getState());
});

store.dispatch(addTodo('learn about actions'));
store.dispatch(addTodo('learn about reducers'));
store.dispatch(addTodo('learn about sotre'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unsubscribe();