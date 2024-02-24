const mongoose = require("mongoose");

const medicineTypeSchema = new mongoose.Schema({

    pharmaType:{
        type:String,
    },
    

});
module.exports=mongoose.model('create',medicineTypeSchema);