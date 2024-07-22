
const express=require('express');
const router=express.Router();

const Menu=require('./../models/Menu');

router.post('/',async(req,res)=>{
    try {
     const data=req.body;
     const newMenu=new Menu(data);
     const response=await newMenu.save();
     res.status(200).json(response)
    } catch (error) {
     console.log('Error is :', error);
     res.status(500).json({error:"Internal Server error"})
    }
 })

 router.get('/',async(req,res)=>{
    try {
     const data=await Menu.find();
     console.log('Succesfully data fetched')
     res.status(200).json(data)
    } catch (error) {
     console.log('Error is :', error);
     res.status(500).json({error:"Internal Server error"})
    }
 })

 
router.get('/:dishType',async(req,res)=>{
   try {
       const dishType=req.params.dishType;
       if(dishType == "sour" || dishType == "spicy" || dishType == "sweet"){
        const response = await Menu.find({dish:dishType})
        console.log('data fertched');
        res.status(200).json(response)
       }
   } catch (error) {
       console.log('Error is :' ,error);
       res.status(500).json({error: 'Internal server error'})
   }
   })
 module.exports=router;