const mongoose=require('mongoose');
const mongoUrl='mongodb://localhost:27017/my-hotel';

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