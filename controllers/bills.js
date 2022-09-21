const Bill = require('../models/Bill')

module.exports = {
    getBills: async (req,res)=>{
        console.log(req.user)
        try{
            const billItems = await Bill.find({userId:req.user.id})
            const itemsLeft = await Bill.countDocuments({userId:req.user.id,paid: false})
            res.render('bills.ejs', {bills: billItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createBill: async (req, res)=>{
        try{
            await Bill.create({bill: req.body.billItem, paid: false, userId: req.user.id})
            console.log('Bill has been added!')
            res.redirect('/bills')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Bill.findOneAndUpdate({_id:req.body.billIdFromJSFile},{
                paid: true
            })
            console.log('Marked Paid')
            res.json('Marked Paid')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Bill.findOneAndUpdate({_id:req.body.billIdFromJSFile},{
                paid: false
            })
            console.log('Marked Unpaid')
            res.json('Marked Unpaid')
        }catch(err){
            console.log(err)
        }
    },
    deleteBill: async (req, res)=>{
        console.log(req.body.billIdFromJSFile)
        try{
            await Bill.findOneAndDelete({_id:req.body.billIdFromJSFile})
            console.log('Deleted Bill')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    