var mongoose=require('mongoose')
var schema=new mongoose.Schema({
    dir_id:String,
    firstname:String,
    username:String,
    email:String,
    phonenumber:String,
    password:String,
})
module.exports=mongoose.model('bm',schema)