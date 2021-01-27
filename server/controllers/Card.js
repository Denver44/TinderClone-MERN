import Cards from "../model/dbCards.js";

export const getCard = async (req, res) => {
  try {
    const cardData = await Cards.find();
    res.status(200).send(cardData);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const createCard = async (req, res) => {
  try {
    const user = new Cards(req.body);
    const createCard = await user.save();
    res.status(201).send(createCard);
  } catch (err) {
    res.status(500).send(err);
  }
};
