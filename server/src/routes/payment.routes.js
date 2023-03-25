const router = require("express").Router();

const stripe=require("stripe")("sk_test_51MX7IZSIaUdW5gBobZNPy872Hw9bCPq3xR5RkhxGjRbIt5qfdAQlm08FtbryragGd4HBgsszAnSwHlq8ucoSL69O00mPWFseof")

router.get('/payment',(req,res)=>{
    stripe.charges.create({
        source:req.body.tokenId,

        amount:req.body.amount,
        currency:"inr"
        
    },(stripeErr,stripeRes)=>{
        if(stripeErr){
            res.status(500).json(stripeErr)
        }
        else{
            res.status(200).json(stripeRes)
        }
    })
    
})


module.exports=router;