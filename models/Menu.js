const mongoose=require('mongoose');

const menuSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    dish:{
        type:String,
        enum:["spicy","sweet","sour"]
    },
    is_drink:{
        type:Boolean,
        default:false
    },
    num_sales:{
        type:Number,
        default:0
    }
})

const Menu=mongoose.model('Menu', menuSchema)

module.exports=Menu;