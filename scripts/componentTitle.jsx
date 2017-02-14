var React = require('react');
import Menu from './componentMenu.jsx';

require('../static/css/title.scss');

var title = React.createClass({
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
