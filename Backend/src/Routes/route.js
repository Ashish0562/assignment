const express = require('express');
const survay = require('../Models/survaySchema');
const router = express.Router();


router.post("/home", async (req, res) => {
  
    try {
        const data = await survay.create({
            q1: req.body.q1,
            q2: req.body.q2,
            q3: req.body.q3,
            q4: req.body.q4
        });
        res.json({
            status: "Success",
            data

        })

    } catch (e) {
        res.status(500).json({
            status: "Failed",
            message: e.message

        })
    }
})

router.get("/",async (req,res)=>{
    try{
        const data=await survay.find()
        res.status(200).json({
            status:"success",
            data:data
    })
    } catch(e){
        res.status(404).json({
            status: "Failed",
            message: e.message

        })
    }
})

module.exports = router;