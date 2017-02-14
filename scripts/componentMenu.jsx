import React from 'react';

require('../static/css/menu.scss');

let menu = React.createClass({
    render: function () {
        return (
            <ul className="resume-menu">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        );
    }
});

module.exports = menu;
