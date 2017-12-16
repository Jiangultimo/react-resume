import React from 'react';
import './index.css';

class IntroHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <h4>{this.props.title}</h4>
        )
    }
}

export default IntroHeader;