const fs=require('fs/promises');

const write=async ()=>{
    const data="i am new ddata"
    fs.writeFile("./data.txt",data,(err)=>{
        if(err){
            console.log("Error writing data to file",err)
            
        }
        else {
            console.log("file is updated successfully");
        }
    });
};

write();