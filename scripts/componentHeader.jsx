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
                <i className="resume-i-logo" id="pro"></i>
                <div className="resume-div__description">
                    <b>Hing</b>
                    <p>毕业于重庆邮电大学</p>
                    <p>现在就职于 <a href="http://www.zbj.com">ZBJ.COM</a> · 前端开发工程师</p>
                    <p>沉迷于 Coding，动漫，游戏，正在学习日语和画画。</p>
                    <p>信奉  如果不是现在，那是什么时候。</p>
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
