

import mongoose from 'mongoose';

const universitySchema = new mongoose.Schema({
  universityName : {
    type : String,
    required : [true , "please enter name of your universites"],
    maxlength: [30 ,"name can not be more than 30 characters"],


  },
  universityId : {
    type :  String ,
    unique : true,
    required : [true , "enter your university id "]


  },
  universityEmail : {
    type : String,
    lowerecase : String,
    unique : true,

  }

  
  
} , {timestamps : true});

const University = mongoose.model('University', universitySchema);

export default University;
