const mongoose=require('mongoose');
require('dotenv').config();
 //const mongoUrl=process.env.MONGODB_URL_LOCAL;
//const mongoUrl="mongodb://0.0.0.0:27017/my-hotel";
const mongoUrl=process.env.MONGODB_URL;
mongoose.connect(mongoUrl, {
  useNewUrlParser:true,
  useUnifiedTopology:true
})

const db=mongoose.connection;
db.on('connected',()=>{
  console.log('db is connected....')
})

db.on('disconnected',()=>{
  console.log('db is disconnected..')
})
db.on('error',(error)=>{
  console.log('Error:',error)
})

module.exports=db;