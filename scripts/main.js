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

ReactDOM.render(
    <Header source="/data/data.json"/>,
    document.getElementById('resumeHeader')
);
