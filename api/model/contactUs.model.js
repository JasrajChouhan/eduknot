import mongoose from 'mongoose'

const queryPersonSchema = new  mongoose.Schema ({
    firstName : {
        type : String,
        required: true,
        maxlength : 50,
    },
        
    middleName : {
        type : String,
        maxlength : 50,
    },
    lastName :  {
        type : String,
        required: true,
        maxlength : 50,
    },
    email : {
        type : String,
        unique : true,
        lowercase : true,
        required : [true,'Please provide an Email'] ,
    },

    query : {
        type : String,
        maxlength : 50000,
    }

} ,{timestamps : true})

const  QueryPerson  = mongoose.model('QueryPerson',queryPersonSchema);

export default QueryPerson;