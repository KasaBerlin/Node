const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const members = require("../../Members");

// Gets all members
router.get("/", (req, res) => {
	res.json(members);
});

// Gets single member
router.get("/:id", (req, res) => {
	res.json(members.filter(member => member.id == req.params.id));
});

// Create member
router.post("/", (req, res) => {
	// res.send(req.body);
	const newMember = {
		id: uuid.v4(),
		name: req.body.name,
		email: req.body.email,
		status: "active"
	};
	if (!newMember.name || !newMember.email) {
		return res.status(400).json({ message: "Please include a name and email" });
	}
	members.push(newMember); // adds to our array
	res.json(members); // sends
});

module.exports = router;
