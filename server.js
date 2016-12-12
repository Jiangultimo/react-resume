var http = require('http');
var url = require('url');
var router = require('./router/router');

var server = {
    createServer:function(request,response){
        var pathname = url.parse(request.url).pathname;
        router.router.render(pathname,request,response);
    },
    startServer:function(){
        http.createServer(this.createServer).listen(8888);
    }
}

exports.server = server;