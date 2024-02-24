const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const roomCategorySchema = new Schema({ 
    roomCategoryName: {
        type: String,
        unique: true
    },
});

module.exports = mongoose.model('roomCategory', roomCategorySchema);

