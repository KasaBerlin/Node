const express = require("express");
const router = express.Router();
const {validateInputs}=require("../middleware/validator")
const {userValidationRules}=require("../lib/validation/userRules")

const {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  addUser,
  // authenticateUser
} = require("../controllers/usersController");

router
  .route("/")
  .get(getUsers)
  .post(validateInputs((userValidationRules),addUser));

// router.route("/me").get(authenticateUser);

router
  .route("/:id")
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser);

module.exports = router;
