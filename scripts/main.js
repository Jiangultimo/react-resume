/*
* 入口文件
*/

var React = require('react');
var ReactDOM = require('react-dom');

require('../static/css/normalize/normalize.css');
//头
var ResumeTitle = require('./componentTitle.jsx');

ReactDOM.render(
    <ResumeTitle/>,
    document.getElementById('resumeHeader')
);
