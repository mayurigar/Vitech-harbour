const roomModel = require('../model/roomModel');





exports.roomType = async(req,res)=>{
    try {
        const data = req.body;
        console.log(data)

        const newdata = new roomModel(data);
        const newroomModel = await newdata.save();

        console.log(newroomModel);
        res.status(202).json({success: true, data: newroomModel})

    } catch (error) {
        console.log(error)
        
    }
}





exports.updateroomTypes = async (req, res) => {
    try {

        const { id }  = req.params;

        const updateroomTypeData = await roomModel.findByIdAndUpdate({ 
            id,
            ...req.body
        });
        console.log(updateroomTypeData);
    
        res.status(202).json({ success : true , massage : "updated ", updateroomTypeData });
        
    } catch (error) {
        res.status(500).json({ success : false, error });
        console.log(error);
    } 
}


exports.getroomType = async (req, res) => {
    try {
       
        const roomType = await roomModel.find();

       
        res.status(200).json({
            success: true,
            data: roomType 
        });

        console.log(roomType);
    } catch (error) {
        console.log(error); 
        res.status(500).json({ success: false, message: error.message });
    }
};

exports.deleteroomType = async (req, res) => {
    try {
        const  { _id }  = req.params;
        
        if (!_id) {
            return res.status(400).json({ success: false, message: "No ID " });
        }

        const deletedroomType = await roomModel.findByIdAndDelete(_id);
        console.log(deleteroomType);

    } catch (error) {
        console.log(error);
        
    }
}

