import mongoose from "mongoose";
const BookingsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hotelname: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  roomno:{
    type:Number,
    required:true,
  },
  status: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  
  date:{
    type:String,
    required:true,
  },
});

export default mongoose.model("Booking", BookingsSchema)