var express=require('express')
var router=express.Router()
var crm=require('../models/crm')
app.get('getall',(req,res)=>{
    crm.find((err,crm)=>{
        res.json({sucess:true,crm})
    })
})
app.post('/create',(req,res)=>{
    const{username}=req.body
    crm.find({username},req.body,(req,res)=>{
        if(crm[0]){
            res.json({sucess:false})
        }else{
            crm.create(req.body,(err,crm)=>{
                crm.find((err,crm)=>{
                    res.json({sucess:true,crm})
                })
            })
        }
    })
})
router.get('/Login/:username/:password',(req,res)=>{
    const{username,password}=req.body
    crm.findOne({username,password},(err,crms)=>{
        if(err)console.log('err')
        if(user){
            res.json({sucess:true})
        }else{
            res.json({sucess:false})
        }
    })
})
module.exports=router