import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import '../static/css/title.scss';
import '../static/css/menu.scss';

class componentHeader extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            info: '基本信息',
            skill: '技能树',
            selfEvaluation: '自我感觉'
        }
    }
    componentDidMount(){
        $.ajax({
            url:this.props.source,
            type:'GET',
            cache:false,
            success:function(item){
                this.setState(item.menuData);
            }.bind(this),
            error:function(xhr,status,error){
                console.log(error.toString());
            }.bind(this)
        });
    }
    render() {
        return (
            <div className="resume-title">
                <i className="resume-i-logo"></i>
                <ul className="resume-menu">
                    <li>{this.state.info}</li>
                    <li>{this.state.skill}</li>
                    <li>{this.state.selfEvaluation}</li>
                </ul>
            </div>
        );
    }
}

module.exports = componentHeader;
