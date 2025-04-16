const http=require('http');
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    res.end("hello world");
})


server.listen(9000,()=>{
   console.log('server is listenning on port 9000 ...'); 
})