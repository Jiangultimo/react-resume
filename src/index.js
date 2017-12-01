// import React from 'react';
// import ReactDOM from 'react-dom';
// import './style.css';
//
// import Header from './components/common/Header/';
//
// class Index extends React.Component{
//     constructor(props){
//         super(props);
//     }
//
//     render(){
//         return (
//             <div className="resume-div__wrapper">
//                 <Header />
//             </div>
//         );
//
//     }
// }
//
// ReactDOM.render(
//     <Index />,
//     document.getElementById('app')
// )
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import todoApp from './store/reducers';

let store = createStore(todoApp);
let rootElement = document.getElementById('app');
render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);