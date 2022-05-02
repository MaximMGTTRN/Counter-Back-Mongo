const express = require("express");
const router = express.Router();

const {
  getAllCards,
  createNewCard,
  changeCardInfo,
  deleteCard,
} = require("../controllers/card.controller");

router.get("/allCards", getAllCards);
router.post("/createCard", createNewCard);
router.patch("/changeCard", changeCardInfo);
router.delete("/deleteCard", deleteCard);

module.exports = router;
