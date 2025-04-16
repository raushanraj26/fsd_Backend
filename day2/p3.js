const http=require('http');
const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/html');
    res.end(`<h1 style='background-color:red;color:white;'>Hello Raushan Raj </h1>`);
})


server.listen(9000,()=>{
   console.log('server is listenning on port 9000 ...'); 
})