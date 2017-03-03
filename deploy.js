'use strict'
const http = require('http');
const spawn = require('child_process').spawn;
const createHandler = require('github-webhook-handler');

const handler = createHandler({
    path:'/deploy/',
    secret:'hing'
});

let run_cmd = (cmd,args,callback) => {
    let child = spawn(cmd,args);
    let resp = '';

    child.stdout.on('data',(buffer) => {
        resp += buffer.toString();
    });

    child.stdout.on('end',() => {
        callback(resp);
    });
}

http.createServer( (req,res) => {
console.log(req.url);
    handler(req,res,function(err){
        res.statusCode = 404;
        res.end('no such location');
    });
}).listen(7777);

handler.on('error',(err) => {
    console.error('Error',err.message);
});

handler.on('push',(event) => {
    console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
    run_cmd('sh',['./deploy.sh'],(text) => {
        console.log(text);
    })
});
handler.on('issues', function (event) {
  console.log('Received an issue event for % action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title)
});                                                              
