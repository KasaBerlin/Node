const logger = (req, res, next) => {
  console.log("Boom!");
  //once this is done go on to the next thing
  next();
};

module.exports = logger;
