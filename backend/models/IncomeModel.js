
const mongoose = require(`mongoose`);


const IncomeSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim:true,
        maxLemgth:50
    },
    amount:{
        type:Number,
        required:true,
        maxLength:20,
        trim:true

    },
    type:{
        type:String,
        default:"income"
    },
    date:{
        type:Date,
        required:true,
        trim:true
    },
    category:{
        type:String,
        required:true,
        maxLength:20,
        trim:true

    },
    description:{
        type:String,
        required:true,
        maxLength:20,
        trim:true

    },

}, {timestamp:true})

module.exports = mongoose.model(`Income`,IncomeSchema)