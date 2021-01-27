import express from "express";
import Cors from "cors";
import "./db/conn.js";
import Cards from "./routers/cards.js";
import Chats from "./routers/chats.js";
import ChatData from "./routers/chatdata.js";

// App config
const app = express();
const port = process.env.PORT || 8001;

// Middlewares
app.use(express.json());
app.use(Cors());

// API Endpoints
// Here we have use prefix /tinder for all
app.use("/tinder", Cards);
app.use("/tinder", Chats);
app.use("/tinder", ChatData);

// Listeners
app.listen(port, () => {
  console.log(`Server started at Port ${port}`);
});
