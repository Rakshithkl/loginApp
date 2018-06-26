import { model } from 'mongoose';

var express=require('express')
var director=require('../models/admin')
var router=express.Router()
router.post('/create',(req,res)=>{
    const{username}=req.body
    director.find({username},(err,directors)=>{
        if(director[0]){
            res.json({sucess:false})
        }else{
            director.create(req.body,(err,directors)=>{
                director.find((err,directors)=>{
                    res.json({sucess:true,directors})
                })
            })
        }
    })
})
router.get('/login/:username/:password',(req,res)=>{
    const {username,password}=req.params
    director.findOne({username,password},(err,user)=>{
       if(err)console.log(err)
       if(user){
           res.json({sucess:true},user)
       }else{
           res.json({sucess:false})
       }
    })
})
module.exports=routers