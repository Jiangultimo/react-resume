/*
* 入口文件
*/

import React from 'react';
import ReactDOM from 'react-dom';

require('../static/css/normalize/normalize.css');
require('../static/css/common.scss');
//头
let ResumeTitle = require('./componentTitle.jsx');

ReactDOM.render(
    <ResumeTitle/>,
    document.getElementById('resumeHeader')
);
