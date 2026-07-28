import mongoose from "mongoose";

 const userSchema =new mongoose.Schema({
    name: {
        type:String,

    },

    email: {
        type:String
    },

    password: {
        type:"String",
        
    },
      type: {
        type:"String",
        
    },


    role : {
        type:"String"
    },

      phone : {
        type:"String"
    },

      location : {
        type:"String"
    },

      bio : {
        type:"String"
    },

      profilepic : {
        type:"String"
    },

      headline : {
        type:"String"
    },


      hourlyRate : {
        type:"Number"
    },

      skills : {
        type:"String"
    },


      credit : {
        type:"Number"
    },

      status : {
        type:"String"
    },

      createdAt : {
        type:"Date"
    },

      updatedAt: {
        type:"Date"
    }

 
})

 export const userModel = mongoose.model("users" , userSchema)