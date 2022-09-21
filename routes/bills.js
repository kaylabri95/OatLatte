const express = require('express')
const router = express.Router()
const billsController = require('../controllers/bills') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, billsController.getBills)

router.post('/createBill', billsController.createBill)

router.put('/markComplete', billsController.markComplete)

router.put('/markIncomplete', billsController.markIncomplete)

router.delete('/deleteBill', billsController.deleteBill)

module.exports = router