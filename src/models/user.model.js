import mongoose, {Schema} from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  avatar:{
    type: String, // cloudnary
    required:true,
  },
  watchHistory:[
    {
        type:Schema.Types.ObjectId,
        ref:"Video"
    }
  
],
password: {
    type: String,
    required:[true, "password is required"]
},
refreshToken: {
    type:String
}

},{timestamps:true});

userSchema.pre("save",async function(next) {
  if(this.isModified("password")) // isModified jo hein ye mongoose ka ek function hai

  this.password = await bcrypt.hash(this.password,10)
  next()


} )

userSchema.methods.isPasswordCorrect = async function(password) {
   return await bcrypt.compare(password,this.password)
}

export const User = mongoose.model("User",userSchema)