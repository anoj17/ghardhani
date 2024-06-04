import mongoose, { Types } from "mongoose";

const findPartnerSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true },
    lname: { type: String, required: true },

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
