const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const VideoSchema = new Schema({
    //TODO:validation
    title:String,
    url:String,
    description:String
});
module.exports = mongoose.model('video', VideoSchema, 'videos')
