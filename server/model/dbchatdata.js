import mongoose from "mongoose";

const chatDataSchema = mongoose.Schema({
  name: String,
  messgae: String,
  timestamp: String,
  profilePic: String,
});
export default mongoose.model("chatdata", chatDataSchema);
