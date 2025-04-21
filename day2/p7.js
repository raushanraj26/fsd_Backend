// dtaa ko json me post kro bhut sara then get kro


const http=require('http');
const { json } = require('stream/consumers');
let users=[];




const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    if(req.url==='/setdata' && req.method==='POST'){
        let body='';
        req.on('data',chunk=>{
            body +=chunk;
        });
        req.on('end',()=>{
            const user=JSON.parse(body);
            users.push(user);
            res.end("data Received!");
        });
    }
    else if(req.url==='/getdata' && req.method==='GET'){
        res.end(JSON.stringify(user));
    }
    else{
       res.end('Not found');
    }
});
server.listen(9000,()=>{
    console.log("Listening...");
})