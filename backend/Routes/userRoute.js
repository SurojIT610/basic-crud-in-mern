const express = require("express");



const User=require("../models/userModel")
const router=express.Router()



// for inserting data into db CREATING USER
router.post("/", async (req, res) => {
    const { name, email, age } = req.body;
    try {
        const addUser = await User.create({
            name: name,
            email: email,
            age: age
        });
        res.status(200).json(addUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(400).json({ error: error.message });
    }
});


// Geting data from the data Base
router.get("/all", async(req, res) => {
    

    try {
        const allData=await User.find();
        res.status(200).json(allData)
        // res.send("API is running");
    } catch (error) {
        res.status(400).json({error:error.message})
    }
   
});



// geting single users data by their cluster id

router.get("/showme/:id", async(req, res) => {
    const {id}=req.params;

    try {
        const singleUser=await User.findById({_id:id});         // the first _id is the _id of the mongo db & the 2nd id is the id user sending by params
        res.status(200).json(singleUser)
        // res.send("API is running");
    } catch (error) {
        res.status(400).json({error:error.message})
    }
   
});


// deleting user data by their Id:----

router.delete("/delete/:name", async(req, res) => {
    const {name}=req.params;

    try {
        const deleteUser=await User.findByIdAndDelete({_id:name});
        res.status(200).json(deleteUser)
        // res.send("API is running");
    } catch (error) {
        res.status(400).json({error:error.message})
    }
   
});


// router.delete("/delete/:name", async(req, res) => {
//     const {id}=req.params;

//     try {
//         const deleteUser=await User.deleteOne({name:name});
//         res.status(200).json(deleteUser)
//         // res.send("API is running");
//     } catch (error) {
//         res.status(400).json({error:error.message})
//     }
   
// });

// this for updating the exesting user:-------


router.patch("/update/:id", async(req, res) => {
    const {id}=req.params;
    const {name, email, age} = req.body;

    try {
        const updateUser=await User.findByIdAndUpdate(
            id,req.body,{new:true}
        );
        res.status(200).json(updateUser)
        
        // res.send("API is running");
    } catch (error) {
        res.status(400).json({error:error.message})
    }
   
});


module.exports=router;