const pharamaTypeModel = require('../model/pharmaTypeModel');

exports.pharamaType = async(req,res)=>{
    try {

        const data = req.body;
        console.log(data)

        const newdata = new pharamaTypeModel(data);
        const newPharamaType = await newdata.save();
        


        console.log(newPharamaType);
        res.status(200).json({success: true, data: newPharamaType});
    } catch (error) {
        console.log(error);
    }
}
// exports.updatePharamaType = async (req, res) => {
//     try {
//         const id = req.params;
//         const updateData = { ...req.body };

//         // Remove the _id field from the update data, as it should not be updated
//         delete updateData._id;

//         console.log(id);
//         console.log(req.body)
        
//         const updatePharamaType = await pharamaTypeModel.findByIdAndUpdate({
//             id,
//             ...req.body,
//       });
//       res.status(200).json({success:true, data: updatePharamaType});
//     } catch (error) {

//        console.log(error); 

//        res.status(400)
//        .json({ success : false,
//         error
//     });
// }}

exports.updatePharamaTypes = async (req, res) => {
    try {

        const { id }  = req.params;

        const updatePharamaTypeData = await pharamaTypeModel.findByIdAndUpdate({ 
            id,
            ...req.body
     });
        console.log(updatePharamaTypeData);
    
        res.status(202).json({ success : true , massage : "updated ", updatePharamaTypeData });
        
    } catch (error) {
        res.status(500).json({ success : false, error });
        console.log(error);
    }
}

exports.getpharamaType = async(req,res)=>{
    try {
        
        const pharamaType = await model.find();
        
        res.status(200)
        .json({
                 success: true,
                 message: pharamaType
            });

            console.log(pharamaType);
    } catch (error) {
        res.status(404).json(error.message );
    }
}
exports.deletePharmaType = async (req, res) => {
    try {
        const  { _id }  = req.params;
        
        if (!_id) {
            return res.status(400).json({ success: false, message: "No ID " });
        }

        const deletedPharmaType = await pharamaTypeModel.findByIdAndDelete(_id);
        console.log(deletedPharmaType);

    } catch (error) {
        console.log(error);
        
    }
}

