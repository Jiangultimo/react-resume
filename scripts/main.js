/*
* 入口文件
*/
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import '../static/css/normalize/normalize.css';
import '../static/css/common.scss';
//头
const menuData = {
    info: '基本信息',
    skill: '技能树',
    selfEvaluation: '自我感觉'
}
import Header from './componentHeader.jsx';

ReactDOM.render(
    <Header menu={menuData} source="/"/>,
    document.getElementById('resumeHeader')
);
