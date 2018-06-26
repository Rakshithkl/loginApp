var mongoose=require('mongoose')
var schema=new mongoose.Schema({
    dir_id:String,
    bm_id:String,
    email:String,
    phonenumber:String,
    password:String,
})
module.export=model.mongoose('crm',schema)