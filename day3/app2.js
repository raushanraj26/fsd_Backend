const express=require('express');
const app=express();

const fs=require('fs/promises')
app.use(express.json());






let users=[];
const readdata=()=>{
    users=fs.readFile('.data.json','utf-8')
}

app.get("/api",(req,res)=>{
    readdata();
    res.json(users);
})
const writedata=()=>{
    fs.writeFile('.data.json',JSON.stringify(users,null,2))
}

app.post("/users",(req,res)=>{
    const data=req.body;
    readdata();
    const newid=users.length>0?users[users.length-1].id+1:1;
    data.id=newid;
    users.push(data);


    writedata();
    res.json({message:'received',data:data});
})

app.listen(9800,()=>{
    console.log("Listening on port 9800");
})