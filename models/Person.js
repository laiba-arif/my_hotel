const mongoose=require('mongoose');
const personSchema= new mongoose.Schema({
name:{
    type:String,
    required:true
},
work:{
    type:String,
    enum:['chef','waiter','owner'],
    required:true
},
email:{
    type:String,
    required:true,
    unique:true
},
salary:{
    type:Number,
    required:true
}



})
const Person = mongoose.model('Person',personSchema);
module.exports=Person;