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
                <div className="resume-div__description">
                    <b>Hing</b>
                    <p>Graduated from Chongqing University of Posts and Telecommunications</p>
                    <p>Now working for <a href="http://www.zbj.com">ZBJ.COM</a> · Web FE Developer</p>
                    <p>Addicted to coding, animation, drawing, learning japanese</p>
                    <p>Trust if not now, when what is.</p>
                </div>
                <ul className="resume-menu">
                    <li onClick={this.onClick} data-id="1">{this.state.info}</li>
                    <li onClick={this.onClick} data-id="2">{this.state.skill}</li>
                    <li onClick={this.onClick} data-id="3">{this.state.selfEvaluation}</li>
                    <li><a target="_blank" href={this.state.github.link} title={this.state.github.name}>GitHub</a></li>
                    <li><a href={this.state.zhihu} target="_blank">Zhihu</a></li>
                </ul>
            </div>
        );
    }
}

module.exports = componentHeader;
