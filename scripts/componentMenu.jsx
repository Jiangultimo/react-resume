import React from 'react';

require('../static/css/menu.scss');

let menu = React.createClass({
    render: function () {
        return (
            <ul className="resume-menu">
                <li>基本信息</li>
                <li>技能树</li>
                <li>自我感觉n(*≧▽≦*)n</li>
            </ul>
        );
    }
});

module.exports = menu;
