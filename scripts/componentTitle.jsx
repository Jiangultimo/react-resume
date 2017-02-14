import React from 'react';
import Menu from './componentMenu.jsx';

require('../static/css/title.scss');

let title = React.createClass({
    render: function () {
        return (
            <div className="resume-title">
                <i className="resume-i-logo"></i>
                <Menu/>
             </div>
        );
    }
});

module.exports = title;
