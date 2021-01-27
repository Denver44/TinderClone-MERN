import mongoose from "mongoose";
import dotenv from "dotenv"; // For env File this dependecies needed
dotenv.config();

const connection_url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@cluster0.sadcq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose
  .connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connection successfully");
  })
  .catch((e) => {
    console.log(e.message);
  });
