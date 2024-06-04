import mongoose from "mongoose";

const findPartnerSchema = new mongoose.Schema(
  {
    fname: { type: String, required: true, unique: true },
    lname: { type: String, required: true, unique: true },

    phoneNumber: {
      type: String,
      default: "9800000000",
      required: true,
    },
    roomLocation: {
      type: String,
      default: "Nepal",
      required: true,
    },
    roomPrice: {
      type: Number,
      required: true,
    },
    book: {
      type: String,
      default: "yes",
    },
    work: {
      type: String,
      default:
        "student",
    },
  },
  { timestamps: true }
);
const RoomPartner = mongoose.model("roomPartner", findPartnerSchema);

export default RoomPartner;
