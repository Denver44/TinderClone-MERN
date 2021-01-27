import mongoose from "mongoose";

// This schema is for the foretned part of the card name and image.
const cardSchema = mongoose.Schema({
  name: String,
  url: String,
});

// here the cards is collection name as we have to give name to collection and then pass the schema
export default mongoose.model("cards", cardSchema);
