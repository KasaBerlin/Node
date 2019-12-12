const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cart");

router.get("/add/")
router.get("/add/:id", cartController.add);
router.get("/remove/:id", cartController.remove);
router.get("/remove-all/:id",cartController.removeAll);

module.exports=router