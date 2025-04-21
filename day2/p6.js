const http=require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    //json data
    let data={
        name:"Raushan",
        age:22
    }
    if(req.url=="/getdata" && req.method==='GET'){
        res.end(JSON.stringify(data));
    }
   else if(req.url=="/setdata" && req.method==='POST'){
        res.end(JSON.stringify({message:"data received"}));
    }
})


server.listen(9000,()=>{
    console.log("Listening...");
})