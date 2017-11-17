import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Index extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="resume-div__wrapper">
                <p>hello world</p>
            </div>
        );
        
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById('app')
)