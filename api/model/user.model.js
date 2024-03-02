import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    GENDER : {
        type : String,
    },
    PHONE_NUMBER : {
        type : String,
    },

    ABC_ACCOUNT_ID : {
        type : String,
        required : [true, "please enter your abc id " ],
        unique : true

    },
    ENROLLMENT_NO : {
        type : String,
        required : [true , "please entter your enrollment number"],
        unique  : true,
    },
    UNIVERSITY_NAME : {
        type : String,
        required : [true , "enter your university name"]
    }
 

} , {timestamps : true})

 const User = new mongoose.model('User' , userSchema)

 export default User;