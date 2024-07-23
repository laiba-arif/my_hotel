const express=require('express');
const router=express.Router();

const Person=require('./../models/Person');

router.post('/', async(req,res)=>{
try {
    const data=req.body;
    const newPerson= new Person(data);
    const response =await newPerson.save();
    console.log('data is succesgully saved')
    res.status(200).json(response)
} catch (error) {
    console.log('Error is :' ,error);
    res.status(500).json({error: 'Internal server error'})
}
})


router.get('/',async(req,res)=>{
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data)
    } catch (error) {
        console.log('Error is :' ,error);
        res.status(500).json({error: 'Internal server error'})
    }
})

router.get('/:worktype',async(req,res)=>{
try {
    const worktype=req.params.worktype;
    if(worktype == "chef" || worktype == "owner" || worktype == "waiter"){
     const response = await Person.find({work:worktype})
     console.log('data fertched');
     res.status(200).json(response)
    }
} catch (error) {
    console.log('Error is :' ,error);
    res.status(500).json({error: 'Internal server error'})
}
})

router.put('/:id',async(req,res)=>{
    try {
        const personID = req.params.id;
        const updatedPerson = req.body;
        const response=await Person.findByIdAndUpdate(personID,updatedPerson,{
            new:true,
            runValidators:true
        })
        if(!updatedPerson){
            res.status(404).json('Person not Found')
        }
        console.log('data updated');
        res.status(200).json(response)

    } catch (error) {
        console.log('Error is :' ,error);
        res.status(500).json({error: 'Internal server error'})
    }
})
router.delete('/:id',async(req,res)=>{
    try {
        const personID=req.params.id;
        const response = await Person.findByIdAndDelete(personID)
        console.log('Person deleted');
        res.status(200).json(response)
    } catch (error) {
        console.log('Error is :' ,error);
        res.status(500).json({error: 'Internal server error'})
    }
})
module.exports=router;