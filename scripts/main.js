/*
* 入口文件
*/
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import '../static/css/normalize/normalize.css';
import '../static/css/common.scss';
//头
import Header from './componentHeader.jsx';
//内容
import Content from './componentContent.jsx';

ReactDOM.render(
    <Header source="/data.json"/>,
    document.getElementById('resumeHeader')
);

ReactDOM.render(
    <Content />,
    document.getElementById('resumeContent')
);
