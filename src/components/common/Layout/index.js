import React from 'react';
import './index.css';

class Layout extends React.Component{
    constructor(porps){
        super(porps);
    }

    render(){
        return (
            <div className="resume-div__wrapper">
                {this.props.children}
            </div>
        );
    }

}

export default Layout;