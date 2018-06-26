var mongoose=require('mongoose')
var schema=new mongoose.Schema({
    c_id:String,
    rm_id:String,
    bm_id:String,
    dir_id:String,
    c_mail:String,
    c_phonenumber:String,
    c_mail:String,
    property:String,
    value:String,
    status:String,
    commission:String,
    rm_com:String,
    bm_com:String,
    dir_com:String,
    vp_com:String,
})
module.exports=mongoose.model('customer',schema)
