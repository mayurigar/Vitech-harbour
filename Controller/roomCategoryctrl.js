
const roomCategoryModel = require('../model/roomCategoryModel'); 

exports.createRoomCategory = async (req, res) => {
    try {
        const data = req.body;
        console.log(data);

        
        const roomCategory = new roomCategoryModel(data);
        const roomCategoryData = await roomCategory.save(); 

        console.log(roomCategoryData);
        res.status(201).json({ success: true, data: roomCategoryData });
    } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, data:error });
    }
};

exports.getroomCategory = async(req,res)=>{
    try {
        const roomCategory = new roomCategoryModel.find()

        res.status(200).json({ success: true, data: roomCategory})
    } catch (error) {
        console.log(error)
        res.status(400).json({success: true, data: error})
    }
};


exports.updateroomCategory = async(req,res)=>{
    try {
        const _id = req.params;
        const updateroomCategory = await roomCategoryModel.findByIdAndUpdate({
            _id,
            ...req.body
        });

        res.status(202).json({success: true , data: error})
            
    } catch (error) {
        console.log(error)

        res.status(400).json({success:true, data: error})
        
    }
}

