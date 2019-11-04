const express = require("express");
const router = express.Router();
const members = require("../../Members");
const logger = require("../../middleware/logger");
const uuid = require("uuid");
// gets all members
router.get("/", logger, (req, res) => {
  res.json(members);
});

// gets single member
router.get("/:id", logger, (req, res) => {
  res.json(members.filter(member => member.id == req.params.id));
});

// create member
router.post("/", (req, res) => {
  //   res.send(req.body);
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active"
  };
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ message: "Please include a name and email" });
  }
  members.push[newMember]; // adds to array
  res.json(members); // sends
});

module.exports = router;
