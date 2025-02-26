var express = require("express");

var fs= require("fs");
const { json } = require("stream/consumers");

var app = express();


app.get("/products",(req,res)=>{


    fs.readFile("./index.json","utf-8",(err,data)=>{

        if(err){

            res.send({
                msg:err.message,
                status:400
            })
        }else{
            res.send({
                msg:"successfully sent",
                status:200,
                data:JSON.parse(data)
            })

        }

    })


})


app.listen(4000,()=>{
    console.log("hi server is running");
    
})