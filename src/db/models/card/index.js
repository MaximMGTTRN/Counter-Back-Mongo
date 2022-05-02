const mongoose = require("mongoose");

const { Schema } = mongoose;

const cardScheme = new Schema({
  name: String,
  money: Number,
  time: String,
});

module.exports = Card = mongoose.model("cards", cardScheme);
