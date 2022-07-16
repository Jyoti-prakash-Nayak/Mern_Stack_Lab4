const express=require('express');
const fs=require('fs');
const app=express();
const port=300;

app.get('/cart',(req,res)=>{
const content=JSON.parse(fs.readFileSync("cart.json"));
res.status(200).json({
    message:"retrive data",
    data:content
})
})

app.get('/cart/:id',(req,res)=>{
     id=req.params.id;
     const content=JSON.parse(fs.readFileSync("cart.json"));
     const matchdata=content.filter(item=>item.id==id);
     res.status(200).json({
        message:"retrive data",
        data:matchdata
    })
})

app.listen(port,()=>{
     console.log(`server started at port ${port}`)
})