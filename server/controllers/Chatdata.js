import ChatData from "../model/dbchatdata.js";

export const getChatData = async (req, res) => {
  try {
    const chatData = await ChatData.find();
    res.status(200).send(chatData);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const createChatdata = async (req, res) => {
  try {
    const chat = new ChatData(req.body);
    const createchat = await chat.save();
    res.status(201).send(createchat);
  } catch (err) {
    res.status(404).send(err);
  }
};
