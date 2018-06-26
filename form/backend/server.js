
// var express= require('express');
// var mongoose =require('mongoose');
// var path = require('path')
// var app=express()
// var bodyParser=require('body-parser');
// // var router = express.Router()
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// var schema = new mongoose.Schema({
//     firstname: String,
//     lastname: String,
//     phonenumber:String,
//     email:String,
//     password:String,
//     conformpassword:String
// }) 
// var user =mongoose.model('user',schema) 
// mongoose.connect('mongodb://localhost/developer')
// app.use(express.static(path.resolve(__dirname,  '../dist')));
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname,  '../dist', 'index.html'));
// });
// app.post('/Login',(req,res)=>{
//     console.log(req.body)
//     res.json("sucecdd")
//     })
// app.post('/register',(req,res)=>{
//     user.create(req.body,(err,data)=>{
//         if(err)console.log(err)
//         res.send(data)
//     })
// })
// app.listen(100,()=>console.log('sucess'))
var express=require('express')
var app=express()
var bodyParser=require('body-parser')
var mongoose=require('mongoose')
var path=require('path')
var director=require('./routers/director')
var bm=require('./routers/bm');

// var router=require('router')
app.use(bodyParser.urlencoded({limit: '50mb', extended:false}))
app.use(bodyParser.json({limit: '50mb'}))
var schema=new mongoose.Schema({
    // firstname:String,
    // lastname:String,
    // email:String,
    // phonenumber:String,
    // password:String,
    // conformpassword:String,
    // gender:String
    img:String,
})
  var manager=mongoose.model('user',schema)
  mongoose.connect('mongodb://localhost/dev')
  var imgPath = '/path/to/some/img.jpg';
 app.use(express.static(path.resolve(__dirname,  '../dist')));
app.get('/', (req, res) => {    
 res.sendFile(path.resolve(__dirname,  '../dist', 'index.html'));
});
// app.post('/reg',(req,res)=>{
//     console.log("ssss")
//       user.create(req.body,(err,data)=>{
//           if(err)console.log(err)
//           res.send(data)
//       })
//   })
//   var img;
//   app.post('/upload',(req,res)=>{
//       img=req.body
//       console.log(req.body)
//       res.send(req.body)
//   })
app.post('/adding',(req,res)=>{
    manager.create(req.body,(err,data)=>{
        if(err)console.log(err)
        res.json(data)
        })
})
app.get('/getting/:id',(req,res)=>{
    manager.findById( req.params.id, (err,data)=>{
        res.json(data)
    })
})
app.use('/director',director)
app.use('/bm',bm)

  app.listen(100,()=>console.log('sucess'))
