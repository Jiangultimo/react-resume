const swig = require('swig-templates');
const fs = require('fs');
const path = require('path');
const MIME = require('./MIME.js');
swig.setDefaults({
    autoescape: false
});

let index = {
    render: function(pathName, req, res) {
        switch (pathName) {
            case '/':
                this.index(pathName, req, res);
                break;
            default:
                this.staticSource(pathName, req, res);
                break;
        }
    },
    index: function(_pathName, _req, _res) {
        let template = swig.compileFile('./views/index.html');
        let item = {};
        item.title = '这难道要成为个人网站';
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
        let realPath = path.join('views' + pathName); //拼接读取的文件。文件名应保持和路由一致
        let extname = path.extname(pathName); //获取文件类型;
        let ext = extname ? extname.slice(1) : 'unknown'; //获取文件后缀名用来判断MIME类型
        let mimeType = ext ? MIME.types[ext] : 'text/plain'; //获取MIME类型
        /*
         * 使用fs.stat 判断文件是否存在，如果存在则读取文件
         */
        fs.stat(realPath, (err, stats) => {
            if (err) {
                res.writeHead(404, {
                    'content-type': 'text/plain'
                });
                res.write(pathName + ' is not found');
                res.end();
            } else {
                let readableStream = fs.createReadStream(realPath); //创建一个可读流
                res.writeHead(200, {
                    "content-type": mimeType
                });
                /*
                 * pipe很好的监听了‘data’ 和 'end'事件
                 */
                readableStream.pipe(res); //使用管道来想客户端输送数据
            }
            //var data = '';
            // readableStream.on('data',function(chunk) {
            //     data += chunk;
            // });
            // readableStream.on('end',function(){
            //     console.log(res);
            //     res.end(data);
            // })

            // if (err) {
            //     res.writeHead(404, {
            //         'content-type': 'text/plain'
            //     });
            //     res.write(pathName + ' is not found');
            //     res.end();
            // } else {
            //     fs.readFile(realPath, (err, file) => {
            //         if (err) {
            //             res.writeHead(500, {
            //                 'content-type': 'text/plain'
            //             });
            //             res.write(err);
            //             res.end();
            //         } else {
            //             res.writeHead(200, {
            //                 'content-type': mimeType
            //             })
            //             res.write(file);
            //             res.end();
            //         }
            //     });
            // }
        });
    }
}

exports.router = index;
