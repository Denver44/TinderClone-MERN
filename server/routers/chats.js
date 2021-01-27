import express from "express";
const router = new express.Router();

import { getChat, createChat } from "../controllers/Chats.js";
router.post("/chats", createChat);
router.get("/chats", getChat);

export default router;
