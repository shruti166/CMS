const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        title :{
            type: String,
            required: true,
            unique: true
        },
        desc : {
            type: String,
            required: true
        },
        username : {
            type: String,
            required:true
        },
        
    },
    {timestamps : true, versionKey: false}
)

const postModel = mongoose.model("posts", PostSchema)

module.exports = postModel;