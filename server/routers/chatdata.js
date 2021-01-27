import express from "express";

const router = new express.Router();

import { getChatData, createChatdata } from "../controllers/Chatdata.js";

router.post("/chatdata", createChatdata);
router.get("/chatdata", getChatData);
export default router;
