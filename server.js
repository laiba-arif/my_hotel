const express=require('express');
const app=express();
const db=require('./db');

const PORT = process.env.PORT || 3000;

const bodyParser=require('body-parser');
app.use(bodyParser.json());
const personRoutes=require('./routes/personRoutes');
const menuRoutes=require('./routes/menuRoutes')
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);


app.get('/', (req,res)=>{
    res.send('Welcome to the Hotel.....!')
})



app.listen(3000,()=>{
    console.log(`Listening to port ${PORT}`)
}) 