const express=require('express');
const app=express();

app.use(express.json());




app.get("/users",(req,res)=>{
    res.send("Hello Raushan,Welcome to Backend");
});

// const users=[
//     {id:1,name:"Raushan"},
//     {id:2,name:"Kundan"},
// ];

const users=[];

app.get("/api",(req,res)=>{
    res.json(users);
})

app.post("/users",(req,res)=>{
    const data=req.body;
    // const {name,age}=req.body;
    const newid=users.length>0?users[users.length-1].id+1:1;
    data.id=newid;
    users.push(data);


    // res.json(`data received ${data}`);
    res.json({message:'received',data:data});
})

app.listen(9800,()=>{
    console.log("Listening on port 9800");
})