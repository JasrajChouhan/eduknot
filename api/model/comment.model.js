import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  

    content : {
        type : String,
        required : [true , "please enter the  content of your comment"],
        maxlength : 1000,
        
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User' ,
        required : [true , "please enter  the name of the user who posted this comment"]

    }
} , {timestamps : true});

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
