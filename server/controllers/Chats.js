import Chats from "../model/dbchats.js";

export const getChat = async (req, res) => {
  try {
    const chat = await Chats.find();
    res.status(200).send(chat);
  } catch (err) {
    res.status(404).send(err);
  }
};

export const createChat = async (req, res) => {
  try {
    const userChat = new Chats(req.body);
    const createChat = await userChat.save();
    res.status(201).send(createChat);
  } catch (err) {
    res.status(404).send(err);
  }
};
