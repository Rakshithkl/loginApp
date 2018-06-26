var express=require('express')
var router=express.Router()
var request=require('request')
var directors=require('../models/director')
var crm=require('../models/crm')
var bm=require('../models/bm')
router.get('/getall',(req,res)=>{
    customer.find((err,customers)=>{
        res.json({sucess:true,customers})
    })
})
router.get('/getall/:bm_id',(req,res)=>{
    const{bm_id}=req.params
    customer.find({bm_id:"bm2"},(err,customers)=>{
        res.json({sucess:true,customers})
    })
})
router.get('/getBySearch/:id',(req,res)=>{
    const{id}=req
    customer.find({c_id:id},(err,customers)=>{
        if(customers[0]){
            res.json({sucess:true,customers})
        }else{
            customer.find({bm_id:id},(err,customers)=>{
                if(customers[0]){
                    res.json({sucess:true,customers})
                }else{
                    customer.find({crm_id:id},(req,res)=>{
                        if(customer[0]){
                            res.json({sucess:true})
                        }else{
                            customer.find({dir_id:id},(req,res)=>{
                                if(customers[0]){
                                    res.json({sucess:true})
                                }else{
                                    res.json({sucess:false})
                                }
                            } )
                        }
                    })
                }
            } )
        }
    })
})
router.get('/GetByCID:c_id',(req,res)=>{
    const{c_id}=req.params
    customer.findOne({c_id},(err,customers)=>{
        res.json({sucess:true})
    })

})
router.post('/create',(req,res)=>{
    const { rm_id } = req.body
    crm.find({ username: rm_id },(err,crms)=>{
        if(crms[0]){
            customer.find( (err,customers)=>{
                req.body.c_id =customers.length +1
                customer.create(req.body,(err,post)=>{ 
                    customer.find( {crm_id:req.body.crm_id}, (err,customers)=>{
                        res.json({success:true,customers})
                    })
                })
            })
        }else{
            res.json({success:false})
        }
    })
})
router.post('/update/:c_id',(req,res)=>{
    // console.log(req.body,req.params.c_id)
    customer.findOneAndUpdate({c_id:req.params.c_id},req.body,(err,data)=>{
        customer.find( {crm_id:req.body.crm_id}, (err,customers)=>{
            res.json({success:true,customers})
        })
    })
})
router.get('/delete/:c_id/:crm_id',(req,res)=>{
    const { c_id , crm_id } =req.params
    customer.findOneAndRemove({c_id},(err,data)=>{
        customer.find( {crm_id}, (err,customers)=>{
            res.json({success:true,customers})
        })
    })
})
router.post('/sendOtp',(req,res)=>{
    const { c_id,dir_sms,bm_sms,rm_sms } = req.body
    customer.findOne({c_id},(err,customer)=>{
        const { dir_id,bm_id,rm_id } = customer
        director.findOne({ username:dir_id},(err,director)=>{
            const { Phonenumber } = director
            var url='http://bhashsms.com/api/sendmsg.php?user=madhava&pass=Reddy123&sender=BMBOTP&phone='+Phonenumber+'&text='+dir_sms+'&priority=ndnd&stype=normal'
            request(url, function (error, response, body) {
                if(error){
                    console.log(err)
                }
                console.log("otp sent1")
            });
        })
        bdm.findOne({username:bm_id},(err,bm)=>{
            const { Phonenumber } = bm
            var url='http://bhashsms.com/api/sendmsg.php?user=madhava&pass=Reddy123&sender=BMBOTP&phone='+Phonenumber+'&text='+bm_sms+'&priority=ndnd&stype=normal'
            request(url, function (error, response, body) {
                if(error){
                    console.log(err)
                }
                console.log("otp sent2")
            });
        })
        crm.findOne({username:rm_id},(err,rm)=>{
            const { Phonenumber } = rm
            var url='http://bhashsms.com/api/sendmsg.php?user=madhava&pass=Reddy123&sender=BMBOTP&phone='+Phonenumber+'&text='+rm_sms+'&priority=ndnd&stype=normal'
            request(url, function (error, response, body) {
                if(error){
                    console.log(err)
                }
                console.log("otp sent3")
            });
        })
        res.send({success:true})
    })
})

module.exports =router;

                    
