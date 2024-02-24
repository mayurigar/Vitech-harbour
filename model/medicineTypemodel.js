
const mongoose = require('mongoose');

const medicineTypeSchema = mongoose.Schema({
    medicineName:{
        type:String,
    },
    batchNo:{
        type:String,
    },
    expiry:{
        type:String,
    },
    rate:{
        type:Number,
    },
    quantity:{
        type: Number,
    },
    amount:{
        type:Number,
    },


});
module.exports=mongoose.model('medicineType',medicineTypeSchema);