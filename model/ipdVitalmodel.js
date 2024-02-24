const mongoose=require ('mongoose');

const ipdVital = mongoose.Schema({
    Pulse:{
        type:Number,
        default:0
    },
    spo2:{
        type:Number,
        default:0
    },
   sbp:{
        type:Number,
        default:0
    },
    dbp:{
        type:Number,
        default:0
    },
    temp:{
        type:Number,
        default:0
    },
    res:{
        type:Number,
        default:0

    },
    ag:{
        type:Number,
        default:0
    },
    datetime:{
        type:String,
        default: Date.now()
    },
    ipdID : {
        type: String,
        ref:"ipd.ipdID"
    },
    patientID : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"ipd"
    }
    
});

module.exports = mongoose.model("ipd-vital",ipdVital);

