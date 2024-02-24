const model = require('../model/model');

exports.sendData = async (req, res) => {
    try {
        
        const data = req.body;
        console.log(data);
    
        const newData =  new model(data)
        const existing = await newData.save();
        console.log(existing);
        res.status(200).json({success: true, data: existing});
    } catch (error) {
        console.log(error);
    }
};

exports.getUser = async (req, res) => {
    try {
        
        const getData = await model.find();
        
        res.status(200)
        .json({
                 success: true,
                 message: getData
            });

            console.log(getData);
    } catch (error) {
        res.status(404).json(error.message );
    }
}
