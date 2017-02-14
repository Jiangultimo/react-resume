var React = require('react');
require('../static/css/title.scss');

var title = React.createClass({
    render: function () {
        return (
            <div className="resume-title">
                <i className="resume-i-logo"></i>
             </div>
        );
    }
});

module.exports = title;
