import mongoose, { Types } from "mongoose";

const findPartnerSchema = new mongoose.Schema(
  {
    fname: { type: String },
    lname: { type: String },

    phoneNumber: {
      type: String,
      default: "9800000000",
      unique: true,
      required: true,
    },
    roomLocation: {
      type: String,
    },
    roomPrice: {
      type: Number,
    },
    book: {
      type: String,
    },
    age: {
      type: Number,
      required: true
    },
    work: {
      type: String,
      default:
        "student",
    },
    userId: {
      type: Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);
const RoomPartner = mongoose.model("roomPartner", findPartnerSchema);

export default RoomPartner;
