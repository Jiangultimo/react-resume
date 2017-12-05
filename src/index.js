import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

import Header from './components/common/Header/';

class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="resume-div__wrapper">
                <Header />
            </div>
        );

    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
)
