//jo v post data aayega  wo sb data.json me permananet save hoga 
// and jb read krna ho toh DataTransfer.json ko read krega

const http=require('http');
const { json } = require('stream/consumers');
const fs=require('fs/promises');




const server=http.createServer(async(req,res)=>{
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
        const data=await fs.readFile("./data.json","utf8")
        res.end(JSON.stringify(user));
    }
    else{
       res.end('Not found');
    }
});
server.listen(9000,()=>{
    console.log("Listening...");
})