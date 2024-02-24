const mongoose = require('mongoose');
// Corrected from 'schema' to 'Schema'
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    roomCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "roomCategory",
    },
    roomNumber: {
        type: String,
        required: true,
        unique: true
    },
    totalBeds: {
        type: Number,
        required: true
    },
    beds: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "beds",
    }
});
module.exports = mongoose.model('Room', roomSchema);
