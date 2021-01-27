import mongoose from "mongoose";

const chatsSchema = mongoose.Schema({
  name: String,
  images: String,
  msgs: String,
});
export default mongoose.model("chats", chatsSchema);
