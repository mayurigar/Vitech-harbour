const medicineTypemodel = require('../model/medicineTypemodel');


exports.medicineType= async (req,res)=>{
    try {
        const data = req.body;

        console.log(data);

        const newmedicineTypes = new medicineTypemodel(data);

        const savemedicineType = await newmedicineTypes.save();

        console.log(savemedicineType);

        res.status(200)
        .json({success:true , savemedicineType });

    } catch (error) {
        console.log(error);
    }
}

exports.getmedicineType=async(req,res)=>{
    try {
        const medicineType = new medicineTypemodel.find();
        res.status(200).json({success:true, data:medicineType});
    } catch (error) {
        console.log(error);
    }
}

exports.updatemedicineType=async(req,res) =>{
    
    try {
        const _id = req.params;

        const updatemedicineType=await medicineTypemodel.findByIdAndUpdate({
            _id,
            ...req.body
        });
        res.status(200).json({sucess:true,data:updatemedicineType});
    } catch (error) {
        console.log(error)
    }
       
}
exports.deletemedicineType=async(req,res)=>{
    try {
        const _id=req.body;
        if(!id){
            return res.status(200).json({success:false,data:"No medicine"});
        }
        const deletemedicineType=await medicineTypemodel.findByIdAndDelete(_id);
        console.log(deletemedicineType);
    } catch (error) {
        console.log(error)
        
    }
}



