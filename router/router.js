var swig = require('swig');
swig.setDefaults({ autoescape: false });
var router = {
    render: function (pathName, req, res) {
        var self = this;
        console.log(pathName);
        pathName = (function () {
            if (!self[pathName]) {
                res.end();
            } else {
                self[pathName](pathName, req, res);
            }
        } ());
    },
    ['/index']: function (_content, _req, _res) {
        var htmlStr = "<p>hello world</p>";
        var template = swig.compileFile('./views/index.html');
        var name = {
            name: 'hing'
        };
        var output = template(name);
        _res.writeHead(200, { 'content-type': 'text/html' });
        _res.write(output);
        _res.end();
    },
    ['/404']: function (_content, _req, _res) {
        _res.writeHead(200, { 'content-type': 'text/plain' });
        _res.write(_content);
        _res.end();

    }
}

exports.router = router;