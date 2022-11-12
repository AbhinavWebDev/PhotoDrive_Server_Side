import PostModel from "../Models/postModel.js";
import mongoose from "mongoose";

//Create new Post

export const createPost = async (req, res) => {
    const newPost = new PostModel(req.body);
    newPost._id = mongoose.Types.ObjectId();
    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};

//Get a Post
export const getPost = async (req, res) => {
   
    try {
        const post = await PostModel.find();

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
};


