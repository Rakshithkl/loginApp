
var mongoose=require('mongoose')
var schema=new mongoose.Schema({
firstname:String,
username:String,
phonenumber:String,
email:String,
password:String,
type:String,
})
module.exports=mongoose.model('admin',schema)