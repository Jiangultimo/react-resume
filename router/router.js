var swig = require('swig');
swig.setDefaults({ autoescape: false });
//var router = {
//    render: function (pathName, req, res) {
//        let self = this;
//        pathName = (function () {
//            for(var i in self){
//                console.log(i);
//            }
//            if (!self[pathName]) {
//                self[pathName] = self['/404']('there is nothing.',req,res);
//            } else {
//                self[pathName](pathName, req, res);
//            }
//        }());
//    },
//    ['/index']: function (_content, _req, _res) {
//        console.log(_content);
//        var template = swig.compileFile('./views/index.html');
//        var name = {
//            title: '个人简历--蒋正兴'
//        };
//        var output = template(name);
//        _res.writeHead(200, { 'content-type': 'text/html' });
//        _res.write(output);
//        _res.end();
//    },
//    ['/404']: function (_content, _req, _res) {
//        _res.writeHead(200, { 'content-type': 'text/html' });
//        _res.write(_content);
//        _res.end();
//
//    }
//}

let index = {
    render: function (pathName, req, res) {
        console.log(pathName);
        switch (pathName) {
            case '/index':
                this.index(pathName, req, res);
                break;
                defalut:
                this.notFound(pathName, req, res);
                break;
        }
    },
    index: function (_pathName, _req, _res) {
        let template = swig.compileFile('./views/index.html');
        let resData = {
            title: "personal-resume"
        };
        let output = template(resData);
        _res.writeHead(200, { 'content-type': 'text/html' });
        _res.write(output);
        _res.end();
    },
    notFound: function (pathName, req, res) {
        res.writeHead(200, { 'content-type': 'text/html' });
        res.write('not found' + pathName);
        res.end();
    }
}

exports.router = index;