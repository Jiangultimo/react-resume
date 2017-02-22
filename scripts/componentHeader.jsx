import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Ajax from './promise.js';

import '../static/css/header.scss';

class componentHeader extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            info: '',
            skill: '',
            selfEvaluation: '',
            github:{
                name:'',
                link:''
            }
        }
    }
    componentDidMount(){
        let ajax = Object.create(Ajax.prototype);
        ajax.getPromise(this.props.source,{},'GET').then( (item) => {
            item = JSON.parse(item);
            this.setState(item.menuData);
        }).catch( (error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <div className="resume-title clearfix">
                <i className="resume-i-logo"></i>
                <ul className="resume-menu">
                    <li>{this.state.info}</li>
                    <li>{this.state.skill}</li>
                    <li>{this.state.selfEvaluation}</li>
                    <li><a target="_blank" href={this.state.github.link} title={this.state.github.name}>GitHub</a></li>
                    <li><a href={this.state.zhihu} target="_blank">知乎</a></li>
                </ul>
            </div>
        );
    }
}

module.exports = componentHeader;
