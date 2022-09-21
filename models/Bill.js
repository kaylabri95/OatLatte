const mongoose = require('mongoose')

const BillSchema = new mongoose.Schema({
  bill: {
    type: String,
    required: true,
  },
  paid: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true,
  },
  dueDate: {
    type: Date,
    required: true,
  },
})

module.exports = mongoose.model('Bill', BillSchema)
