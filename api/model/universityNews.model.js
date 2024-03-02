import mongoose from 'mongoose'
import University from './university.model.js';
const universityNews = new mongoose.Schema({

    title : {
        type : String,
        required : [true , "enter the name of title "],
        maxlength: 50
    },
    content :{
        type : String,
        required :[true,"please add : content"]
    },
    author : {
        type : mongoose.Types.ObjectId,
        ref   : University,
        // required : [true , "enter the author of news "]
        
    }
    

} , {timestamps : true})


const UniversityNews = mongoose.model('UniversityNews', universityNews)

export default UniversityNews;