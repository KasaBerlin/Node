const User = require("../models/User");
const createError = require("http-errors");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (e) {
    next(e);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) throw new createError.TooManyRequests();
    res.status(200).send(user);
  } catch (e) {
    next(e);
  }
};

exports.deleteUser = (req, res, next) => {
  const { id } = req.params;
  const user = db
    .get("users")
    .remove({ id })
    .write();
  res.status(200).send(user);
};

exports.updateUser = (req, res, next) => {
  const { id } = req.params;
  const dt = req.body;
  const user = db
    .get("users")
    .find({ id })
    .assign(dt)
    .write();
  res.status(200).send(user);
};

exports.addUser = (req, res, next) => {
  const user = req.body;
  db.get("users")
    .push(user)
    .last()
    .assign({ id: Date.now().toString() })
    .write();

  res.status(200).send(user);
};
