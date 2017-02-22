import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Ajax from './promise.js';
import Transfer from './DataTransfer.js';

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
    onClick(et){
        let data = {
            navIndex:et.target.getAttribute('data-id'),
            navName:et.target.innerHTML
        }
        Transfer.dispatch('getNav',data);
    }
    render() {
        return (
            <div className="resume-title clearfix">
                <i className="resume-i-logo"></i>
                <ul className="resume-menu">
                    <li onClick={this.onClick} data-id="1">{this.state.info}</li>
                    <li onClick={this.onClick} data-id="2">{this.state.skill}</li>
                    <li onClick={this.onClick} data-id="3">{this.state.selfEvaluation}</li>
                    <li><a target="_blank" href={this.state.github.link} title={this.state.github.name}>GitHub</a></li>
                    <li><a href={this.state.zhihu} target="_blank">知乎</a></li>
                </ul>
            </div>
        );
    }
}

module.exports = componentHeader;
