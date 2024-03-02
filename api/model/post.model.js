// models/Post.model.js

import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({

    content : {
        type : String,
        required : [true , "enter  the Post's Content"],
        maxlength : 50000
    },
    title : {
        type : String,
        required : [true , "enter the title of the post"],
        maxlength : 1000
    }
    ,
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User' ,
 
    },
    upvotes : {
        type : Number ,
        default : 0
    },
    
  
} , {timestamps : true});

const Post = mongoose.model('Post', postSchema);

export default Post;
