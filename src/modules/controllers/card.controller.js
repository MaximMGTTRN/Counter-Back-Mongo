const Card = require("../../db/models/card/index.js");

module.exports.getAllCards = (req, res) => {
  Card.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createNewCard = (req, res) => {
  if (req.body) {
    const { body } = req;
    if (body.hasOwnProperty("name") ||
    body.hasOwnProperty("money") ||
    body.hasOwnProperty("time")) {
      const card = new Card(req.body);
      card.save().then((result) => {
        Card.find().then((result) => {
          res.send({ data: result });
        });
      });
    } else {
      res.status(422).send("Error! Wrong body");
    }
  } else {
    res.status(422).send("Error! This is not body!");
  }
};

module.exports.changeCardInfo = (req, res) => {
  if (req.body) {
    const { body } = req;
    if (
      body.hasOwnProperty("_id") &&
      (body.hasOwnProperty("name") ||
        body.hasOwnProperty("money") ||
        body.hasOwnProperty("time"))
    ) {
      Card.updateOne({ _id: body._id }, body).then(() => {
        Card.find().then((result) => {
          res.send({ data: result });
        });
      });
    } else {
      res.status(422).send("Error! Wrong body");
    }
  } else {
    res.status(422).send("Error! This is not body!");
  }
};

module.exports.deleteCard = (req, res) => {
  const id = req.query._id;
  if (!id) return res.status(422).send("Error! Write correct Id");
  Card.deleteOne({ _id: id })
    .then(() => {
      Card.find().then((result) => {
        res.send({ data: result });
      });
    })
    .catch(() => {
      res.status(422).send("Error! Id can not be deleted");
    });
};
