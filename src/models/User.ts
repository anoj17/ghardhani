import mongoose,{Schema,Document} from "mongoose";

export interface User extends Document {
    userName: String,
    email: String,
    password:String,
    verifyCode:String,
    verifyCodeExpiry:Date,
}


const UserSchema: Schema<User> = new Schema({
    userName: {
        type: String,
        required: [true,"UserName is required"],
        trim: true,  //in case dheur space rakhdihi to nau me
        unique: true,
    },
    email: {
        type: String,
        required: [true,"email is required"],
        unique: true,
        match: [/.+\@.+\../,"Email should be unique hai"],

    },
    password: {
        type: String,
        required: [true,"password is required"],
    },
    verifyCode: {
        type: String,
        required: [true,"VerifyCode ta rakho ne beta"],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true," verify CodeExpiry ta rakho bhai"],
    },
})