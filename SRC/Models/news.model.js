const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewSchema = new Schema({
    Title: {
        type: String,
        required: [true, 'pls fill this field']
    },
    Description: {
        type: String,
        required: [true, 'pls fill this field']
    },
    Date: {
        type: String,
        required: [true, 'pls fill this field']
    },
});

const newsModel = mongoose.model('News', NewSchema);
module.exports = newsModel;
