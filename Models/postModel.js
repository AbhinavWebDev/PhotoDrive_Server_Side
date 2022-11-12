import mongoose, { SchemaTypes } from "mongoose";

const postSchema = mongoose.Schema({
    image: String,
},
    {
        timestamps: true


    })

var PostModel = mongoose.model("Posts", postSchema)
export default PostModel