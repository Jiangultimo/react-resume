const swig = require('swig-templates');
const fs = require('fs');
const mime = require('./MIME.js'); //媒体类型
const path = require('path');

swig.setDefaults({
    autoescape: false
});

let index = {
    render: function(pathName, req, res) {
        switch (pathName) {
            case '/index':
                this.index(pathName, req, res);
                break;
            default:
                this.notFound(pathName, req, res);
                break;
        }
        /*
         * TODO 静态资源的读取
         * 每次判断路由之后读取服务器的静态资源
         */
    },
    index: function(_pathName, _req, _res) {
        let template = swig.compileFile('./views/index.html');
        let item = {};
        item.title = 'imhere';
        let output = template(item);
        _res.writeHead(200, {
            'content-type': 'text/html'
        });
        _res.write(output);
        _res.end();
    },
    notFound: function(pathName, req, res) {
        res.writeHead(200, {
            'content-type': 'text/html'
        });
        res.write('not found' + pathName);
        res.end();
    },
    staticSource: function(pathName, req, res) {
        let staticPath = _pathName;
        let ext = staticPath
        ext = ext ? ext.slice(1) : 'unkonwn';
    }
}

exports.router = index;
