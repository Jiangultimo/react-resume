import React from 'react';
import ReactDOM from 'react-dom';
import Ajax from './promise.js';
import Transfer from './DataTransfer.js';

import Info from './componentInfo.jsx';//基本信息
import Skill from './componentSkill.jsx';//技能
import Feeling from './componentFeeling.jsx';

import '../static/css/content.scss';

class componentContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navIndex:'',
            navName:''
        }
    }
    componentDidMount(){
        Transfer.subscribe('getNav',(item) => {
            this.setState({
                navIndex:item.navIndex,
                navName:item.navName
            })
        })
    }
    render(){
        let component;
        switch (this.state.navIndex) {
            case '1':
                component = <Info />;
                break;
            case '2':
                component = <Skill />;
                break;
            case '3':
                component = <Feeling />
                break;
            default:
            break;
        }
        return (
            <div className="resume-div__content__wrapper">
                <h4 className="resume-h4__content__header">{this.state.navName}</h4>
                {component}
            </div>
        );
    }
}

module.exports = componentContent;
