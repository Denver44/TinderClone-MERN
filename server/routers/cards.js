import express from "express";
const router = new express.Router();

import { getCard, createCard } from "../controllers/Card.js";
router.get("/card", getCard);
router.post("/card", createCard);

export default router;
