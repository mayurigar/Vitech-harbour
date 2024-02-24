const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    guardianName: {
        type : String,
    },
    relation: {
        type : Date,
    },
    mobileNumber: {
        type : Number,
    },
    insuranceCo:{
        type: Number,
    },
    cardNo:{
        type:Number,
    },
    serviceNo:{
        type:Number,
    },
    rank:{
        type:Number,
    },
    rateList:{
        type: String,
    },
    arrivalDate:{
        type:Date,
    },
    provisionalDiagnosis:{
        type:String,
    },
    procedureTreatment:{
        type:String,
    },
    commentRemark:{
        type:String,
    },
    arrivalDate:{
        type: Number,
    },

});

module.exports = mongoose.model('users', dataSchema);



